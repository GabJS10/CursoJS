/*

function holaMundo(e){
     alert('Hola mundo')
     console.log(e);
}


const $boton = document.getElementById('evento-semantico')
$boton.onclick = holaMundo


const $botonEventoMultiple = document.getElementById('evento-multiple')

$botonEventoMultiple.addEventListener('click',holaMundo)

$botonEventoMultiple.addEventListener('click', (e) => {
     console.log('Segundo evento');
     console.log(e);
     console.log(e.type);
     console.log(e.target);
})

function saludar(nombre = 'Desconocido'){
     alert(`Hola ${nombre}`)
}


$botonEventoMultiple.addEventListener('click',(e) => {
     console.log('tercer evento');
     saludar('Gabriel')
     console.log(e);
})



const $eventoRemover = document.getElementById('evento-remover')

const removerListener = (e) => {
     console.log(e);
     $eventoRemover.removeEventListener('dblclick',removerListener)
     $eventoRemover.disabled = true
} 


$eventoRemover.addEventListener('dblclick', removerListener)

const $seccion = document.querySelectorAll('.flujo-eventos div')
const $seccionA = document.querySelector('.flujo-eventos a')


function flujoEventos(e){
     console.log(`Hola, soy ${this.className} el que disparo el evento fue ${e.target.className}`);
}


$seccion.forEach(el => {
     
     el.addEventListener('click',flujoEventos)

     
     el.addEventListener('click',flujoEventos, {
          capture:true,
          once:true
     })
})

document.addEventListener('click', e => {
     console.log('Click en',e.target);

     if (e.target.matches('.flujo-eventos div')) {
          flujoEventos(e)
     }

     if(e.target.matches('.flujo-eventos a')){
          alert('SAMONDAAAAAA')
          e.preventDefault()
     }
})

$seccionA.addEventListener('click',e => {
     alert('SAMONDAAAAAA')
     e.preventDefault()
     e.stopPropagation()
})

window.addEventListener('resize', e => {
     console.clear()
     console.log('---------------Evento resize-----------------');
     console.log(window.innerWidth);
     console.log(window.innerHeight);
     console.log(window.outerWidth);
     console.log(window.outerHeight);
     console.log(e);

})


window.addEventListener('scroll', e => {
     console.clear()
     console.log('-------------evento scroll');
     console.log(window.scrollX);
     console.log(window.scrollY);
     console.log(e);
})


document.addEventListener('DOMContentLoaded', e => {
     console.log('-------------------evento DOMContentLoaded ---------- ');
     console.log(window.screenX);
     console.log(window.screenY);
     console.log('---------');
})
*/


const $abrir = document.getElementById('abrir')
const $cerrar = document.getElementById('cerrar')
const $imprimir = document.getElementById('imprimir')

let ventana;

$abrir.addEventListener('click', e => {
     ventana = window.open('https://jonmircha.com/')
})

$cerrar.addEventListener('click', e => {
     ventana.close()
})

$imprimir.addEventListener('click', e => {
     window.print()
})
