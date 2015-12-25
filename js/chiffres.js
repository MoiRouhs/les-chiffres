function digito(nombre, fonetique, clase, audio){
    var numero = document.getElementById("h1js");
    var fonetica = document.getElementById("h3js");
    var au = document.getElementById(audio);
        numero.innerHTML=nombre;
        numero.className=clase;
        fonetica.innerHTML= fonetique;
        au.play();
};