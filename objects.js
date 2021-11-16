var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detallesDelAuto: function() {   // Metodo de un objeto (una función dentro de un objeto)
        return `Auto ${this.modelo} ${this.annio}`;
    }
};

//Forma de acceder al object
miAuto.annio 
miAuto.modelo 
//Se accede así por ser función
miAuto.detallesDelAuto(); 

// Función constructora 

function auto(marca, modelo, annio) {  // Creas una función con los parametros que va a recibir, 
    this.marca = marca;   // Utilizamos el "this" para asignar valores a las propiedades del objeto 
    this.modelo = modelo;
    this.annio = annio;
}

var newAuto = new auto("Tesla", "Model 3", 2020);
