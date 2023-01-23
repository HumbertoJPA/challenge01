const areaTexto = document.querySelector(".areatexto");
const areaEncriptado = document.querySelector(".areaencriptado");

const botonEncriptar = document.querySelector(".botonencriptar");
const botonDesencriptar = document.querySelector(".botondesencriptar");
const botonCopiar = document.querySelector(".botoncopiar");

const imgBuscando = document.getElementById("imgbuscando");
const msgNoHayTexto = document.getElementById("msgnohaytexto");

function soloLetras(e) {
    var key = e.keyCode || e.which,
      tecla = String.fromCharCode(key).toLowerCase(),
      letras = " abcdefghijklmnñopqrstuvwxyz",
      especiales = [8, 37, 39, 46],
      tecla_especial = false;

    for (var i in especiales) {
      if (key == especiales[i]) {
        tecla_especial = true;
        break;
      }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
      return false;
    }
  }

function encriptar(){


  var nombre = areaTexto.value;

  let data = []
  var count = nombre.length
  for(let i=0; i<count ;i++){
      if(nombre[i]=="e"){
          data.push('enter')
      }else if(nombre[i]=='i'){
          data.push('imes')
      }else if(nombre[i]=='a'){
          data.push('ai')
      }else if(nombre[i]=='o'){
          data.push('ober')
      }else if(nombre[i]=='u'){
          data.push('ufat')
      }else{
          data.push(nombre[i])
      }
  }

  let frase = data.join("")
  areaEncriptado.style.display = "block";
  botonCopiar.style.display = "block";

  imgBuscando.hidden = true;  
  msgNoHayTexto.hidden = true;  

  areaEncriptado.value = frase;
}

function desencriptar(){

    var nombre = areaTexto.value;
    let data = []
    var count = nombre.length
    console.log(nombre.length)
    for(let i=0; i<count ;i++){
        if(nombre[i]=="e"&&nombre[i+1]=="n"&&nombre[i+2]=="t"&&nombre[i+3]=="e"){

            data.push('e')
            i=i+4
        }else if(nombre[i]=='i'&&nombre[i+1]=="m"&&nombre[i+2]=="e"&&nombre[i+3]=="s"){
            data.push('i')
            i=i+3
        }else if(nombre[i]=='a'&&nombre[i+1]=='i'){
            data.push('a')
            i=i+1
        }else if(nombre[i]=='o'&&nombre[i+1]=='b'&&nombre[i+2]=='e'&&nombre[i+3]=='r'){
            data.push('o')
            i=i+3
        }else if(nombre[i]=='u'&& nombre[i+1]=='f'&&nombre[i+2]=='a'&&nombre[i+3]=='t'){
            data.push('u')
            i=i+3
        }else{
            data.push(nombre[i])
        }
       
    }
    let frase = data.join("")

    areaEncriptado.style.display = "block";
    botonCopiar.style.display = "block";

    imgBuscando.hidden = true;  
    msgNoHayTexto.hidden = true;  
    
    areaEncriptado.value = frase;
}

function copiar(){
  var mensajeEncriptado = areaEncriptado.value;
  
  navigator.clipboard.writeText(mensajeEncriptado);
}

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;
