const RecipientProfile = require('../models/recipientProfile')

exports.getRecipientById = async (req, res) => {
    try {
        const recipientInfo=req.params.id;
        const recipient = await RecipientProfile.findOne({userid:recipientInfo});
        res.json(recipient);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching recipient from database.' });
    }
};

exports.updateRecipient = async (req, res) => {
    try {
        const recipient = await RecipientProfile.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(recipient);
    } catch (error) {
        res.status(500).json({ error: 'Error updating recipient in database.' });
    }
};

