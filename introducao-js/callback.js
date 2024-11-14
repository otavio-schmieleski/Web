const inicio = () => {
    console.log('Programa iniciado!');
};

const fim = () => {
    console.log('Programa finalizado!');
}

const processa = (func1, func2) => {
    func1();
    func2();
}

processa(inicio, fim);
processa(() =>{
    console.log('função 1');
}, () => {
    console.log('função 2');
})