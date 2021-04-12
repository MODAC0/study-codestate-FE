const flightlist = require('../Repositorie/flightlist');

module.exports = {
  findAll: (req, res) => {
    try {
      // 조건에 따른 항공편 조회
      // 시간에 따른 필터링
      if (req.query.departure_times !== undefined && !req.query.arrival_times !== undefined) {
        const list = flightlist.filter((item) => {
          return item.departure_times === req.query.departure_times && item.arrival_times === req.query.arrival_times;
        });
        console.log(`[GET] Success : /flight?departure_times=${req.query.departure_times}&arrival_times=${req.query.arrival_times}`);
        return res.status(200).json(list);
      }
      // 공항에 따른 필터링
      if (req.query.departure !== undefined && req.query.destination !== undefined) {
        const list = flightlist.filter((item) => {
          return item.departure === req.query.departure && item.destination === req.query.destination;
        });
        console.log(`[GET] Success : /flight?departure=${req.query.departure}&destination=${req.query.destination}`);
        return res.status(200).json(list);
      }

      // 쿼리가 없으면 전체 데이터 전달
      console.log('[GET] Success : /flight');
      res.json(flightlist);
    } catch (error) {
      console.error(`[GET] Error : /flight ${error}`);
      return res.status(506).send('[GET] Failed : Not found flight');
    }
  },

  findById: (req, res) => {
    try {
      const data = flightlist.filter(item => req.params.id == item.uuid);
      console.log('[GET] Success : /flight/:id');
      return res.status(200).send(data[0]);
    } catch (error) {
      console.error(`[GET] Error : /flight/:id ${error}`);
      return res.status(506).send('[GET] Failed : Not found flight');
    }
  },

  update: (req, res) => {
    try {
      let data;
      flightlist.forEach((item) => {
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
      console.log('[PUT] Success : /flight/:id');
      return res.status(200).send(data);
    } catch (error) {
      console.error(`[PUT] Error : /flight/:id ${error}`);
      return res.status(506).send(`[PUT] Failed : Not Update flight ${req.params.id}`);
    }
  }
};
