function inicio() {   
    const mensagem = 'Programa iniciado!';
    console.log(mensagem);
}

inicio();

function processa(){
    const mensagem = 'Processando...';
    return mensagem;
}

function run() {
    inicio();
    const resultado = processa();
    console.log(resultado);
}

run();