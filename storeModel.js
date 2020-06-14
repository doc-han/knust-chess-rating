let mongoose = require('mongoose');

module.exports = mongoose.model('store', new mongoose.Schema({
    data: String,
    new: Boolean
}))