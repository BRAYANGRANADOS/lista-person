const personas = [
    new Persona('','',''),
];

function setResult(valu){
    document.getElementById('nombre').innerHTML=valu;
    document.getElementById('apellido').innerHTML=valu;
    document.getElementById('carnet').innerHTML = valu;
    
}
function getResult(){
    return(document.getElementById('nombre').innerHTML);
    return(document.getElementById('apellido').innerHTML);
    return (document.getElementById('carnet').innerHTML);
}

function kc(){
    let texto = '';
    for(let persona of personas){
        
        texto += `<li>${persona.nombre} </li>`;
    }

    let texto2 = '';
    for(let persona of personas){
        console.log(persona);
        texto2 += `<li>${persona.apellido} </li>`;
    }

    let texto3 = '';
    for(let persona of personas){
        console.log(persona);
        texto3 += `<li>${persona.carnet} </li>`;
    }
    document.getElementById('personas').innerHTML = texto;
   setResult(texto);

   document.getElementById('personas2').innerHTML = texto2;
   setResult(texto2);

   document.getElementById('personas3').innerHTML = texto3;
   setResult(texto3);
}

function agregar(){
    const forma = document.forms['forms'];
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];
    const carnet = forma['carnet'];
     
    if(nombre.value != ''  && apellido.value != '' && carnet.value != ''){
        const persona = new Persona(nombre.value,apellido.value,carnet.value);
        console.log(persona);
        personas.push(persona);
        kc(); 
      
    }
    else{
        console.log('No hay información que agregar');
    }
 
} 

function borrarInput() {
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
}


const blackButton = document.getElementById('blackButton');
blackButton.addEventListener('click', cambiarPantallaNegra);

function cambiarPantallaNegra() {
    document.body.style.backgroundColor = 'black';
    document.getElementById('personas').style.color = 'red';
    document.getElementById('personas2').style.color = 'red';
  }