const airports = require('../repository/airportList');

module.exports = {
  findAll: (req, res) => {
    try {
      // 자동 완성
      if (req.query.query !== undefined) {
        console.log(req.query.query)
        const list = airports.filter((item) => {
          return item.code.includes(req.query.query.toUpperCase());
        });
        return res.status(200).json(list);
      }
      res.json(airports);
    } catch (error) {
      console.error(`[GET] Error : /airport ${error}`);
      return res.status(500).json({
        message: 'Internal Server Error',
        stacktrace: error.toString()
      });
    }
  }
};
