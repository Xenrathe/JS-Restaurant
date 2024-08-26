import { addImgOverlayEventToCards } from "./imgoverlay.js"; 

const images = require.context('./images/food', false, /\.(png|jpe?g|svg)$/);
const imagePaths = {};

images.keys().forEach((key) => {
  // Get the image name without extension and directory (e.g. BubblePizza)
  const imageName = key.replace('./', '').replace(/\.(png|jpe?g|svg)$/, '');
  imagePaths[imageName] = images(key);
  console.log(imageName);
});

export function tab_food(contentTab) {
  contentTab.innerHTML = `
      <div class="main selections">
        <div class="card">
          <img src="${imagePaths['FlatbreadChips']}" alt="sausage, apples, and sauerkraut picture">
          <div class="text">
            <strong>Flatbread Basil Chips</strong> - basil, garlic, cheddar, romano, parmesan
          </div>
        </div>
        <div class="card">
          <img src="${imagePaths['BubblePizza']}" alt="bubble pizza picture">
          <div class="text">
            <strong>Bubble Pizza</strong> - Pepperoni, hand-rolled meatball, tomato sauce, asiago, parmesan
          </div>
        </div>
        <div class="card">
          <img src="${imagePaths['CoolNoodle']}" alt="cool noodle picture">
          <div class="text">
            <strong>Liang Mian Salad</strong> - shrimp, carrot, spring onion, bell pepper, green tea noodle, soba noodle, roasted sesame
          </div>
        </div>
        <div class="card">
          <img src="${imagePaths['EnchiladaBake']}" alt="enchilada bake picture">
          <div class="text">
            <strong>Enchilada Bake</strong> - beef, corn, bell pepper, salsa red sauce, cheddar, tortilla, scallion
          </div>
        </div>
        <div class="card">
          <img src="${imagePaths['SeafoodNoodle']}" alt="seafood and noodle picture">
          <div class="text">
            <strong>Hot Chili Seafood Medley</strong> - shrimp, scallop, red chili, ginger, soy-ketchup-lime sauce, soba noodle
          </div>
        </div>
        <div class="card">
          <img src="${imagePaths['KoreanRibs']}" alt="korean ribs picture">
          <div class="text">
            <strong>Slow-baked Korean Shortribs</strong> - short rib, ginger, garlic, scallion, sesame, cracked pepper
          </div>
        </div>
        <div class="card">
          <img src="${imagePaths['SpicySausage']}" alt="spicy sausage and veggies picture">
          <div class="text">
            <strong>Cajun Sausage and Roasted Veggies</strong> - andouille, red onion, yukon gold, bell pepper, jalapeno
          </div>
        </div>
        <div class="card">
          <img src="${imagePaths['OrzoChicken']}" alt="orzo chicken picture">
          <div class="text">
            <strong>Greek Chicken</strong> - chicken thigh, orzo, onion, bell pepper, oregano, lemon, goat cheese
          </div>
        </div>
        <div class="card">
          <img src="${imagePaths['SausageApples']}" alt="sausage, apples, and sauerkraut picture">
          <div class="text">
            <strong>Sausage & Sauerkraut</strong> - kielbasa, sauerkraut, granny smith, onion, caraway seed
          </div>
        </div>
        <div class="card">
          <img src="${imagePaths['SausageMac']}" alt="sausage and macaroni picture">
          <div class="text">
            <strong>Cheesy Sausage Mac</strong> - andouille, spiral pasta, cheddar blend, hot sauce
          </div>
        </div>
        <div class="card">
          <img src="${imagePaths['PumpkinLoaf']}" alt="loaf of pumpkin chocolate picture">
          <div class="text">
            <strong>Chocolate Chip Pumpkin Loaf</strong> - cinnamon, pumpkin, chocolate chip
          </div>
        </div> 
        <div class="card">
          <img src="${imagePaths['FudgyChocolate']}" alt="high-res desert picture">
          <div class="text">
            <strong>Triple layer Chocolate-chip Toffee Bars</strong> - graham cracker, toffee, fudge, chocolate chip cookie
          </div>
        </div>
        <div class="card">
          <img src="${imagePaths['HumanDog']}" alt="pan of home-cooked dog food">
          <div class="text">
            <strong>Canine Special</strong> - lean ground turkey, baby spinach, carrots, zucchini, green pea, brown rice
          </div>
        </div>
      </div>`;

      addImgOverlayEventToCards();
}