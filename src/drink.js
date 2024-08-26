import { addImgOverlayEventToCards } from "./imgoverlay.js"; 

const images = require.context('./images/drink', false, /\.(png|jpe?g|svg)$/);
const imagePaths = {};

images.keys().forEach((key) => {
  // Get the image name without extension and directory (e.g., BubblePizza)
  const imageName = key.replace('./', '').replace(/\.(png|jpe?g|svg)$/, '');
  imagePaths[imageName] = images(key);
  console.log(imageName);
});

export function tab_drink(contentTab) {
  contentTab.innerHTML = `
      <div class="main selections">
        <div class="card">
          <img src="${imagePaths['AlmondBanana']}" alt="almond banana drink picture">
          <div class="text">
            <strong>Almond & Banana Smoothie</strong> - almond milk, blanched almonds, bananas, vanilla, cinnamon
          </div>
        </div>
        <div class="card">
          <img src="${imagePaths['BlueberryBurst']}" alt="blueberry burst drink picture">
          <div class="text">
            <strong>Blueberry Burst</strong> - cranberry juice, yogurt, blueberries, honey
          </div>
        </div>
        <div class="card">
          <img src="${imagePaths['BreakfastBoost']}" alt="breakfast boost drink picture">
          <div class="text">
            <strong>Breakfast Boost</strong> - orange juice, lime juice, lemon juice, grapefruit and orange
          </div>
        </div>
        <div class="card">
          <img src="${imagePaths['KiwiShake']}" alt="kiwi shake drink picture">
          <div class="text">
            <strong>Kiwi Shake</strong> - milk, lime juice, vanilla ice cream, kiwi
          </div>
        </div>
        <div class="card">
          <img src="${imagePaths['OrangeStrawberry']}" alt="orange strawberry drink picture">
          <div class="text">
            <strong>Orange & Strawberry Cream</strong> - strawberry yogurt, orange juice, strawberry, banana
          </div>
        </div>
        <div class="card">
          <img src="${imagePaths['PearRaspberry']}" alt="pear raspberry drink picture">
          <div class="text">
            <strong>Pear & Raspberry Breeze</strong> - spring water, raspberries, pear
          </div>
        </div>
        <div class="card">
          <img src="${imagePaths['RubySmoothsday']}" alt="ruby smoothsday drink picture">
          <div class="text">
            <strong>Ruby Smoothsday</strong> - spring water, Greek yogurt, ruby grapefruit, honey
          </div>
        </div>
      </div>`;

      addImgOverlayEventToCards();
}