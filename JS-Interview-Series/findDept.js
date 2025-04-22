/* Heap Memory is used to store objects in JavaScript.
 The heap memory is a region of a computer's memory that is used for dynamic memory allocation.
 It is a large pool of memory that is used to store objects, arrays, and other complex data types.
 The heap memory is managed by the JavaScript engine, which allocates and deallocates memory as needed.
 The heap memory is different from the stack memory, which is used to store primitive data types such as numbers, strings, and booleans.
 The stack memory is a smaller, faster memory that is used for temporary storage of data.
 The heap memory is larger and slower than the stack memory, but it is used for more complex data types that require more memory.
*/

const employee = {
  id: 1001,
  name: "John Doe",
  age: 30,
  salary: 50000,
  department: "HR",
  deptId: 3001,
};

const department = [
  { id: 3001, name: "Human Resources", location: "New York" },
  { id: 3002, name: "Finance", location: "London" },
  { id: 3003, name: "Engineering", location: "San Francisco" },
  { id: 3004, name: "Marketing", location: "Tokyo" },
];

const findDepartmentOfEmployee = (employee) => {
  return department.find((dept) => {
    return dept.id === employee.deptId;
  });
};

const anotherDepartment = department;
let ans = findDepartmentOfEmployee(employee);
console.log(ans);
console.log(anotherDepartment);
anotherDepartment[0].location = "Tokyo";
console.log(anotherDepartment[0].location); // Tokyo
console.log(department[0].location); // Tokyo -> reference to the same object thus it is changed in both places

// Circular Reference:
// Circular reference occurs when two or more objects reference each other, creating a loop in the object graph. This can lead to memory leaks and other issues if not handled properly. In JavaScript, circular references are not automatically cleaned up by the garbage collector, so it's important to be careful when creating circular references.

function circular() {
  const emp = {};
  const dept = {};
  emp.link = dept;
  dept.link = emp;
}

circular();


// Mark and Sweep Algorithm:
// The Mark and Sweep algorithm is a garbage collection algorithm used in programming languages like JavaScript to manage memory. It works by marking all reachable objects in memory and then sweeping through the heap to collect and free up memory occupied by unmarked objects. This helps prevent memory leaks and optimize memory usage in applications.
// The algorithm consists of two main phases: the mark phase, where reachable objects are marked, and the sweep phase, where unmarked objects are collected and their memory is freed. This process is typically automatic and managed by the JavaScript engine, allowing developers to focus on writing code without worrying about manual memory management.