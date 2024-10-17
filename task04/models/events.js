const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: { type: String, required: true },
    date: { type: Date, required: true },
    booked: { type: Boolean, default: false }
});

const event = mongoose.model('Event', eventSchema);
module.exports = event;