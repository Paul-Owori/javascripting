//PROCEDURAL PROGRAMMING
firstName = "Brian" //Property

lastName = "Matovu" //Property

age = "25"; //Property

salary = 1000000; //Property


//Method or function
fullName = () => {
    return (firstName + " " + lastName)
}

tax = () => {
    return 0.1 * salary;
}

grossSalary = () => {
    return 0.9 * salary;
}



//OBJECT ORIENTED PROGRAMMING:
//ENCAPSULATION
let employee1 = {
    firstName: "Brian",
    lastName: "Matovu",
    age: 25,
    salary: 1000000,
    fullName: function () {
        return (this.firstName + " " + this.lastName)
    },
    tax: function () {
        return 0.1 * this.salary;
    },
    grossSalary: function () {
        return 0.9 * this.salary;
    }

}

//INHERITANCE / TEMPLATING
//CONSTRUCTOR
function employee(firstName, lastName, age, salary) {
    this.firstName = firstName,
        this.lastName = lastName,
        this.age = age,
        this.salary = salary,
        this.fullName = function () {
            return (this.firstName + " " + this.lastName)
        },
        this.tax = function () {
            return 0.1 * salary;
        },
        this.grossSalary = function () {
            return 0.9 * salary;
        }

}

const Brian = new employee("Brian", "Matovu", 25, 1000000);