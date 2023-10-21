export function PostCard(props) {
     let { title, date, slug, _embedded } = props

     let src = _embedded["wp:featuredmedia"] ? _embedded["wp:featuredmedia"][0]["source_url"] : "app/assets/favicon.png"
     const fecha = new Date(date).toLocaleDateString()

     return `
          <article class="post-card">
               <img src="${src}" alt="${title}">
               <h2>${title.rendered}</h2>
               <p>
                    <time datetime="${fecha}">${fecha}</time>
                    <a href="#/${slug}">Ver mas..</a>
               </p>
          </article>
     `
}