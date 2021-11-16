var piedra = "Piedra";
var papel = "Papel";
var tijera = "Tijera";

function juego(jugador, maquina){
if(jugador == piedra && maquina == papel){
    console.log("Gana la máquina");
}else if(jugador == papel && maquina == piedra){
    console.log("Gana el jugador");
}else if(jugador == piedra && maquina == piedra){
    console.log("Empate");
}else if(jugador == papel && maquina == tijera){
    console.log("Gana la máquina");
}else if(jugador == tijera && maquina == papel){
    console.log("Gana el jugador");
}else if(jugador == tijera && maquina == tijera){
    console.log("Empate");
}else if(jugador == tijera && maquina == piedra){
    console.log("Gana la máquina");
}else if(jugador == papel && maquina == papel){
    console.log("Empate");
}
}


