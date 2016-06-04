//  Esta función es para mostrar la escritura del umero su fonetica y escuchar su audio
function digito(nombre, fonetique, clase, audio){
    var numero = document.getElementById("h1js");
    var fonetica = document.getElementById("h3js");
    var au = document.getElementById(audio);
        numero.innerHTML=nombre;
        numero.className=clase;
        fonetica.innerHTML= fonetique;
        au.play();
}
// Esta función es para mostrar los ejercicios aleatoriamente 
var antes = null;
    var contar= 0;
    var contar= 0;
    var hechos=[];
    var numero= 0 ;
    var negativa = 0;
    var ejercicios=[1,2,3];
    var respuestas=[1,2,3];
    
    function comenzar(id,preg){
        numero = Math.round(Math.random()*((preg.length)-1));
    var input = document.getElementById("sub");
    var cuerpo = document.getElementById("e1");
    var borrar = document.getElementById(id);
    borrar.style.display = "none";
    input.style.display ="flex";
    cuerpo.innerHTML ='<div class="relativo"><div class="centrado"><h1>'+preg[numero]+'</h1></div></div>';
}
function quiz(pregun,respu,event) {
    
    var enter = event.keyCode;
    var input1 = document.getElementById("sub");
    var puntaje = document.getElementById("puntaje");
    var error = document.getElementById("errores");
    var bien = document.getElementById("bien");
    var mal = document.getElementById("mal");
    var aparecer = document.getElementById("tot");
    var estudio = document.getElementById("estudiar");
    var val = document.getElementById('getexto').value;
    var cuerpo=document.getElementById("e1");
    var valor = val.toLowerCase();
    var respuesta = respu[numero];
    if(enter == 13 | enter == undefined){
        if(valor == respuesta){
            contar++;
            if(contar <= 14){
//                 puntaje.innerHTML= contar;
                numero = Math.round(Math.random()*((pregun.length)-1));
                console.log(numero,respuesta,pregun.length);
                cuerpo.innerHTML ='<div id="pr" class="relativo"><div class="centrado"><h1>'+pregun[numero]+'</h1></div></div>';
                aparecer = true;
//                 bien.style.display ="inherit";
//                 setTimeout(function a(){bien.style.display ="none";}, 500);
                 
            }
            if(contar == 15){
                puntaje.innerHTML= contar;
                aparecer.style.display="inherit";
                input1.style.display ="none";
            }
        }else{
            negativa++;
            switch(negativa){
                case 1:
                    error.innerHTML +="X";
                    mal.style.display ="inherit";
                    setTimeout(function a(){mal.style.display ="none";}, 500);
                    break;
                case 2:
                    error.innerHTML +="X";
                    mal.style.display ="inherit";
                    setTimeout(function a(){mal.style.display ="none";}, 500);
                    break;
                case 3:
                    estudio.style.display="inherit";
                    input1.style.display ="none";
                    error.innerHTML +="X";
                    break;
            }
        }
    }
}