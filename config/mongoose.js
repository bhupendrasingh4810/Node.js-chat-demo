var config = require('./environment/development'),
    mongoose = require('mongoose');

module.exports = function(req, res) {
    var db = mongoose.connect('mongodb://localhost:27017/chat').then(() => {
        res.status(200).json({ 'status': 'success', 'message': 'Database connected successfully!' });
    }, (err) => {
        if (err) {}
    })

    require('../app/model/user.model');
    require('../app/model/workspace.model')

    return db;
}