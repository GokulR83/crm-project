const mongoose = require("mongoose");


const contactSchema = new mongoose.Schema({
    firstName: {
        type:String,
        required:true,
        trim:true,
    },
    lastName: {
        type: String,
        trim:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
        lowercase:true,
        trim:true,
    },
    phoneNumber:{
        type:Number,
        unique:true,
        required:true,
        minLength:10,
        maxLength:10,
    },
    company:{
        type:String,
        minLength:4,
        maxLength:35,
    },
    jobTitle:{
        type:String,
        minLength:4,
        maxLength:35
    }

},{ timestamps: true });

const Contact = mongoose.model("Contact",contactSchema);

module.exports = Contact;