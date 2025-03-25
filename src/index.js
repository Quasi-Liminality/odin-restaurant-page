import { HomePage } from "./home.js";
import { MenuPage } from "./menu.js";
import "./style.css"


console.log(HomePage)
console.log(MenuPage)

// DOM cache
const content = document.querySelector('#content');
const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const aboutBtn = document.querySelector('#about');

// On page load
content.append(HomePage);

// Event Listeners
homeBtn.addEventListener('click', handleBtnClick);
menuBtn.addEventListener('click', handleBtnClick);
aboutBtn.addEventListener('click', handleBtnClick);

// Event Handlers
function handleBtnClick(e) {
    let page;

    switch (e.target.id) {
        case 'home':
            page = HomePage;
            break;
        case 'menu':
            page = MenuPage;
            break;
    }

    content.replaceChildren(page);
}