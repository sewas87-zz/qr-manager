const express = require('express');
const router = express.Router();
const scanService = require('./scan.service');

// routes
router.post('/scan', scan);


module.exports = router;

function scan(req, res, next) {
    scanService.scan(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}
