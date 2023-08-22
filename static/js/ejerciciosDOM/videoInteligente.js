const d = document

export default function video_inteligente(){
     const $videos = d.querySelectorAll("video[data-video-inteligente]")
     const options = {
          threshold: 0.5
     }
     const seccionObserver = new IntersectionObserver(entries => {
          entries.forEach(entrie => {
               if (entrie.isIntersecting) {
                    entrie.target.play()
               }else{
                    entrie.target.pause()
               }
               d.addEventListener('visibilitychange', e => {
                    if (entrie.isIntersecting && d.visibilityState === 'visible') {
                         entrie.target.play()
                    }else{
                         entrie.target.pause()
                    }
               })
          });
     },options)
     $videos.forEach(video => seccionObserver.observe(video));
}