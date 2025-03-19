import mongoose from 'mongoose';

const ImageSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    data: {
        type: Buffer,
        required: true
    },
    contentType: {
        type: String,
        required: true
    }
});

export const UserDetails = mongoose.models.UserDetails || mongoose.model('UserDetails', ImageSchema);