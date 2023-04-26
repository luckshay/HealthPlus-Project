const mongoose = require('mongoose');
const RecipientProfile = require('./recipientProfile')
const bloodDonationCampOrganizationProfile =require('./bloodDonationCampOrganizationProfile')
const healthCareFacilityProfile= require('./healthcareFacilityProfile')

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
    const CampProfile = new bloodDonationCampOrganizationProfile({
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
userSchema.pre('save', async function(next) {
  if (this.isNew && this.userType==="Healthcare Facility") {
    const facilityProfile = new healthCareFacilityProfile({
      healthcare_facility_id: this._id,
      healthcare_facility_name: this.userName,
      email: this.email,
    });
    try {
      await facilityProfile.save();
      next();
    } catch (error) {
      next(error);
    }
  } else {
    next();
  }
});

module.exports = mongoose.model('User', userSchema);