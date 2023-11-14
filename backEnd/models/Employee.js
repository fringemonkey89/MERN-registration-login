const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    passowrd: String
})

const EmployeeModel = mongoose.model("employees", EmployeeSchema)

module.exports = EmployeeModel