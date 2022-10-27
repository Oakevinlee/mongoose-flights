var flightsCtrl = require('../controllers/flights');

var express = require('express');
var router = express.Router();

// /flights
router.get('/', flightsCtrl.index);

// flights/new 
router.get('/new', flightsCtrl.new);

router.get('/:id', flightsCtrl.show);

router.post('/', flightsCtrl.create);

module.exports = router;
