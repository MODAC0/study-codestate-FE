const airports = require('../repository/airportList');

module.exports = {
  // [GET] /airport?query={query} 요청을 수행합니다.
  // 공항 이름 자동완성 기능을 수행합니다!
  findAll: (req, res) => {
    if (req.query.query !== undefined) {
      console.log(req.query.query);
      const list = airports.filter((item) => {
        return item.code.includes(req.query.query.toUpperCase());
      });
      return res.status(200).json(list);
    }
    res.json(airports);
  }
};
