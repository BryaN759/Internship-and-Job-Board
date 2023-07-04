const mongoose = require('mongoose');
const goalSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,  // object id that is created
        required: true,
        ref: 'User'     // referencing the User model
    },
    text: {
        type: String,
        required: [true, 'Please add a text value']
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('Goal', goalSchema);