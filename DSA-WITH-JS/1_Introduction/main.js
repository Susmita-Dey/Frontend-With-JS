/* Problem:
Create an array with 5 students names, after that, create a function which takes 2 parameters (allStudents & studentName). Iterate over the array and check if the studentName exists in the array. If it exists, return true, otherwise return false.
*/

const students = ["John", "Jane", "Jim", "Jack", "Jill"];

const findStudent = (allStudents, studentName) => {
    for (let i = 0; i < allStudents.length; i++) {
        if (allStudents[i] === studentName) {
            return true;
        }
    }
    return false;
}

console.log(findStudent(students, "Jim")); // true
console.log(findStudent(students, "Bob")); // false