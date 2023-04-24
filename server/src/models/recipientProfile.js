const mongoose = require('mongoose');

const recipientProfileSchema = new mongoose.Schema({
  userid: {
    type: String,
    required: true,
    unique: true
  },
  userName: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
  },
  gender: {
    type: String,
  },
  contact_no: {
    type: Number,
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
  blood_group: {
    type: String,
  },
  medical_history: {
    blood_pressure: {
      type: Number
    },
    blood_sugar: {
      type: Number
    },
    heart_rate: {
      type: Number,
    },
    allergies: [{
      type: String
    }],
    surgeries: [{
      type: String
    }],
    prescriptions: [{
      date: {
        type: Date,
      },
      doctor_name: {
        type: String,
      },
      doctor_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'DoctorProfile'
      },
      medicines: [{
        type: String
      }],
      notes: {
        type: String
      }
    }],
    appointments: [{
      date: {
        type: Date,
      },
      doctor_name: {
        type: String,
      },
      doctor_id: {
        type: mongoose.Schema.Types.ObjectId,
        // required: true,
        ref: 'DoctorProfile'
      },
      hospital_name: {
        type: String,
        // required: true
      },
      hospital_id: {
        type: mongoose.Schema.Types.ObjectId,
        // required: true,
        ref: 'HospitalProfile'
      },
      notes: {
        type: String
      }
    }]
  },
  blood_donation_history: [{
    donation_date: {
      type: Date,
      // required: true
    },
    donation_camp_id: {
      type: mongoose.Schema.Types.ObjectId,
      // required: true,
      ref: 'DonationCampProfile'
    },
    units_donated: {
      type: Number,
      // required: true
    }
  }]
});

const RecipientProfile = mongoose.model('RecipientProfile', recipientProfileSchema);

module.exports = RecipientProfile;
