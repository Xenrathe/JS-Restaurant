import "./styles.css";
import { tab_about } from "./about.js";
import { tab_food } from "./food.js";
import { tab_drink } from "./drink.js";

const contentTab = document.querySelector('#content');
document.querySelectorAll('button.tab').forEach((tabButton) => {
  if (tabButton.getAttribute('data-tab') == 'about'){
    tabButton.addEventListener('click', () => tab_about(contentTab));
  }
  else if (tabButton.getAttribute('data-tab') == 'food'){
    tabButton.addEventListener('click', () => tab_food(contentTab));
  }
  else if (tabButton.getAttribute('data-tab') == 'drink'){
    tabButton.addEventListener('click', () => tab_drink(contentTab));
  }
});

const imageOverlay = document.querySelector('#image-overlay');
imageOverlay.addEventListener('click', () => {
  imageOverlay.classList.add('hidden');
  imageOverlay.classList.remove('flex');
});

//Initialize upon page load
tab_about(contentTab);