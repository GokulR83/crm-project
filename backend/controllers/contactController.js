const Contact = require("../models/contact");
const { validateContact } = require("../helpers/validations");


//? add contact
const addContactController = async(req,res,next) =>{
    try {
        validateContact(req.body);
        const { firstName, lastName, email, phoneNumber, company, jobTitle } = req.body;
        
        const contact = await Contact.findOne({ $or:[{ phoneNumber }, { email }]});
        if(contact){
            throw new Error("Phone number or email already exists");
        }
        const newContact = new Contact({
            firstName,
            lastName,
            email,
            phoneNumber,
            company,
            jobTitle
        });

        await newContact.save();
        res.status(201).json({ message: " contact created successfully " , data: newContact });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//? Edit Contact
const editContactController = async (req, res, next) => {
    try {
        const { firstName, lastName, email, phoneNumber, company, jobTitle } = req.body;
        const { contactId } = req.params;
        validateContact(req.body);
        const contact = await Contact.findById(contactId);
        if (!contact) {
            throw new Error("Contact not found!");
        }
        const isDifferentContact = await Contact.findOne({ 
            $or: [{ email }, { phoneNumber }] 
        });

        if (isDifferentContact && contact._id.toString() !== isDifferentContact._id.toString()) {
            throw new Error("Email or phone number already exists.");
        }
        const updatedContact = await Contact.findByIdAndUpdate(contactId, {
            firstName,
            lastName,
            email,
            phoneNumber,
            company,
            jobTitle
        }, { new: true });

        res.status(202).json({
            message: "Contact updated successfully!",
            data: updatedContact
        });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


const getAllContactController = async(req,res,next) =>{
    try {
        const page = req.query.page || 1;
        let limit = req.query.limit || 10;
        limit = limit > 20 ? 20 : limit;
        const skip =  (page - 1) * limit;

        const contacts = await Contact.find({}).skip(skip).limit(limit);
        if(contacts.length === 0){
            throw new Error("There is no contact, create a new one");
        }
        res.status(200).json({ data: contacts });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const getOneContactController = async(req,res,next) =>{
    try {
        const { contactId } = req.params;

        const contact = await Contact.findById(contactId);
        if(!contact){
            throw new Error("contact not found");
        }
        res.status(200).json({ data: contact });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const deleteContactController = async(req,res,next) =>{
    try {
        const {contactId} = req.params;
        const contact =await Contact.findByIdAndDelete(contactId);
        if(!contact){
            throw new Error("contact not found!!");
        }
        res.status(200).json({ message: "contact deleted successfully!" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    addContactController,
    editContactController,
    getAllContactController,
    deleteContactController,
    getOneContactController
}