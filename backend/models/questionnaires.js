const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const questionnairesSchema = new Schema(
    {
        // _id: mongoose.Schema.Types.ObjectId,
        // line above results in the following error "document must have an _id before saving"
        title: { type: String, required: false, unique: false },
        language: { type: String, required: false, unique: true },
        questions: { type: Array, required: true },
    },
    {
        timestamp: true,
    }
);

const Questionnaires = mongoose.model('Questionnaires', questionnairesSchema);

module.exports = Questionnaires;
