const mongoose = require('mongoose');
const RecipientProfile = require('./recipientProfile')

const userSchema = new mongoose.Schema(
  {
  userName: {
    type: String,
    required: true
  },
  userType: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  }
},
{
  timestamps: true,
}
);

// Pre-save hook to create a recipient profile for a new user
userSchema.pre('save', async function(next) {
  if (this.isNew) {
    const recipient = new RecipientProfile({
      userid: this._id,
      userName: this.userName,
      email: this.email,
    });
    try {
      await recipient.save();
      next();
    } catch (error) {
      next(error);
    }
  } else {
    next();
  }
});



module.exports = mongoose.model('User', userSchema);