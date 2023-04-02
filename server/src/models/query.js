const mongoose = require('mongoose');

const querySchema = new mongoose.Schema(
  {
  userName: {
    type: String,
    required: true
  },
   userEmail: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
},
{
  timestamps: true,
}
);

module.exports = mongoose.model('Query', querySchema);