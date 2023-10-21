import mongoose from 'mongoose';

const fundSchema = new mongoose.Schema({
    email: {
        type: String,
    },
    name: {
        type: String,
    },
    amount: {
        type: Number,
    },
    date: {
        type: String,
    },
    time: {
        type: String,
    },
    status: {
        type: String,
    },

});



const fundModel = mongoose.models.fundModel || mongoose.model('fundModel', fundSchema);

export default fundModel