const flights = require('../repository/flightList');
const airports = require('../repository/airportList');

module.exports = {
  findAll: (req, res) => {
    try {
      // 조건에 따른 항공편 조회
      // 시간에 따른 필터링
      if (req.query.departure_times !== undefined && !req.query.arrival_times !== undefined) {
        const list = flights.filter((item) => {
          return item.departure_times === req.query.departure_times && item.arrival_times === req.query.arrival_times;
        });
        return res.status(200).json(list);
      }
      // 공항에 따른 필터링
      if (req.query.departure !== undefined && req.query.destination !== undefined) {
        const list = flights.filter((item) => {
          return item.departure === req.query.departure && item.destination === req.query.destination;
        });
        return res.status(200).json(list);
      }
      // 자동 완성
      if (req.query.keyword !== undefined) {
        const list = airports.filter((item) => {
          return item.code.includes(req.query.keyword.toUpperCase());
        });
        return res.status(200).json(list);
      }
      res.json(flights);
    } catch (error) {
      console.error(`[GET] Error : /flight ${error}`);
      return res.status(506).send('[GET] Failed : Not found flight');
    }
  },

  findById: (req, res) => {
    try {
      const data = flights.filter(item => req.params.id === item.uuid);
      return res.status(200).send(data[0]);
    } catch (error) {
      console.error(`[GET] Error : /flight/:id ${error}`);
      return res.status(506).send('[GET] Failed : Not found flight');
    }
  },

  update: (req, res) => {
    try {
      let data;
      flights.forEach((item) => {
        if (req.params.id === item.uuid) {
          if (req.body.departure !== undefined) {
            item.departure = req.body.departure;
          }
          if (req.body.destination !== undefined) {
            item.destination = req.body.destination;
          }
          if (req.body.departure_times !== undefined) {
            item.departure_times = req.body.departure_times;
          }
          if (req.body.arrival_times !== undefined) {
            item.arrival_times = req.body.arrival_times;
          }
          data = item;
        }
      });
      return res.status(200).send(data);
    } catch (error) {
      console.error(`[PUT] Error : /flight/:id ${error}`);
      return res.status(506).send(`[PUT] Failed : Not Update flight ${req.params.id}`);
    }
  }
};
