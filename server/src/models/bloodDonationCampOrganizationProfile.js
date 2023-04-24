const mongoose = require('mongoose');

const campSchema = new mongoose.Schema({
  camp_name: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
  },
  address: {
    type: Object,
    default: {
      line_1: '',
      line_2: '',
      city: '',
      state: '',
      country: '',
      pincode: ''
    }
  },
  date: {
    type: Date,
    required: true
  },
  start_time: {
    type: String,
    // required: true
  },
  end_time: {
    type: String,
    // required: true
  },
  units_collected: {
    A_positive: {
      type: Number,
      default: 0
    },
    A_negative: {
      type: Number,
      default: 0
    },
    B_positive: {
      type: Number,
      default: 0
    },
    B_negative: {
      type: Number,
      default: 0
    },
    AB_positive: {
      type: Number,
      default: 0
    },
    AB_negative: {
      type: Number,
      default: 0
    },
    O_positive: {
      type: Number,
      default: 0
    },
    O_negative: {
      type: Number,
      default: 0
    },
  }
});

const bloodDonationCampOrganizationSchema = new mongoose.Schema({
  donation_org_id: {
    type: String,
    required: true,
    unique: true
  },
  orgName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  address: {
    type: Object,
    default: {
      line_1: '',
      line_2: '',
      city: '',
      state: '',
      country: '',
      pincode: ''
    }
  },
  contact_no: {
    type: Number,
  },
  camps: [campSchema]
});

const BloodDonationCampOrganization = mongoose.model('BloodDonationCampOrganization', bloodDonationCampOrganizationSchema);

module.exports = BloodDonationCampOrganization;
