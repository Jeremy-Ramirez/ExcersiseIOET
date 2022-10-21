const { searchCoincidence } = require('./searchCoincidence')

//Employee object and array

let Employee = {
    name: '',
    schedule: ''
}

let employees = [];

const employeeInfo = (data) => {

    const dataString = data.toString();
    const line = dataString.split('\r'); //Array with the information of the file

    line.forEach((dataEmployee) => {

        const information = dataEmployee.split('=');
        let { name, schedule } = Employee;
        name = information[0];
        schedule = information[1];

        //Update Employee object
        Employee = {
            name,
            schedule
        }

        //Update employees array
        employees = [...employees, Employee];

    })

    searchCoincidence(employees);

}


module.exports = {
    employeeInfo
}