import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    id: {
        type: String,
    },
    name: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
    },
    usertype: {
        type: String,
    },
    status: {
        type: Boolean,
    },
    on: {
        type: String,
    },
    image: {
        type: String,
    },
    usertype: {
        type: String,
    },
    username: {
        type: String,
    },
    tokens: [{
        token: { type: String }
    }]
});



const userModel = mongoose.models.usermodel || mongoose.model('usermodel', UserSchema);

export default userModel