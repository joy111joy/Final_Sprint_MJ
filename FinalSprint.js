//This program uses employee information to create a password and email address for each new employee at JavaCo.
// Date: 12/12/2023
// Mitchel Joy

console.log("This is to test the script tag")

fetch("Records.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(employee => {
            console.log("Employee: ");
            console.log(employee.Name);
            console.log("New Password:")
            console.log(password(employee));
            console.log("New Email:")
            console.log(email(employee));
            console.log(" ");
            Employeeinfo = `<p>Employee: ${employee.Name} <br>New Password: ${password(employee)}<br> New Email: ${email(employee)}</p>`;
            document.body.innerHTML += Employeeinfo;
        });
    })
    .catch(error => {
        console.log("Error: ", error);
    }); 


function Age(employee) {
    CurDate = new Date()
    CurYear = CurDate.getFullYear();
    employeeAge = CurYear - employee.BirthYear;
    return employeeAge};


// Create an employee password using the following:
// Full last name
// Last 3 characters of postal code
// First 2 characters of first name
// Age of employee

function password(employee) {
    //split employee full name into first and last name
    let splitName = employee.Name.split(" ");
    let password =  `${splitName[1]}${employee.PostalCode.slice(4)}${employee.Name.slice(0,2)}${Age(employee)}`;
    return password;
};

// Create an email address for each employee using the following:
//first name.last name_Current year@JavaCo.com
function email(employee) {
    CurDate = new Date()
    CurYear = CurDate.getFullYear();
    let splitName = employee.Name.split(" ");
    let email = `${splitName[0]}.${splitName[1]}_${CurYear}@JavaCo.com`;
    return email;
};


