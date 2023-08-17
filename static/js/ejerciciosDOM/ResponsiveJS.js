const d = document,
 w = window

 export default function MakeResponsive(id,mdQuery,mobileContent,desktopContent){
     let breakpoint = w.matchMedia(mdQuery)
     const responsive = (e) => {
          if (e.matches) {
               d.getElementById(id).innerHTML = desktopContent
          }else{
               d.getElementById(id).innerHTML = mobileContent
          }
     }
     breakpoint.addEventListener('change',responsive)
     responsive(breakpoint)
 }