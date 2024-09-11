Nuevo: Combinaciones de teclas … Se actualizaron las combinaciones de teclas de Drive para que puedas navegar con las primeras letras.
script.js
var ne=8
function adivinar(){
    var nd=document.getElementById("barra").value;
    if(ne==nd){
        alert("GANASTE")
    }else if(ne>nd){
        alert("EL NÚMERO ES MAYOR");
    }else{
        alert("EL NÚMERO ES MENOR");
    }
}