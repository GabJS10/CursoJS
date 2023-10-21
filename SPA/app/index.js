import { App } from "./App.js"
import API from "./helpers/wp_api.js"



document.addEventListener("DOMContentLoaded", e => {App()})
window.addEventListener("hashchange",e => {
     API.page = 1
     App()
})