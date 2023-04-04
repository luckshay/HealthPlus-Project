const mongoose = require('mongoose');

const recipientProfileSchema = new mongoose.Schema({
  unique_health_id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  contact_no: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  blood_group: {
    type: String,
    required: true
  },
  medical_history: {
    blood_pressure: {
      type: Number,
      required: true
    },
    blood_sugar: {
      type: Number,
      required: true
    },
    heart_rate: {
      type: Number,
      required: true
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
        required: true
      },
      doctor_name: {
        type: String,
        required: true
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
        required: true
      },
      doctor_name: {
        type: String,
        required: true
      },
      doctor_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'DoctorProfile'
      },
      hospital_name: {
        type: String,
        required: true
      },
      hospital_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
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
      required: true
    },
    donation_camp_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'DonationCampProfile'
    },
    units_donated: {
      type: Number,
      required: true
    }
  }]
});

const RecipientProfile = mongoose.model('RecipientProfile', recipientProfileSchema);

module.exports = RecipientProfile;
