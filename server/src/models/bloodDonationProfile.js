const mongoose = require('mongoose');
const { Schema } = mongoose;

const campSchema = new Schema({
  camp_name: {
    type: String,
    required: true
  },
  // is_camp_active:{

  // },
  address: {
    line_1: {
      type: String,
      // required: true
    },
    line_2: {
      type: String
    },
    city: {
      type: String,
      // required: true
    },
    state: {
      type: String,
      // required: true
    },
    pincode: {
      type: String,
      // required: true
    },
    country: {
      type: String,
      // required: true
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

const organizationSchema = new Schema({
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
    line_1: {
      type: String,
      // required: true
    },
    line_2: {
      type: String
    },
    city: {
      type: String,
      // required: true
    },
    state: {
      type: String,
      // required: true
    },
    pincode: {
      type: String,
      // required: true
    },
    country: {
      type: String,
      // required: true
    }
  },
  contact_no: {
    type: String,
    // required: true
  },
  camps: [campSchema]
});

const Organization = mongoose.model('Organization', organizationSchema);

module.exports = Organization;
