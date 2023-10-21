import mongoose from 'mongoose';

const withdrawalSchema = new mongoose.Schema({
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
    cancelReason: {
        type: String,
    },

});



const withdrawalModel = mongoose.models.withdrawalModel || mongoose.model('withdrawalModel', withdrawalSchema);

export default withdrawalModel