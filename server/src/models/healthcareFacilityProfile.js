const mongoose = require('mongoose');
const { Schema } = mongoose;

const healthCareproSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  speciality: String,
  contact_no: String,
  email: String,
  joining_date: Date,
  leaving_date: Date,
});

const healthCareFacilitySchema = new Schema({
  registration_no: {
    type:String
  },
  healthcare_facility_id: {
    type: String,
    required:true,
    unique:true
  },
  healthcare_facility_name: {
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
    type:Number
  },
  email:  {
    type: String,
    required: true
  },
  doctors: [healthCareproSchema],
});

const healthCareFacility= mongoose.model('healthCareFacility', healthCareFacilitySchema);

module.exports = healthCareFacility;





