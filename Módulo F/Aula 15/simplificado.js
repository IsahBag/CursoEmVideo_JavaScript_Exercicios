let vet = [5, 7, 3, 9, 6];
vet.sort();
console.log(vet);

for(let pos in vet){
    console.log(`A posição ${pos} tem o valor ${vet[pos]}`);
}

let pos = vet.indexOf(7);
console.log(`O número 7 está na posição ${pos}`);