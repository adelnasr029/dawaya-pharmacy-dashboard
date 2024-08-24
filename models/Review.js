const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  pharmacy_id: { type: Schema.Types.ObjectId, ref: 'Pharmacy', required: true },
  rating: { type: Number, required: true, min: 0, max: 5 },
  comment: { type: String, required: true },
  review_date: { type: Date, default: Date.now },
  reviewer_name: { type: String, required: true }
});

module.exports = mongoose.model('Review', ReviewSchema);
