/* You'll need to have MySQL running and your Node server running
 * for these tests to pass. */

const mysql = require("mysql");
const axios = require("axios"); // You might need to npm install the request module!
const expect = require("chai").expect;
const fs = require("fs");
const schema = fs.readFileSync("./schema.sql").toString();
const seed = fs.readFileSync("./seed.sql").toString();
const testDB = "cmarket_test";

describe("Sprint-Cmarket-Database", () => {
  var dbConnection;

  describe("Persistent Cmarket Server", function () {
    before((done) => {
      console.log("before");
      dbConnection = mysql.createConnection({
        user: "root",
        password: process.env.DATABASE_SPRINT_PASSWORD,
        database: testDB,
        multipleStatements: true,
      });
      dbConnection.connect(done);
    });
    beforeEach((done) => {
      /* Empty the db table befo test so that multiple tests
       * (or repeated runs of the tests) won't screw each other up: */
      console.log("beforeEach");
      dbConnection.query(
        `DROP DATABASE IF EXISTS ${testDB};
        CREATE DATABASE ${testDB};
        USE ${testDB};
        ${schema}
        ${seed}`,
        done
      );
    });
    after(function () {
      console.log("after");
      dbConnection.end();
    });

    it("주문내역을 데이터베이스에 저장해야합니다.", function (done) {
      // Place the order to the cmarket server.
      axios({
        method: "post",
        url: "http://localhost:4000/users/1/orders/new",
        data: {
          orders: [
            { itemId: 1, quantity: 2 },
            { itemId: 2, quantity: 5 },
          ],
          totalPrice: 79800,
        },
      })
        .then(() => {
          const queryString = "SELECT * FROM orders";
          dbConnection.query(queryString, function (err, result) {
            // Should have one result:
            expect(result.length).to.equal(1);
            expect(result[0].total_price).to.equal(79800);
          });
        })
        .then(() => {
          const queryString = "SELECT * FROM order_items";
          dbConnection.query(queryString, function (err, result) {
            expect(result.length).to.equal(2);
            expect(result[0].order_id).to.equal(1);
            expect(result[1].order_id).to.equal(1);
            expect(result[1].item_id).to.equal(2);
            expect(result[1].order_quantity).to.equal(5);
          });
        })
        .then(done);
    });

    it("데이터베이스에 저장된 주문내역을 가져와야합니다.", function (done) {
      const postOrder = (data) => {
        return axios({
          method: "post",
          url: "http://127.0.0.1:4000/users/1/orders/new",
          data,
        });
      };

      axios
        .all(
          [
            {
              orders: [
                { itemId: 1, quantity: 2 },
                { itemId: 2, quantity: 5 },
              ],
              totalPrice: 79800,
            },
            {
              orders: [
                { itemId: 5, quantity: 1 },
                { itemId: 6, quantity: 2 },
              ],
              totalPrice: 10700,
            },
          ].map(postOrder),
          axios.get("http://127.0.0.1:4000/users/1/orders")
        )
        .then(
          axios.spread((...res) => {
            const orders = res;
            console.log(orders);
            expect(orders[0].name).to.equal("노른자 분리기");
            expect(orders[0].id).to.equal(1);
            expect(orders[3].id).to.equal(2);
            expect(orders[3].order_quantity).to.equal(2);
          })
        )
        .then(done);
    });
  });
});
