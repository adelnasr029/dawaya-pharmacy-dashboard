const mongoose = require('mongoose')

const MedicationSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
      },
      count: {
        type: Number,
        require: true
      },
      price: {
        type: Number, 
        required: true
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
})

//MongoDB Collection named here - will give lowercase plural of the name
module.exports = mongoose.model("Medication", MedicationSchema);
