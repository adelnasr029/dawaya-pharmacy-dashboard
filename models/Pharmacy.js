const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Address Subschema
const AddressSchema = new Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip_code: { type: String, required: true }
});



// Medication Subschema (embedded)
const MedicationSubSchema = new Schema({
  medication_id: { type: Schema.Types.ObjectId, ref: 'Medication', required: true },
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true }
});

// Review Subschema (embedded)
const ReviewSubSchema = new Schema({
  review_id: { type: Schema.Types.ObjectId, ref: 'Review', required: true },
  rating: { type: Number, required: true, min: 0, max: 5 },
  comment: { type: String, required: true },
  review_date: { type: Date, default: Date.now },
  reviewer_name: { type: String, required: true }
});

// Pharmacy Schema
const PharmacySchema = new Schema({
  name: { type: String, required: true },
  address: { type: AddressSchema, required: true },
  medications: [MedicationSubSchema],
  reviews: [ReviewSubSchema]
});


//MongoDB Collection named here - will give lowercase plural of the name
module.exports = mongoose.model("Pharmacy", PharmacySchema);

