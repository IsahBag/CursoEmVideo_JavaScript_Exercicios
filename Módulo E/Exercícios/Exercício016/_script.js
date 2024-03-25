function contar(){
    let inicio = document.getElementById('txtinicio');
    let fim = document.getElementById('txtfim');
    let passo = document.getElementById('txtpasso');
    let res = document.getElementById('res');
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML='Impossível contar!';
        //window.alert('[ERRO] Verifique os dados e tente novamente');
    }else{
        res.innerHTML= 'Contando:<br>';
        let i= Number(inicio.value);
        let f= Number(fim.value);
        let p= Number(passo.value);
        if(p<=0){
            res.innerHTML= "Passo deve ser maior que 0!";
        }else if(i<f){
            //contagem progressiva
            for(let c=i; c<=f; c+=p){
                res.innerHTML += `${c} \u{1F449} `;
            }
            res.innerHTML += `\u{1F3C1}`;  //código emoji: UNICODE
        }else{
            //contagem regressiva
            for(let c=i; c>=f; c-=p){
                res.innerHTML += `${c} \u{1F449} `;
            }
            res.innerHTML += `\u{1F3C1}`;      
        }
    }    
}