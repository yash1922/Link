const { UUID } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//blueprint/detail of how thw data is going to look in our database
const fileSchema = new Schema({
    filename: {type: String, required : true},
    path: {type: String, required: true},
    size: {type: Number, required: true},
    uuid: {type: String, required: true},
    sender: {type: String, required: false},
    receiver: {type: String, required: false},
}, {timestamps: true});

module.exports = mongoose.model('File', fileSchema);