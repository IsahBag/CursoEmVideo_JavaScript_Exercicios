function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('image');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;
    if (hora>=0 && hora<12){
        //BOM DIA
        img.src = 'manha.png';
        document.body.style.background = '#c9a06c';
    } else if (hora>=12 && hora<=18) {
        //BOA TARDE
        img.src = 'tarde.png';
        documento.body.style.background = '#9fbbc4';
    } else {
        //BOA NOITE
        img.src = 'noite.png';
        document.body.style.background = '#22234d';
    }
}
