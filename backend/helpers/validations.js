
const validateContact = (contact) =>{
    const { firstName, lastName, email, phoneNumber, company, jobTitle } = contact;
    if(firstName.length > 15 || firstName.length <= 2){
        throw new Error("First Name should contain (4-15) characters");
    }
    if(!firstName.match(/^[a-zA-Z]+$/)){
        throw new Error("First name should start with alphabets");
    }
    if(lastName.length > 15){
        throw new Error("last name should not contain more that 15 characters");
    }

    if(!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        throw new Error("Not a valid email address!!");
    }
    if(!phoneNumber.match(/^[6-9]\d{9}$/)){
        throw new Error("not a valid phone number");
    }
    if(company.length > 25){
        throw new Error("company name should not exceeded 25 character");
    }
    if(jobTitle.length > 25){
        throw new Error("company name should not exceeded 25 character");
    }
}


module.exports = {
    validateContact,
}