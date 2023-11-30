import imgBloc1 from '../../img/bloc1.png';
import sushi1 from '../../img/sushis/1.png';
import sushi2 from '../../img/sushis/2.png';
import sushi3 from '../../img/sushis/3.png';
import box from '../../img/sushis/box.jpg';
import about from '../../img/about.png';





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
            <img src="${sushi1}">
        </div>
        <div class="item" >
            <img src="${sushi2}">
        </div>
        <div class="item" >
            <img src="${sushi3}">
        </div>
        <div class="item" >
            <img src="${sushi1}">
        </div>
        <div class="item" >
            <img src="${sushi2}">
        </div>
        <div class="item" >
            <img src="${sushi3}">
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
  const bloc4 = `
  <div id="bloc4">
    <h1 class="title4">A propos de nous</h1>
    <img src="${about}" alt="" style="width:50%; height:auto; display: flexbox;">
    <div class="aboutUs" >
        <h1 style="border: 3px; font-size: xx-large;">Vous êtes entre de bonnes mains.</h1>
        <br>
        Notre professionalisme et notre expérience acquis 
        fait de nous une entreprise hors du commun. 
        Notre objectif est d'aider le client en lui offrant 
        des services de qualités tout en gardant notre touche d'originalité.
    </div>
  </div>
  `

  main.innerHTML=bloc1 + bloc2 + bloc3 + bloc4;
  
};



export default HomePage;
