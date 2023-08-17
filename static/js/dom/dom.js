/*
console.log(document.getElementById('que-es'));
console.log(document.getElementById('menu'));
console.log(document.querySelector('.card'));
console.log(document.querySelector('#menu li'));
console.log(document.querySelectorAll('#menu li'));
console.log(document.querySelectorAll('.card'));
console.log(document.querySelectorAll('.card')[0]);
 


console.log(document.documentElement.getAttribute('lang'));

console.log(document.querySelector('.link-dom').getAttribute('href'));


document.documentElement.setAttribute('lang','es-MX')

console.log(document.documentElement.getAttribute('lang'));

const $linkDOM = document.querySelector('.link-dom')

$linkDOM.setAttribute('target','_blank')
$linkDOM.setAttribute('rel','noopener')
$linkDOM.setAttribute('href','google.com')

console.log($linkDOM.hasAttribute('rel'));
$linkDOM.removeAttribute('rel')
console.log($linkDOM.hasAttribute('rel'));
console.log($linkDOM.hasAttribute('data-id'));

const $linkDOM = document.querySelector('.link-dom')
console.log($linkDOM.style);
console.log($linkDOM.style.backgroundColor);

$linkDOM.style.setProperty('text-decoration','none')
$linkDOM.style.setProperty('display','block')
$linkDOM.style.setProperty('width','50%')
$linkDOM.style.setProperty('text-align','center')
$linkDOM.style.marginLeft = 'auto'
$linkDOM.style.marginRight = 'auto'
$linkDOM.style.padding = '1rem'
$linkDOM.style.borderRadius = '5rem'


const $html = document.documentElement
const $body = document.body
console.log($body);
let darkColor = getComputedStyle($html).getPropertyValue('--dark-color')
let yellowColor = getComputedStyle($html).getPropertyValue('--yellow-color')
console.log(darkColor,yellowColor);

$body.style.backgroundColor=darkColor
$body.style.color = yellowColor

$html.style.setProperty('--dark-color','#000')
darkColor = getComputedStyle($html).getPropertyValue('--dark-color')

$body.style.backgroundColor = darkColor


const $card = document.querySelector('.card')

console.log($card);
console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains('rotate-45'));
$card.classList.add('rotate-45')
console.log($card.classList);
console.log($card.className);
$card.classList.remove('rotate-45')
$card.classList.toggle('rotate-45')
$card.classList.toggle('rotate-45')
$card.classList.toggle('rotate-45')
$card.classList.replace('rotate-45','rotate-135')
$card.classList.add('opacity-80','serpia')
console.log($card.classList);
console.log($card.className);
const $whatDOM = document.getElementById('que-es')

let text = `
<p>
El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un                    
API para documentos HTML y XML.
</p>
<p>
Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
</p>
<p>
    <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
</p>
`

$whatDOM.textContent = text
$whatDOM.innerHTML = text
$whatDOM.outerHTML = text

const $cards = document.querySelector('.cards')
console.log($cards);
console.log($cards.children); 
console.log($cards.children[2]); 
console.log($cards.parentElement); 
console.log($cards.firstElementChild); 
console.log($cards.lastElementChild); 
console.log($cards.previousElementSibling); 
console.log($cards.nextElementSibling);
console.log($cards.closest('html')); 
console.log($cards.children[2].closest('section')); 


//agregando y creando elementos
const $figure = document.createElement('figure')
const $img = document.createElement('img')
const $figCaption = document.createElement('figcaption')
const $figCaptionText = document.createTextNode('Football')
const $cards = document.querySelector('.cards')

$figure.classList.add('card')
$img.setAttribute('src','https://picsum.photos/200/300')
$img.setAttribute('alt','football')
$figCaption.appendChild($figCaptionText)
$figure.appendChild($img)
$figure.appendChild($figCaption)
$cards.appendChild($figure)


const $fragment = document.createDocumentFragment()
const $ul = document.createElement('ul')

const estaciones = ['primavera','otoño','verano','invierno']

estaciones.forEach(el => {
    const $li = document.createElement('li')
    $li.textContent = el
    $fragment.appendChild($li)
})

document.write('<h3>Estaciones del año </h3>')


$ul.appendChild($fragment)
document.body.appendChild($ul)


//templates html 

const $cards = document.querySelector('.cards')
const $template = document.getElementById('template-card').content
const $fragment = document.createDocumentFragment()
const cardContent = [
    {
        title:'Tecnologia',
        img:'https://picsum.photos/200/300',
    },
    {
        title:'Naturaleza',
        img:'https://picsum.photos/200/300',
    },
    {
        title:'Animales',
        img:'https://picsum.photos/200/300',
    },
    {
        title:'Gente',
        img:'https://picsum.photos/200/300',
    },
    {
        title:'Arquitectura',
        img:'https://picsum.photos/200/300',
    },
]

cardContent.forEach(el => {
    $template.querySelector('img').setAttribute('src',el.img)
    $template.querySelector('img').setAttribute('alt',el.title)
    $template.querySelector('figcaption').textContent = el.title

    let $clone = document.importNode($template, true)
    $fragment.appendChild($clone)
})

$cards.appendChild($fragment)

const $nav = document.getElementById('menu')
const $templateLi = document.getElementById('lista-dias').content
const $fragmentUl = document.createDocumentFragment()
const dias = ['lunes','martes','miercoles','jueves','viernes','sabado','domingo']


dias.forEach(el => {
    $templateLi.querySelector('a').textContent = el
    $templateLi.querySelector('a').setAttribute('href','#')
    let $clone = document.importNode($templateLi,true)
    $fragmentUl.appendChild($clone)
})

$nav.querySelector('ul').appendChild($fragmentUl)

*/

//` `
const $cards = document.querySelector('.cards')
const $newCard = document.createElement('figure')

$content = ` 
    <img src="https://picsum.photos/200/300" alt="Tech">
    <figcaption></figcaption>
`

$newCard.classList.add('card')

$newCard.insertAdjacentHTML('beforeend',$content)

$newCard.querySelector('figcaption').insertAdjacentText('beforeend','Any')

$cards.insertAdjacentElement('afterbegin',$newCard)








