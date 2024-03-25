let num = document.getElementById('txtn');
let lista = document.getElementById('addtab');
let res = document.querySelector('div#res');
let vet = [];

function numValid(x){   //Verificar se o número está no intervalo
    if (Number(x)<1 || Number(x)>100){
        return false;
    } else{
        return true;
    }    
}

function inList(x, v){  //Verificar se está na lista
    for(let i=0; i<=v.length; i++){
        if(v[i] == x){
            return true;
            break;
        } 
    } 
    /*
    ALTERNATIVA:
    if(v.indexOf(Number(x)) != -1){    
        return true;
    } else {
        return false;
    } */       
}  

function adicionar(){    
    if(numValid(num.value) && !inList(num.value, vet)){
        vet.push(Number(num.value));    
        let item = document.createElement('option');            
        item.text = `Valor ${num.value} adicionado`;
        addtab.appendChild(item);
        res.innerHTML ='';
    }else{
        window.alert("Número inválido ou repetido");
    }    
        num.value = '';
        num.focus();
}   

function finalizar(){
    if(vet.length == 0){
        window.alert("Adicione um valor para começar!");
    } else{
        let maior = vet[0];
        let menor = vet[0];
        let soma = 0;
        for(let i in vet){
            soma += vet[i];
            if(vet[i] > maior){
                maior = vet[i];
            }
            if(vet[i] < menor){
                menor = vet[i];
            }
        }
        res.innerHTML += `<p>Ao todo, temos ${vet.length} números cadastrados.</p>`;
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
        res.innerHTML += `<p>A média dos valores digitados é ${soma/vet.length}.</p>`;
    }  
}  