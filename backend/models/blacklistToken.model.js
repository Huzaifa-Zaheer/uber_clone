const mongoose = require('mongoose');

const blacklistTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 86400 // TTL index (24 hours = 86400 seconds)
    }
});

const blacklistTokenModel = mongoose.model('Blacklist', blacklistTokenSchema);

module.exports = blacklistTokenModel;
