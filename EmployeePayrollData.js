class EmployeePayrollData{
    //properties
    //id;
    //name;
    //salary;
    gender;
    startDate;

    //constructor
    constructor(...params){
        this.id=params[0];
        this.name=params[1];
        this.salary=params[2];
        this.gender=params[3];
        this.startDate=params[4];
    }

    //getter and setter methods
    get name(){
        return this._name;
    }
    set name(name){
        this._name = name;
    }
    get id(){
        return this._id;
    }
    set id(id){
        this._id = id;
    }
    get salary(){
        return this._salary;
    }
    set salary(salary){
        this._salary = salary;
    }

    //method
    toString(){
        const options = { year: 'numeric', month: 'long', day:'numeric'};
        const empDate = this.startDate === undefined ? "undefined" :
        this.startDate.toLocaleDateString("en-US", options);

        return "id=" +this.id + " ,name=" + this.name + ",salary=" + this.salary + " gender=" +this.gender + ",start Date=" +empDate;
    }

}

let employeePayrollData = new EmployeePayrollData(1,"Shephali",45699);
console.log(employeePayrollData.toString());
employeePayrollData.id = 2;
employeePayrollData.name = "Shreya";
employeePayrollData.salary = 30000;
console.log(employeePayrollData.toString());
let newEmployeePayrollData = new EmployeePayrollData(1,"Shephali",45699,"F",new Date());
console.log(newEmployeePayrollData.toString());