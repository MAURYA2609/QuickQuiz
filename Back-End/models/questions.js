var mongoose = require('mongoose');

var QuestionsSchema = mongoose.Schema({
    question: { type: String, require: true },
    optionA: { type: String, require: true },
    optionB: { type: String, require: true },
    optionC: { type: String, require: true },
    optionD: { type: String, require: true },
    correct: { type: String, require: true },
    category: { type: String, require: true }
}, {
    timestamp: true
})


module.exports = mongoose.model('questions', QuestionsSchema);