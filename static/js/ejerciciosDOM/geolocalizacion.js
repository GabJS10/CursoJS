const d = document,
 n = navigator


export default function getGeolocalizacion(div){
     const $div = d.getElementById(div),
      options = {
          enableHighAccuracy: true,
          maximumAge: 30000,
          timeout: 27000,
      }

     const success = (position) => {
          console.log(position);


          $div.innerHTML = `
          </p>Tu posicion actual es<p>
          <ul>
               <li>Latitud: ${position.coords.latitude}</li>
               <li>longitude: ${position.coords.longitude}</li>
               <li>Precision: ${position.coords.accuracy} metros</li>
              <a href="https://www.google.com/maps/@${position.coords.latitude},${position.coords.longitude},20z" target="_blank" rel="noopener"></a>
               
               Ver en google maps </a>

          </ul>
          `

     }

     const error = (ex) => {
          $div.innerHTML = `<p><mark>Code:${ex.code},Message: ${ex.message}</mark></p>`
          console.log(ex);
     }
     
     n.geolocation.getCurrentPosition(success, error, options);
}