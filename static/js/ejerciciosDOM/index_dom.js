import hamburger from "./hamburguesa.js";
import { Clock, Alarm } from "./reloj.js";
import { Shortcuts, moveBall } from "./teclado.js";
import { countdown } from "./countdown.js";
import { scroll } from "./scroll.js";
import darkMode from "./darkMode.js";
import preferencias from "./localStorage.js";
import MakeResponsive from "./ResponsiveJS.js";
import ResponsiveTester from "./Tester.js";
import UserDeviceInfo from "./UserAgent.js";
import online_offline from "./deteccionRed.js";
import abrirCamara from "./camara.js";
import getGeolocalizacion from "./geolocalizacion.js";
import { crearCartas, filtro } from "./SearchFilter.js";
import { APICards } from "./APICards.js";
import { mostrarParticipantes, sortear } from "./Sorteo.js";
import slider from "./Slider.js";

const d = document

d.addEventListener('DOMContentLoaded', e => {
     hamburger('.panel-btn','.panel','.menu a')
     Clock('iniciar-reloj','detener-reloj','txtReloj')
     Alarm('iniciar-alarma','detener-alarma','assets/alarma.mp3')
     countdown('countdown',2023,8,1,e)
     scroll('.scroll-btn')
     darkMode('.darkModeBtn','darkMode')
     preferencias(e,'.darkModeBtn','darkMode')
     ResponsiveTester('responsive-tester','cerrar','url','width','height')
     UserDeviceInfo('user-device')
     abrirCamara('video')
     getGeolocalizacion('localizacion')
     crearCartas(".cards",APICards)
     filtro(".filtro",".card")
     mostrarParticipantes('.contenedorParticipantes', ['JavaScript','PHP','JAVA','C','Python','Ruby','Go','VisualBasic',
     'Rust','Perl'])
     sortear('iniciarSorteo','.participante')
     slider(".slider-slide",".prev",".next")



     MakeResponsive('youtube','(min-width: 1024px)',`<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=91&t=1388s&ab_channel=jonmircha" target="_blank" rel="
     noopener">Ver video</a>`,`<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`)
     MakeResponsive('gmaps','(min-width: 1024px)',`<a href="https://goo.gl/maps/yUMXr41gT9ftHkhXA" target="_blank" rel="
     noopener">Ver Mapa</a>`,`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.0009561780707!2d-72.91177842595428!3d11.55178864441575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8b62a8697ae5af%3A0x14602dcf92cab16!2sCatedral%20Nuestra%20Se%C3%B1ora%20de%20los%20Remedios!5e0!3m2!1ses!2sco!4v1691672482100!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`)
})

d.addEventListener('keydown',e => {
     Shortcuts(e)
     moveBall(e,'.ball','.stage')
})

online_offline()