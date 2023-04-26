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
  registration_no: String,
  hospital_id: Schema.Types.ObjectId,
  hospital_name: String,
  address: String,
  contact_no: String,
  email: String,
  doctors: [healthCareproSchema],
});

const healthCareFacility= mongoose.model('healthCareFacility', healthCareFacilitySchema);

module.exports = healthCareFacility;





