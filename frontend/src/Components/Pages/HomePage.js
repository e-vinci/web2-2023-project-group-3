/* eslint-disable no-unused-vars */
import imgBloc1 from '../../img/bloc1.png';
import sushi1 from '../../img/sushis/1.png';
import sushi2 from '../../img/sushis/2.png';
import sushi3 from '../../img/sushis/3.png';
import box from '../../img/sushis/box.jpg';

const item1 = document.getElementsByClassName('item 1');
const item2 = document.getElementsByClassName('item 2');
const item3 = document.getElementsByClassName('item 3');
const item4 = document.getElementsByClassName('item 4');
const item5 = document.getElementsByClassName('item 5');
const sequences =[sushi1,sushi2,sushi3,sushi1,sushi2];
let index = 0;

const delayInSeconds = 4;
const delayInMiliSeconds = delayInSeconds * 1000;

/*         <div class="item active" >
            <img class="itemImg" src="${sushi2}">
        </div>
        <div class="item active" >
            <img class="itemImg" src="${sushi3}">
        </div>
        <div class="item" >
            <img class="itemImg" src="${sushi1}">
        </div>
        <div class="item" >
            <img class="itemImg" src="${sushi2}">
        </div>
        <div class="item" >
            <img class="itemImg" src="${sushi3}">
        </div> */

function ShowImages () {
  
  const itemActive = document.getElementsByClassName('itemImg');
  const select = sequences[index];
    itemActive.src = select;
    index = (index + 1) % sequences.length;
  console.log(itemActive.src)
  
}


const HomePage = () => {
  const main = document.querySelector('main');

  const bloc1 = `
  <div id="bloc1">
    <img id="" src="${imgBloc1}" alt="" style="width:100%; height:auto"></a>
  </div>
  `

  const bloc2 = `
  <div id="bloc2">
  <div class="slider">
    <div class="title">
    <h2 >NOTRE MENU</h2>
        
    </div>
    <div class="images">
        <div class="item active" >
            <img class="itemImg" src="${sushi1}">
        </div>

    </div>
    <div class="content">
        <div class="item active">
            <h1>DES MAKIS</h1>
           
            <button>VOIR PLUS</button>
        </div>
        <div class="item">
            <h1>DES CALIFORNIAS ROLLS</h1>
         
            <button>See more</button>
        </div>
        <div class="item">
            <h1>DES SAUMONS ROLLS</h1>
           
            <button>VOIR PLUS</button>
        </div>
        <div class="item">
            <h1>PRODUCT NAME 4</h1>
          
            <button>See more</button>
        </div>
        <div class="item">
            <h1>PRODUCT NAME 5</h1>
           
            <button>See more</button>
        </div>
        <div class="item">
            <h1>PRODUCT NAME 6</h1>
           
            <button>See more</button>
        </div>
    </div>
  <button id="prev"><</button>
  <button id="next">></button>
</div>

  </div>
  
 
  `

  const bloc3 = `
  <div id="bloc3">
    <div class="title3">
    <h2>VOTRE BOX</h2>
    </div>

    <div id="cardBox">
      <div class="card mb-3" style="max-width: 1200px; ">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${box}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <p id="cardBoxContent">Vous souhaitez personnaliser votre box en choisissant vos propres sushis ? 
              C’est possible chez nous. Composez votre délicieux repas </p>
              
            </div>
            <button id="buttonBox" href="#" data-uri="/creationBox" >Je crée ma box</button>
          </div>
       </div>
    </div>
  </div>
  `
  

  main.innerHTML=bloc1 + bloc2 + bloc3;

  const button = document.getElementById('next')
  button.addEventListener("click",ShowImages); 
  
};





export default HomePage;
