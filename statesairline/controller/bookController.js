const { v4: uuidv4 } = require('uuid');
const {serverErrorHandler} = require('./errorhandler');
const flights = require('../repository/flightList');
const errorhandler = require('./errorhandler');
let booking = [];

module.exports = {
  //serverErrorHandler errorhandler.js 안에 정의 된 메소드 입니다. 
  //라우터 요청에 에러처리를 수행하는 메소드입니다.
  findById: (req, res) => {
    serverErrorHandler(()=>{
      // [GET] /book 
      // [GET] /book?

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
    }, `[GET] /book`)
  },

  create: (req, res) => {
    serverErrorHandler(()=>{
      const { flight_uuid, name, phone } = req.body;
      booking.push({
        uuid: uuidv4(),
        flight_uuid,
        name,
        phone
      });
      return res.status(201).json('[POST] Success : Create booking data');
    }, `[POST] /book`);
  },

  deleteById: (req, res) => {
    serverErrorHandler(()=>{
      booking = booking.filter(item => req.query.phone !== item.phone);
      return res.status(200).json(booking);
    }, `[delete] /delete/reserviontdata/:id`);
  }
}