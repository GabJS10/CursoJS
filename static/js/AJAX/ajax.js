(() => {
     const xhr = new XMLHttpRequest(),
          $xhlol = document.getElementById("xhl"),
          $fragment = document.createDocumentFragment()

     xhr.addEventListener("readystatechange", e => {
          if (xhr.readyState !== 4) return;

          if (xhr.status >= 200 && xhr.status < 300) {
               let json = JSON.parse(xhr.responseText)

               json.forEach(user => {
                    const $li = document.createElement("li")
                    $li.innerHTML = `${user.name} ---- ${user.email} ---- ${user.phone}`
                    let $clone = document.importNode($li, true)
                    $fragment.appendChild($clone)
               });

               $xhlol.appendChild($fragment)

          } else {
               let message = xhr.statusText || "Ocurrio un error"
               $xhlol.innerHTML = `Code: ${xhr.status}. ${message}`
          }
     })
     xhr.open("GET", "https://jsonplaceholder.typicode.com/users")
     xhr.send()
})();

(() => {
     const $fetchol = document.getElementById("fetch"),
          $fragment = document.createDocumentFragment()

     fetch("https://jsonplaceholder.typicode.com/users")
          .then(res => res.ok ? res.json() : Promise.reject(res))
          .then(json => {
               json.forEach(user => {
                    const $li = document.createElement("li")
                    $li.innerHTML = `${user.name} ---- ${user.email} ---- ${user.phone}`
                    let $clone = document.importNode($li, true)
                    $fragment.appendChild($clone)
               });
               $fetchol.appendChild($fragment)
          })
          .catch(err => {
               //console.log(err);
               let message = err.statusText || "Ocurrio un error"
               $fetchol.innerHTML = `Code: ${err.status}. ${message}`
          })
          .finally(() => {
               //console.log("Este codigo se ejecuta de todos modos");
          });
})();

(() => {
     const $fetchAsyncol = document.getElementById("fetch-async"),
          $fragment = document.createDocumentFragment()

 
     async function getData() {

          try {
               const response = await fetch("https://jsonplaceholder.typicode.com/users"),
                    json = await response.json()

               if (!response.ok) throw { status: response.status, message: response.statusText || "Ocurrio un error" };


               json.forEach(user => {
                    const $li = document.createElement("li")
                    $li.innerHTML = `${user.name} ---- ${user.email} ---- ${user.phone}`
                    let $clone = document.importNode($li, true)
                    $fragment.appendChild($clone)
               });
               $fetchAsyncol.appendChild($fragment)

          } catch (error) {
               $fetchAsyncol.innerHTML = `Code: ${error.status}. ${error.message}`
          } finally {
               //console.log("Este codigo se ejecuta de todas formas");
          }


     }

     getData()

})();

(() => {
     const $Axios = document.getElementById("axios"),
      $fragment = document.createDocumentFragment()


     async function getData() {
          try {
               const res = await axios.get("https://jsonplaceholder.typicode.com/users"),
                json = await res.data;
               
               console.log(json);
               json.forEach(user => {
                    const $li = document.createElement("li")
                    $li.innerHTML = `${user.name} ---- ${user.email} ---- ${user.phone}`
                    let $clone = document.importNode($li, true)
                    $fragment.appendChild($clone)
               });
               $Axios.appendChild($fragment)

          } catch (error) {
               let message = error.response.statusText || "Ocurrio un error"
                $Axios.innerHTML = `Code: ${error.response.status}. ${message}`
          } finally {
               console.log("Este codigo se ejecuta de todas formas");                
          }
     }

     getData()


})();