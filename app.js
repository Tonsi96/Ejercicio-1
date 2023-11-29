const { mostrarListStudents } = require('./lista-estudiantes')
const readlineSync = require('readline-sync');
const colors = require('colors');
console.clear();


const registerStudent = () => {
    console.log('*Iniciando Registro de Estudiante*\n'.yellow);

    const amountStudent = readlineSync.question('Ingresar la cantidad de estudiantes a registrar: ')
    const students = [];


    for( let i = 0; i < amountStudent; i++){
        const nameStudent = readlineSync.question('Ingrese el nombre del estudiante: ' );

        const age = readlineSync.question('Ingrese la edad de ' + nameStudent +': ');

        const student = {
            nombre: nameStudent,
            edad: age
        };

        students.push(student);
    };

    mostrarListStudents(students);

};



// Ejecutando la funcion:
// const studentRegistered = registerStudent();

registerStudent()