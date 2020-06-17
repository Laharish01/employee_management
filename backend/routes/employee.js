let employeeModel = require('../models/employee.model');
let express = require('express');
let router = express.Router();

router.post('/employee', (req, res) => {
    if (!req.body) {
        return res.status(400).send('Request body is missing');
    }


    let model = new employeeModel(req.body);
    model.save().
        then(doc => {
            if (!doc || doc.length == 0) {
                return res.status(500).send(doc)
            }

            res.status(201).send(doc);
        }).
        catch(err => {
            res.status(500).json(err);
        })
});

router.get('/employee', (req, res) => {
    if(!req.query.email) {
        return res.status(400).send('Missing URL parameter :email');
    }
    employeeModel.findOne({
        email: req.query.email
    })
    .then(doc => {
        res.json(doc);
    })
    .catch(err => {
        res.status(500).json(err);
    })
});

router.get('/employee-list', (req, res) => {
    employeeModel.find().
    then(doc => {
        res.json(doc);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

router.put('/employee', (req, res) => {
    if(!req.query.email) {
        return res.status(400).send('Missing URL parameter :email');
    }

    employeeModel.findOneAndUpdate({
        email: req.query.email
    }, req.body, {
        new: true
    })
    .then(doc => {
        res.json(doc);
    })
    .catch(err => {
        res.status(500).json(err);
    })
    
});

router.delete('/employee', (req,res) => {
    if(!req.query.email) {
        return res.status(400).send('Missing URL parameter :email');
    }

    employeeModel.findOneAndDelete({
        email: req.query.email
    })
    .then(doc => {
        res.json(doc);
    })
    .catch(err => {
        res.status(500).json(err);
    })
});

module.exports = router;