const airports = require('../repository/airportList');

module.exports = {
  findAll: async (req, res) => {
      // 자동 완성
      if (req.query.query !== undefined) {
        console.log(req.query.query)
        const list = airports.filter((item) => {
          return item.code.includes(req.query.query.toUpperCase());
        });
        return res.status(200).json(list);
      }
      res.json(airports);
  }
};
