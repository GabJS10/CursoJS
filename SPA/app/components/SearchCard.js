export function SearchCard(props) {

     let {title, _embedded} = props

     let slug = _embedded.self[0].slug

     return `
          <article class="post-card">
               <h2>${title}<h2>
               <p>
               <a href="#/${slug}"> Ver publicacion... </a>
               <p>
          </article>

     `
}