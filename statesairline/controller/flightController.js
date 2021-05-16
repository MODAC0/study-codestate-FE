const flights = require('../repository/flightList');

module.exports = {
  // [GET] /flight
  // 요청 된 departure_times, arrival_times, destination, departure 값과 동일한 값을 가진 항공편 데이터를 조회합니다.
  findAll: async (req, res) => {
    if (req.query.departure_times !== undefined && req.query.arrival_times !== undefined) {
      const list = flights.filter((item) => {
        return new Date(item.departure_times).getDate() === new Date(req.query.departure_times).getDate() &&
            new Date(item.arrival_times).getDate() === new Date(req.query.arrival_times).getDate();
      });
      return res.status(200).json(list);
    }

    if (req.query.departure !== undefined && req.query.destination !== undefined) {
      const list = flights.filter((item) => {
        return item.departure === req.query.departure && item.destination === req.query.destination;
      });
      return res.status(200).json(list);
    }

    return res.json(flights);
  },
  // [GET] /fligjt/{:id}
  // 요청 된 id 값과 동일한 uuid 값을 가진 항공편 데이터를 조회합니다.
  findById: async (req, res) => {
    const data = flights.filter(item => req.params.id === item.uuid);
    if (data.length > 0) {
      return res.status(200).json(data[0]);
    } else {
      return res.status(404).json(null);
    }
  },

  // [PUT] /flight/{:id} 요청을 수행합니다.
  // 요청 된 id 값과 동일한 uuid 값을 가진 항공편 데이터를 요쳥 된 Body 데이터로 수정합니다.
  update: async (req, res) => {
    let data;
    flights.forEach((item) => {
      if (req.params.id === item.uuid) {
        if (req.body.departure !== undefined) { item.departure = req.body.departure; }
        if (req.body.destination !== undefined) { item.destination = req.body.destination; }
        if (req.body.departure_times !== undefined) { item.departure_times = req.body.departure_times; }
        if (req.body.arrival_times !== undefined) { item.arrival_times = req.body.arrival_times; }
        data = item;
      }
    });
    return res.status(200).json(data);
  }
};
