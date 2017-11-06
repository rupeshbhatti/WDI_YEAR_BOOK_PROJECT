const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
  name: String,
  image: String
});

module.exports = mongoose.model('Student', studentSchema);
