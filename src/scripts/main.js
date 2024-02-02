AOS.init();


const dataEvento = new Date('Mar 25, 2024 19:00:00');
const timeStampEvento = dataEvento.getTime();

const contaHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaEvento = timeStampEvento - timeStampAtual;

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;
    const segundosEmMs = 1000;

    const diasAteEvento = Math.floor(distanciaEvento / diasEmMs);
    const horasAteEvento = Math.floor((distanciaEvento % diasEmMs) / horasEmMs);
    const minutosAteEvento = Math.floor(distanciaEvento % horasEmMs / minutosEmMs);
    const segundosAteEvento = Math.floor((distanciaEvento % minutosEmMs) / segundosEmMs); 

    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`;

    if(distanciaEvento < 0){
        clearInterval(contaHoras);
        document.getElementById('contador').innerHTML = `Evento expirado`;
    }
}, 1000)