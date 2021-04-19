const { v4: uuidv4 } = require('uuid');
const flights = require('../repository/flightList');
let booking = [];

module.exports = {
  findById: (req, res) => {
    try {
      if (req.query.flight_id !== undefined) {
        const list = booking.filter(item => item.flight_guid === req.query.flight_id);
        return res.status(200).json(list);
      }
      if (req.query.phone !== undefined) {
        const [{ guid, flight_guid, name, phone }] = booking.filter(item => item.phone === req.query.phone);
        const [{ uuid, departure, destination, departure_times, arrival_times }] = flights.filter(item => item.uuid === flight_guid);
        return res.status(200).json({ uuid, departure, destination, departure_times, arrival_times, guid, name, phone });
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
      const { flight_guid, name, phone } = req.body;
      booking.push({
        guid: uuidv4(),
        flight_guid,
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
