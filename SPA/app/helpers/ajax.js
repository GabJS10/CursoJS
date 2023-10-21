export async function ajax(propiedades) {
     let {url,cbSuccess} = propiedades


     await fetch(url)
     .then(res => res.ok ? res.json() : Promise.reject(res))
     .then(json => cbSuccess(json))
     .catch(error => {
          let message = error.statusText || "Ocurrio un error"
          document.getElementById("main").innerHTML = `
          <div class="error">
               <p>Error ${error.status}: ${message}</p>
          </div>
          `
          document.querySelector(".loader").style.display = "none"
     })

}