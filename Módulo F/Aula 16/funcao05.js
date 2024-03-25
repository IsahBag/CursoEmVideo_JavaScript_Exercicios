function fatorial(n){
    if (n == 1){
        return 1;
    } else{
        return n*fatorial(n-1);   //recursão
    }
}

console.log(fatorial(6));