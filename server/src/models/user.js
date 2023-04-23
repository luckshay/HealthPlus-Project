const mongoose = require('mongoose');
const RecipientProfile = require('./recipientProfile')
const bloodDonationProfile = require('./bloodDonationProfile')

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
  if (this.isNew && this.userType==="Recipient") {
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

// Pre-save hook to create a Blood Donation Camp profile for a new user
userSchema.pre('save', async function(next) {
  if (this.isNew && this.userType==="Blood Donation Camp") {
    const CampProfile = new bloodDonationProfile({
      donation_org_id: this._id,
      orgName: this.userName,
      email: this.email,
    });
    try {
      await CampProfile.save();
      next();
    } catch (error) {
      next(error);
    }
  } else {
    next();
  }
});


module.exports = mongoose.model('User', userSchema);