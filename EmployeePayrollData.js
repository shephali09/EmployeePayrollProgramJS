class EmployeePayrollData {
    //properties
    //id;
    //name;
    //salary;
    //gender;
    //startDate;

    //constructor

     //constructor(id,name,salary) {
       //  this.id = id;
       //  this.name = name;
       //    this.salary = salary;

     //}

    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    //getter and setter methods
    getName() {
        return this.name;
    }
    setName(name) {
        let nameRegex = RegExp('[A-Z]{1}[a-z]{3,}$');
        if (nameRegex.test(name))
            this.name = name;
        else throw "Name is Incorrect";

    }
    getId() {
        return this.id
    };
    setId(id) {
        this.id = id;
    }
    getSalary() {
        return this.salary
    };
    setSalary(salary) {
        if (salary > 0)
            this.salary = salary;
        else throw "Salary is Invalid";
    }
    getGender() {
        return this.gender
    };
    setGender(gender) {
        if (gender == "M" || gender == "F")
            this.gender = gender;
        else throw "Gender is Incorrect";
    }
    getStartDate() {
        return this.startDate
    };
    setStartDate(startDate) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = startDate === undefined ? "undefined" :
            startDate.toLocaleDateString("en-US", options);

        if ((new Date(empDate) <= new Date()))
            this.startDate = empDate;
        else throw "Invalid Date";
    }

    //method
    toString() {
        return "id=" + this.id + " ,name=" + this.name + " ,salary=" + this.salary + " ,gender=" + this.gender + " ,start Date=" + this.startDate;
    }

}

let employeePayrollData = new EmployeePayrollData(1, "Shephali", 45699);
console.log(employeePayrollData.toString());
employeePayrollData.id = 2;
try {
    employeePayrollData.name = "Shephali";
    console.log(employeePayrollData.toString());
} catch (e) {
    console.error("the name should starts with capital and has at least 3 characters");

}

employeePayrollData.salary = 30000;
console.log(employeePayrollData.toString());
let newEmployeePayrollData = new EmployeePayrollData(2, "Shephali", 45699, "F", new Date());
console.log(newEmployeePayrollData.toString());

let employeeOne = new EmployeePayrollData();
employeeOne.setId(3);
employeeOne.setName("Harshad");
employeeOne.setSalary(50000);
employeeOne.setGender('M');
employeeOne.setStartDate(new Date('5/16/2023'));
console.log(employeeOne.toString());

try {
    employeeOne.setGender("Male");
    console.log(employeeOne.toString());
} catch (e) {
    console.error(e);
}
try {
    employeeOne.setStartDate(new Date('16/05/2023'));
    console.log(employeeOne.toString());
} catch (e) {
    console.error(e);
}