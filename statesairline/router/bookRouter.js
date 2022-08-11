const { findAll, findByPhone, findByPhoneAndFlightId, create, deleteByBookingId } = require('../controller/bookController');
const express = require('express');
const router = express.Router();

router.get('/', findAll);

router.get('/:phone', findByPhone);

router.get('/:phone/:flight_uuid', findByPhoneAndFlightId);

router.post('/', create);

//Optional
router.delete('/:booking_uuid', deleteByBookingId);

module.exports = router;
