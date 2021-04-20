const { v4: uuidv4 } = require('uuid');
const flights = require('../repository/flightList');
let booking = [];

module.exports = {
  findById: (req, res) => {
    try {
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
    } catch (error) {
      console.error(`[GET] Error : /book ${error}`);
      return res.status(500).json({
        message: 'Internal Server Error',
        stacktrace: error.toString()
      });
    }
  },

  create: (req, res) => {
    try {
      const { flight_uuid, name, phone } = req.body;
      booking.push({
        uuid: uuidv4(),
        flight_uuid,
        name,
        phone
      });
      return res.status(201).json('[POST] Success : Create booking data');
    } catch (error) {
      console.error(`[POST] Error : /book ${error}`);
      return res.status(500).json({
        message: 'Internal Server Error',
        stacktrace: error.toString()
      });
    }
  },

  deleteById: (req, res) => {
    try {
      booking = booking.filter(item => req.query.phone !== item.phone);
      return res.status(200).json(booking);
    } catch (error) {
      console.error(`[delete] Error /delete/reserviontdata/:id : ${error}`);
      return res.status(500).json({
        message: 'Internal Server Error',
        stacktrace: error.toString()
      });
    }
  }
};
