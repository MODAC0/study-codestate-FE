const flights = require('../repository/flightList');
let booking = [];

module.exports = {
  //serverErrorHandler errorhandler.js 안에 정의 된 메소드 입니다. 
  //라우터 요청에 에러처리를 수행하는 메소드입니다.
  findById: async (req, res) => {
      if (req.query.flight_id !== undefined) {
        const filtered = booking.filter(item => item.flight_uuid === req.query.flight_id);
        return res.status(200).json(filtered);
      }
      if (req.query.phone !== undefined) {
        const filtered = booking.filter(item => item.phone === req.query.phone);
        if (filtered.length === 0) {
          return res.status(404).json([])
        }
        const [{uuid, flight_uuid, name, phone}] = filtered;
        return res.status(200).json({uuid, flight_uuid, name, phone});
      }
      return res.status(200).json(booking);
  },

  create: async (req, res) => {
      const { flight_uuid, name, phone } = req.body;
      booking.push({
        flight_uuid,
        name,
        phone
      });
      return res.status(201).json('[POST] Success : Create booking data');
  },

  deleteById: async (req, res) => {
      booking = booking.filter(item => req.query.phone !== item.phone);
      return res.status(200).json(booking);
  }
}