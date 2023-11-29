const mostrarListStudents = (students) => {
    console.log('Lista de estudiantes registrados: ');
    students.forEach((student) => {
        console.log('Nombre: ' + student.nombre + ' Edad: ' + student.edad);
    });

    };


module.exports = {mostrarListStudents};