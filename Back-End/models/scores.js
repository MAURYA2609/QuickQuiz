var mongoose = require('mongoose');

var ScoresSchema = mongoose.Schema({
    username: { type: String, require: true },
    score: { type: String, require: true },
    category: { type: String, require: true }
}, {
    timestamp: true
})


module.exports = mongoose.model('scores', ScoresSchema);