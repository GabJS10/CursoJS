export function Post(props) {
     let {title, date, content } = props
     console.log(title,date,content);
     return `
          <section class="post-page">
               <aside>
                <h2>${title.rendered}</h2>
                <time datetime="${new Date(date).toLocaleDateString()}">${new Date(date).toLocaleDateString()}</time>
               </aside>
               </hr>
               <article>${content.rendered}</article>
          </section>
     `
}