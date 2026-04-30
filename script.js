const celdas = document.querySelectorAll('.celda');
const estado = document.getElementById('estado');

let turno = 'X';
let juegoActivo = true;

const combinacionesGanadoras = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

celdas.forEach((celda, index) => {
    celda.addEventListener('click', () => jugar(index));
});

function jugar(index) {
    if (!juegoActivo || celdas[index].textContent !== '') return;

    celdas[index].textContent = turno;

    if (verificarGanador()) {
        estado.textContent = `Ganó ${turno}`;
        juegoActivo = false;
        return;
    }

    if (empate()) {
        estado.textContent = "Empate";
        juegoActivo = false;
        return;
    }

    turno = turno === 'X' ? 'O' : 'X';
}

function verificarGanador() {
    return combinacionesGanadoras.some(combinacion => {
        return combinacion.every(i => celdas[i].textContent === turno);
    });
}

function empate() {
    return [...celdas].every(celda => celda.textContent !== '');
}

function reiniciarJuego() {
    celdas.forEach(celda => celda.textContent = '');
    turno = 'X';
    juegoActivo = true;
    estado.textContent = '';
}
