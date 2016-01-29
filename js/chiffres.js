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
    var contar2= 0;
    var ejercicios = [];
function azar(){
        var numero = Math.round(Math.random()*((ejercicios.length)-1));
        var id = ejercicios[numero];
        var insertar= document.getElementById("cantidad");
        var invisible = document.getElementById(antes);
        var visible = document.getElementById(id);
        var fin = document.getElementById("fin");
            
            contar ++;
            insertar.innerHTML=contar;
            console.log(id, numero,diferente,((ejercicios.length)-1));
            
            if (contar <= 10){
                for (var i = 0; i <= 2; i++) {
                    switch(i){
                        case 1:
                            invisible.className="caja invisible";
                        break;
                        case 2:
                            visible.className="caja";
                            antes = id;
                        break;
                    }
                }
            }else{
                invisible.className="caja invisible";
                fin.className="caja";
            }
        }