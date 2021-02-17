/* You'll need to have MySQL running and your Node server running
 * for these tests to pass. */

const mysql = require("mysql");
const request = require("request"); // You might need to npm install the request module!
const expect = require("chai").expect;

describe("Sprint-Cmarket-Database", () => {
  var dbConnection;

  describe("Persistent Cmarket Server", function () {
    before(function (done) {
      dbConnection = mysql.createConnection({
        user: "root",
        password: process.env.DATABASE_SPRINT_PASSWORD,
        database: "cmarket",
        multipleStatements: true,
      });
      dbConnection.connect();

      /* Empty the db table befo test so that multiple tests
       * (or repeated runs of the tests) won't screw each other up: */

      dbConnection.query(
        `SET FOREIGN_KEY_CHECKS = 0;
        TRUNCATE orders;
        TRUNCATE order_items;
        SET FOREIGN_KEY_CHECKS = 1`,
        done
      );
    });

    after(function () {
      dbConnection.end();
    });

    it("Should insert placed order to the DB", function (done) {
      // Place the order to the cmarket server.
      request(
        {
          method: "POST",
          uri: "http://127.0.0.1:4000/users/1/orders/new",
          json: {
            orders: [
              { itemId: 1, quantity: 2 },
              { itemId: 2, quantity: 5 },
            ],
            totalPrice: 79800,
          },
        },
        () => {
          // Now if we look in the database, we should find the
          // placed order there.

          const queryString = "SELECT * FROM orders";

          dbConnection.query(queryString, function (err, result) {
            // Should have one result:
            expect(result.length).to.equal(1);
            expect(result[0].total_price).to.equal(79800);

            const queryString = "SELECT * FROM order_items";
            dbConnection.query(queryString, function (err, result) {
              expect(result.length).to.equal(2);
              expect(result[0].order_id).to.equal(1);
              expect(result[1].order_id).to.equal(1);
              expect(result[1].item_id).to.equal(2);
              expect(result[1].order_quantity).to.equal(5);
              done();
            });
          });
        }
      );
    });

    it("Should output all orders from the DB", function (done) {
      request(
        {
          method: "POST",
          uri: "http://127.0.0.1:4000/users/1/orders/new",
          json: {
            orders: [
              { itemId: 5, quantity: 1 },
              { itemId: 6, quantity: 2 },
            ],
            totalPrice: 10700,
          },
        },
        () => {
          request(
            "http://127.0.0.1:4000/users/1/orders",
            function (error, response, body) {
              const orders = JSON.parse(body);

              expect(orders[0].name).to.equal("노른자 분리기");
              expect(orders[0].id).to.equal(1);
              expect(orders[3].id).to.equal(2);
              expect(orders[3].order_quantity).to.equal(2);
              done();
            }
          );
        }
      );
    });
    // Now query the Cmarket server and see if it returns
    // the order we just inserted:
  });
});
