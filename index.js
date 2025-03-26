// Write your solution in this file!
const employee = {
    "name": "Alex",
    "streetAddress": "Cardiff",
};

// Non-destructively update an employee with a new key-value pair
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = { ...employee, [key]: value }; // Spread operator to clone the object
    return newEmployee;
}

// Example: Update employee's name
const updatedEmployee1 = updateEmployeeWithKeyAndValue(employee, "name", "Sam");
console.log(updatedEmployee1);

// Example: Update employee's street address
const updatedEmployee2 = updateEmployeeWithKeyAndValue(employee, "streetAddress", "11 Broadway");
console.log(updatedEmployee2);

// Destructively update an employee with a new key-value pair
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; // Modify the original object
    return employee;
}

// Example: Update employee's street address destructively
const updatedEmployee3 = destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Broadway");
console.log(updatedEmployee3);

// Non-destructively delete a property from the employee
function deleteFromEmployeeByKey(employee, key) {
    const { [key]: _, ...updatedEmployee } = employee; // Use object destructuring to exclude the key
    return updatedEmployee;
}

// Destructively delete a property from the employee
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; // Remove the property directly from the original object
    return employee;
}

