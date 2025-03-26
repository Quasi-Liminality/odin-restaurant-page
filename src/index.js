import "./style.css"
import { HomePage } from "./home.js";
import { MenuPage } from "./menu.js";
import { AboutPage } from "./about.js"

// DOM cache
const content = document.querySelector('#content');
const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const aboutBtn = document.querySelector('#about');

// On page load
HomePage();

// Event Listeners
homeBtn.addEventListener('click', handleBtnClick);
menuBtn.addEventListener('click', handleBtnClick);
aboutBtn.addEventListener('click', handleBtnClick);

// Event Handlers
function handleBtnClick(e) {
    content.replaceChildren();

    switch (e.target.id) {
        case 'home':
            HomePage();
            break;
        case 'menu':
            MenuPage();
            break;
        case 'about':
            AboutPage();
    }
}