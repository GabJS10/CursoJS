import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";
import API from "../helpers/wp_api.js"
import { Post } from "./Post.js";
import { SearchCard } from "./SearchCard.js";
import { ContactForm } from "./ContactForm.js";
export async function Router() {

     const d = document,
      w = window,
       $main = d.getElementById("main")

     let { hash } = location

     $main.innerHTML = null

     if (!hash || hash === "#/") {
          await ajax(
               {url: API.POSTS,
               cbSuccess: (posts) => {
                    let html = ""
                    posts.forEach(post => {html += PostCard(post)});
                    d.querySelector(".loader").style.display = "none"
                    $main.innerHTML = html
               }}
              )
     }else if (hash.includes("#/search")) {
          let query = hash.slice(16)
          if(query) {
               await ajax(
                    {
                         url: `${API.SEARCH}${query}`,
                         cbSuccess: (rs) => {
                              let html = ""
                              if(rs.length!=0){
                                   console.log(rs);
                                   rs.forEach(el => {html+=SearchCard(el)});
                              }else{
                                   html = ` 
                                        <p class="error">
                                             No existen resultados para <mark>${query}<mark>
                                        <p>
                                   `
                              }

                              $main.innerHTML = html

                         }
                    }
               )
          }
          

     }else if (hash === "#/contact") {
          $main.appendChild(ContactForm())
     }else{
          console.log(hash.slice(2));
          await ajax(
               {
                    url: `${API.POST}?slug=${hash.slice(2)}`,
                    cbSuccess: (post) => {
                         $main.innerHTML = Post(post[0])
                    }
               }
          )
     }

     d.querySelector(".loader").style.display = "none"
}