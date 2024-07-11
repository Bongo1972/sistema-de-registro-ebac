console.log("Sistema EBAC de Registro de Alumnos");
console.log("");

var registro = [
    {nombre: "Salvador Mora", Edad: "30", ZonaResidencia: "CDMEX", nombrePrograma: "Desarrollador Front End de Cero a Pro", email: "salvadormora@ebac.mx", SeguroSocial: true},
    {nombre: "Maria Hubert", Edad: "34", ZonaResidencia: "Edo Mex", nombrePrograma: "Desarrollo Back End con Python", email: "maria@ebac.mx", SeguroSocial: true},
    {nombre: "Leticia Tellez", Edad: "28", ZonaResidencia: "GDL", nombrePrograma: "Data Science Avanzado", email: "leticia@ebac.mx", SeguroSocial: false},
    {nombre: "Pedro Ruiz", Edad: "32", ZonaResidencia: "CDMEX", nombrePrograma: "Marketing Digital", email: "pedro@ebac.mx", SeguroSocial: true},
    {nombre: "Christian Betancour", Edad: "29", ZonaResidencia: "MTY", nombrePrograma: "UX/UI Design", email: "christianb@ebac.mx", SeguroSocial: false},
];

function agregarAlumno(){

    var nombre = prompt("Ingresa el nombre del nuevo alumno");
    var ZonaResidencia = prompt("Ingresa la zona de residencia del alumno");
    var Edad = prompt("Ingresa la edad del Alumno");
    var nombrePrograma = prompt("Ingresa el programa a Estudiar del Alumno");
    var email = prompt("Ingresa el correo electronico del alumno")
    var SeguroSocial= prompt ("¿El alumno tiene seguro social? s/n")
    
    var SSocial_Procesado;
    if (SeguroSocial === "s") {
        alert("El campo de seguro social es verdadero (true).");
        SSocial_Procesado = true;
    } else if (SeguroSocial === "n") {
        alert("El campo de seguro social es falso (false).");
        SSocial_Procesado = false;
    } else {
        alert("Respuesta no valida. Por favor, ingrese 's' o 'n'.");
        SSocial_Procesado = false;
    }
    var nuevoAlumno = {nombre: nombre, Edad: Edad, ZonaResidencia: ZonaResidencia, nombrePrograma: nombrePrograma, email: email, SeguroSocial: SSocial_Procesado};

    registro.push(nuevoAlumno);
}

function consultarRegistros(){
    for(var i = 0; i < registro.length; i ++){
        console.log("Nombre: " + registro[i].nombre);
        console.log("Edad: " + registro[i].Edad);
        console.log("Zona de Residencia: " + registro[i].ZonaResidencia);
        console.log("Nombre del Programa: " + registro[i].nombrePrograma);
        console.log("Email: " + registro[i].email);
        console.log("SeguroSocial: " + registro[i].SeguroSocial);
        console.log("");
    };
}


do{

var opcion = prompt("Seleccione una Opción: \n1. Agregar registro \n2. Consultar registro de alumnos \n3. Incluir Información a Alumno \n4. Consultar Alumno \n5. Eliminar Alumno \n6. Salir");

if (opcion === "1"){
    agregarAlumno();
} else if(opcion === "2"){
    consultarRegistros();
}else if (opcion === "3"){
    alert("Incluir Información en Alumno registrado");
}else if (opcion === "4"){
    alert("Consultar Alumno registrado");
}else if (opcion === "5"){
    alert("Eliminar registro de alumno");
} else if (opcion === "6"){
    alert("Salir del sistema");
    break; // Salir del bucle do-while
}else{
    alert("Opción inválida, elige otra");
}
    var continuar = prompt("¿Deseas hacer otra acción? (S/N)");

} while(continuar === "S"); 