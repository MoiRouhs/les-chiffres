function digito(nombre, fonetique, audio){
    var numero = document.getElementById("h1js");
    var fonetica = document.getElementById("h3js");
    var au = document.getElementById(audio);
        numero.innerHTML=nombre;
        fonetica.innerHTML= fonetique;
        au.play();
}