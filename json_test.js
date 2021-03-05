const student = {
    name: 'Kyle',
    age: 21,
    isActive: true
}

//converting object to string
const studentString = JSON.stringify(student)

//shows object is now string
console.log(typeof studentString);

//converting string to object
const toJSONStudent = JSON.parse(studentString);

//shows string is now a object
console.log(typeof toJSONStudent);

//displaying object properties
console.log(toJSONStudent.name);