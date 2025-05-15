import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true
    },

    contactNumber:{
        type: String,
        required: true
    },

    bookingType:{
        type: String,
        required: true
    }
});