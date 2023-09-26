import STRIPE_KEYS from "../assets/keys.js"

const d = document,
 $albums = d.querySelector(".albums"),
  $template = d.getElementById("album-template").content,
   $fragment = d.createDocumentFragment()

/*
fetch("https://api.stripe.com/v1/products", {
     headers: {
          Authorization: `Bearer ${STRIPE_KEYS.sk}`
     }
}).then(res => res.ok ? res.json() : Promise.reject(res))
.then(json => {
     
     const allProducts = Array.from(json.data)
     console.log(allProducts);
     allProducts.forEach(product => {
          $template.querySelector("img").src = product.images[0]
          $template.querySelector("figcaption").innerHTML = `${product.name}`
          let $clone = d.importNode($template,true)
          $fragment.appendChild($clone)
     });

     $albums.appendChild($fragment)


})

fetch("https://api.stripe.com/v1/prices", {
     headers: {
          Authorization: `Bearer ${STRIPE_KEYS.sk}`
     }
}).then(res => res.ok ? res.json() : Promise.reject(res))
.then(json => {
     
     const allPrices = Array.from(json.data)
     console.log(allPrices[0].unit_amount);


})

*/ 

const END_POINT_PRODUCTS = "https://api.stripe.com/v1/products"
const END_POINT_PRICES = "https://api.stripe.com/v1/prices"

const option = {
     headers: {
          Authorization: `Bearer ${STRIPE_KEYS.sk}`
     }
}

Promise.all([fetch(END_POINT_PRODUCTS,option),fetch(END_POINT_PRICES,option)]).
then((responses) => {
     const jsons = responses.map(response => response.json())

     return Promise.all(jsons)
}).then((jsons) => {
     const arrayOfJsons = jsons.map(json => json.data)
     let [products, prices] = arrayOfJsons

     products.forEach((product,index) => { 
          $template.querySelector("figure").setAttribute("price-id",prices[index].id)
          $template.querySelector("img").src = product.images[0]
          let numeroString = parseInt(prices[index].unit_amount_decimal.slice(0,-2))
          $template.querySelector("figcaption").innerHTML = `${product.name} - ${numeroString.toLocaleString("es-CO",{
               style: 'currency',
               currency: 'COP', // Código de moneda para pesos colombianos
               minimumFractionDigits: 2, // Mínimo de decimales
               maximumFractionDigits: 2, // Máximo de decimales
             })}`
          let $clone = d.importNode($template,true)
          $fragment.appendChild($clone)
     });

     $albums.appendChild($fragment)
})


d.addEventListener("click", e => {
     if (e.target.matches(".album *")) {
          let price = e.target.parentElement.getAttribute("price-id")

          const stripe = Stripe(STRIPE_KEYS.pk)
          
          
          stripe.redirectToCheckout({
               lineItems: [{price,quantity:1}],
               mode:"subscription",
               successUrl:"http://127.0.0.1:5500/ajax_ejercicios/stripe-success.html",
          })
          .then((res) => {
               console.log(res);
               if (res.error) {
                    console.log(res.error.message);
               }
          })
     }
})