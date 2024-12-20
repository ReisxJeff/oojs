// classe de abstração
function Computador(processador, armazenamento, memoriaRam){
    this.processador = processador;
    this.armazenamento = armazenamento;
    this.memoriaRam = memoriaRam;
}

// calsse herdeira 1
function Pcgamer(processador, armazenamento, memoriaRam, placaDeVideo, fonte){
    this.placaDeVideo = placaDeVideo;
    this.fonte = fonte;

    Computador.call(this, processador, armazenamento, memoriaRam)
}

// calsse herdeira 2
function Nootbook(processador, armazenamento, memoriaRam, placaDeVideo, modelo){
    this.placaDeVideo = placaDeVideo;
    this.modelo = modelo;

    Computador.call(this, processador, armazenamento, memoriaRam)
}

// Modelo de classe
const pcGamer1 = new Pcgamer ("AMD Razen 7-5700g", "SSD 512GB", "16GB DDR4", "Radeon Vega 8", "500W" );

const pcGamer2 = new Pcgamer ("Intel Core I5 12400f", "SSD 960GB", " 16GB RAM", "RTX 4060", "650W" );

const acerNitro = new Nootbook ("Intel Core i7-13620H", "512GB SSD", "16GB RAM", "RTX 3050", "ANV15-51-73E9");

const lenovoLoq = new Nootbook ("Core I5 12450H", "512GB SSD", "16GB RAM", "RTX 2050", "Loq 15irh8");

// chamada console
console.log(pcGamer1);
console.log(pcGamer2);
console.log(acerNitro);
console.log(lenovoLoq);