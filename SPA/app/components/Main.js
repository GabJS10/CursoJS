export function Main() {
     const $posts = document.createElement("main")
     $posts.id = "main"
     if(!location.hash.includes("#/search")) $posts.classList.add("grid-fluid")
     
     return $posts
}