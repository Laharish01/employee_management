let mongoose = require('mongoose');

const server = "localhost:27017";
const database = 'employees';
const user = 'admin';
const password = 'pass';

var url = 'mongodb://localhost:27017/employees'

mongoose.connect(url , {useNewUrlParser: true, useUnifiedTopology: true}).catch(msg => {console.log(msg)});

let employeeSchema = new mongoose.Schema({
    name: String,
    designation: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    mobileNumber: {
        type: Number,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
    address: {
        street: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        }
    },
});

module.exports = mongoose.model('employees', employeeSchema);