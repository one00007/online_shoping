import mongoose from 'mongoose';

const offerSchema = new mongoose.Schema({
    plane: String,
    amount: Number,
    benefit: Array,
    time: String,
    user: String,

});



const offerModel = mongoose.models.offerModel || mongoose.model('offerModel', offerSchema);

export default offerModel