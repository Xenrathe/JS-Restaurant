import legendSophImage from "./images/LegendSoph.jpg";

export function tab_about(contentTab) {
  contentTab.innerHTML = `<div class="main about">
      <div class="sub-one">
        <img src="${legendSophImage}" width="500" alt="a sophisticated dog">
        <div class="text big">Treat yourself at <br><strong>Legend's Treatery</strong></div>
      </div>
      <div class="sub-two">
        <div class="text">
        At Legend's Treatery, head chef Legend, a chiweenie classically trained in Treatology, directs his assistant chef, Mr. PZ, in delicious creations. 
        Our meals are created according to the Treatology 'motto': simply tasty, simply healthy.
       </div>
       <div class="block">
       </div>
    </div>`;
}