export function compararNum(max) {
    const randomNumber1 = Math.floor(Math.random() * (max - 0 + 1)) + 0;
    const randomNumber2 = Math.floor(Math.random() * (max - 0 + 1)) + 0;
    var randomNumberJuego = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
    var texto = randomNumberJuego === 1 ? "¿Cuál numero es mayor?" : "¿Cuál numero es menor?"
    var menorOmayor = randomNumberJuego === 1 ? "mayor" : "menor";
    return [randomNumber1, randomNumber2, texto, menorOmayor];
}
