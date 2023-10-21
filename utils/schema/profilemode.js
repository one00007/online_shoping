import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
    name: String,
    fathername: String,
    dob: String,
    gender: String,
    address: String,
    city: String,
    state: String,
    mobile: String,
    email: String,
    bankName: String,
    branchName: String,
    accountNo: String,
    ifscCode: String,
    nominee: String,
    relation: String,
    aadhaar: String,
    pan: String,
    jobType: String,
    companyName: String,
    post: String,
    salary: String,
});



const profileModel = mongoose.models.profileModel || mongoose.model('profileModel', profileSchema);

export default profileModel