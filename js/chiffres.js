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
function pregres(num){
var opciones = Object.keys(ejercicios); 
var cantidad = (num <= opciones.length & num > 0) ? num : opciones.length ; 
var numero1 = Math.round(Math.random()*((cantidad)-1));
var gruporespuestas = opciones[numero1];
var opcionespregunta = ejercicios[gruporespuestas];
var eleccion = Object.keys(opcionespregunta);
var numero2 = Math.round(Math.random()*((eleccion.length)-1));
var variedadpregunta = eleccion[numero2];
var seleccionpregunta = ejercicios[gruporespuestas];
var pregunta1 = seleccionpregunta[variedadpregunta]; 
var respuesta = {};
var pregunta= {};
var ejercicio = {pregunta, respuesta};

for (var exep in exepciones){
    var exepcion = exepciones[exep];
    if (exepcion != variedadpregunta){
        exepciones.push(variedadpregunta);
    }
}
for (var item in opcionespregunta){
    for (ite in exepciones){
         var item2 = exepciones[ite];
         if (item2 != item){
            delete opcionespregunta[item2];
        }
    }
}
var res = Object.keys(opcionespregunta);
var numero3 = Math.round(Math.random()*((res.length)-1));
var respuesta1 = res[numero3];
var respuesta2 = opcionespregunta[respuesta1];
respuesta[respuesta1]= respuesta2;
pregunta[variedadpregunta]= pregunta1;
return ejercicio
};