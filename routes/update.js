var express = require('express');
var router = express.Router();
var CrimeCollection = require('../models/crimesModel');

//update date
router.get('/date/:code/:name/:date', function (req, res) {
    CrimeCollection.findOneAndUpdate({
            category: {
                code: req.params.code,
                name: req.params.name
            }
        },
        {date: req.params.date}, (error, results) => {
            if (error) res.send(error);
            else res.render('results', {updateDate: results})
        })
});

module.exports = router;
