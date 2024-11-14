const exibeMensagemVar = () =>{
    var mensagem = 'Brasil!';

    if (true) {
        var msgDentroIF = 'Argentina';
        console.log(msgDentroIF);
    }

    console.log(msgDentroIF);
    console.log(mensagem);
}

exibeMensagemLet();

const exibeMensagemLet = () => {
    let mensagem = 'Brasil!';

    if (true) {
        let msgDentroIF = 'Argentina';
        console.log(msgDentroIF);
    }

    console.log('1', msgDentroIF);
    console.log('2', mensagem);
}

exibeMensagemLet();