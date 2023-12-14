/* eslint-disable no-unused-vars */
import sushi1 from "../../img/sushis/1.png";


// Déclarez une variable globale pour stocker tous les sushis
let allSushis = [];



const Menu = () => {
    const main = document.querySelector('main');

    const bloc1= `
  
    <div class="text-center" style="padding-top: 2%; padding-bottom: 2%; background-color: #151313;">
    <h1 style="font-weight:700; color: #C69751;" > FAITES VOTRE CHOIX !</h1>
    </div>

    <div class="sushi-section"></div>
    </div>

    <div class="menu">
      <div class="text-center">
        <button onclick="filterSushis('Maki')" class="btn btn-small" style="background-color: #C69751; width: 15%;" data-toggle="portfilter" data-target="all">
          MAKI
        </button>
        <button onclick="filterSushis('CaliforniaRoll')" class="btn btn-small" style="background-color: #C69751; width: 15%;" data-toggle="portfilter" data-target="art">
          CALIFORNIA ROLLS
        </button>
        <button onclick="filterSushis('SaumonRoll')" class="btn btn-small" style="background-color: #C69751; width: 15%;" data-toggle="portfilter" data-target="media">
          SALMON ROLLS
        </button>
        <button onclick="filterSushis('Crusty')" class="btn btn-small" style="background-color: #C69751; width: 15%;" data-toggle="portfilter" data-target="brand">
          CRUSTY
        </button>
      </div>
    </div>
`

const displaySushis = (sushis) => {

  const products = document.createElement('div');
  products.classList.add('products');
    sushis.forEach(sushi => {
      products.innerHTML+=
      `
      <div class="cardMenu">
                          
      <div class="card-image">
              <img src="${sushi1}" width="150"> 
      </div>  

      <div class="card-inner">
          <span></span> 
          <h5 class="mb-0">${sushi.nom}</h5> 

          <div class="price">
              <span>${sushi.prix_unitaire }€/piece</span>
          </div>


          <div class="mt-3 d-flex justify-content-center align-items-center">
              <button class="btn text-uppercase btn-sm details" style="background-color: #C69751;" id="popupButton">Détails</button>
              
          </div>
          </div>                    
    </div>
    <div id="popup" class="modal">
        <p>Ceci est un popup personnalisé!</p>
        <button onclick="fermerPopup()">Fermer</button>
    </div>

    <!-- Fond obscurci -->
    <div id="overlay" class="overlay"></div>
    `

    });   
    
    products.innerHTML +=     `
    <div class="text-center" style="padding-top: 2%; padding-bottom: 2%; background-color: #151313;">
      <h1 style="font-weight:700; color: #C69751;" > OU TROUVEZ VOTRE BONHEUR PARMIS NOS BOXS:</h1>
    </div>
    `
    main.appendChild(products);
 

  }
    const menu = async () => {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const response = await fetch('http://localhost:3000/sushis', options);
      console.log(response.status);

      if (response.ok) {
        allSushis = await response.json();
        displaySushis(allSushis);
      } else {
        console.error('Erreur lors de la récupération du menu.');
      }
    };

    // Fonction pour filtrer les sushis par type
      window.filterSushis = (type) => {
        console.log(`Filtrage des sushis par type : ${type}`);
      const filteredSushis = allSushis.filter(sushi => sushi.type === type);
      console.log(filteredSushis);
      displaySushis(filteredSushis);
      };

    main.innerHTML = bloc1;
    menu();

  };

  
  export default Menu;