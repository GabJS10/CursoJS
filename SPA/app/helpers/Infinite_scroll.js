import API from "./wp_api.js";
import { SearchCard } from "../components/SearchCard.js"
import { PostCard } from "../components/PostCard.js"
import { ajax } from "./ajax.js";
let loading = false
export async function InfiniteScroll() {
     const d = document,
      w = window

      let Component,
        API_URL
     d.addEventListener("scroll", async e => {
          const {scrollTop,scrollHeight,clientHeight } = d.documentElement;
          if (scrollTop + clientHeight >= scrollHeight && !loading) {
               if (location.hash.includes("#/contact")){
                    return false
               }
               console.log("entro");
               API.page+=1
               console.log(API.page);
               loading=true
               if (!location.hash || location.hash === "#/") {
                    API_URL = `${API.POSTS}&page=${API.page}`
                    Component = PostCard
               }else if (location.hash.includes("#/search")){
                    let query = location.hash.slice(16)
                    API_URL = `${API.SEARCH}${query}&page=${API.page}`
                    Component = SearchCard
               }else {
                    return false
               }
               d.querySelector(".loader").style.display="block"
               await ajax(
                    {
                         url: API_URL,
                         cbSuccess: (rs) => {
                              let html = ""
                              rs.forEach(el => {html+=Component(el)});
                              d.querySelector(".loader").style.display="none"

                              d.getElementById("main").insertAdjacentHTML("beforeend",html)

                              loading=false
                         }
                    }
               )
          
          }
     })


}