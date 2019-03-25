var express = require('express');
var router = express.Router();
var CrimeCollection = require('../models/crimesModel');

//find by street id
router.get('/byStreetId/:id', function (req, res) {
    CrimeCollection.find({'crime.location.street.id':req.params.id}, (error, results) => {
        if (error) res.send(error);
        else {
            console.log(results);
            res.render('results', {idResults: results})
        }
    })
});

module.exports = router;
