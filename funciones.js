//Declarativas

function miFuncion(){
    return 3;
}

//Expresión o anónimas

var miFuncion = function(a,b){
    return a + b;
}

miFuncion();

function saludarEstudiante(estudiante){
    console.log("Hola ${estudiante}")
}
saludarEstudiante();

function sumar(a, b){
    var resultado = a + b;
    return resultado;
}

sumar(5, 5);
