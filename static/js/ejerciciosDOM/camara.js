const d = document,
 n = navigator


export default function abrirCamara(video){
     const $video = d.getElementById(video)

     async function iniciarCamara(){
          try {
               const stream = await n.mediaDevices.getUserMedia({video:true}) 
               success(stream)
          } catch (e) {
               console.log(e);
          }
     }

     function success(stream) {
          $video.srcObject = stream
          $video.play()
     }
     iniciarCamara()
}