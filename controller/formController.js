
exports.formHandler = (req,res) =>{
    console.log("** formHandler ***");
    const {  firstName, lastname, phoneNo, email, password } = req.body || {};

}