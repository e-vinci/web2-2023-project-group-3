import sushi1 from "../../img/sushis/1.png"

// Déclarez une variable globale pour stocker tous les sushis
let allSushis = [];

// Fonction pour afficher les sushis dans le DOM
const displaySushis = (sushis) => {
  const main = document.querySelector('main');
  // eslint-disable-next-line no-unused-vars
  const menu = document.querySelector('.menu');

  // Créez une section pour afficher les sushis
  const sushiSection = document.createElement('div');
  sushiSection.classList.add('sushi-section');

  // Ajoutez chaque sushi à la section
  sushis.forEach(sushi => {
    const sushiCard = document.createElement('div');
    sushiCard.classList.add('sushi-card');
    sushiCard.innerHTML = `
      <h3>${sushi.nom}</h3>
      <p>Description: ${sushi.description}</p>
      <p>Prix: ${sushi.prix_unitaire}</p>
    `;
    sushiSection.appendChild(sushiCard);
  });

  // Ajoutez la section des sushis au DOM
  main.appendChild(sushiSection);
};

// Fonction pour filtrer les sushis par type
window.filterSushis = (type) => {
    console.log(`Filtrage des sushis par type : ${type}`);
  const filteredSushis = allSushis.filter(sushi => sushi.type === type);
  console.log(filteredSushis);
  displaySushis(filteredSushis);
};

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

const Menu = () => {
    const main = document.querySelector('main');

    const bloc1= `
    <div class="menu">
      <div class="filter">
        <div class="filter-card">
          <a href=# onclick="filterSushis('Maki')">MAKI</a>
        </div>  

        <div class="filter-card">
         <a href=# onclick="filterSushis('CaliforniaRoll')">CALIFORNIA ROLL</a>
        </div> 

        <div class="filter-card">
          <a href=# onclick="filterSushis('SaumonRoll')">SAUMON ROLL</a>
        </div> 

        <div class="filter-card">
          <a href=# onclick="filterSushis('Crusty')">CRUSTY</a>
        </div> 

        <div class="filter-card">
          <a href=# onclick="filterSushis('Nigiri')">NIGIRI</a>
        </div> 

        <div class="filter-card">
          <a href=# >NOS BOXES</a>
        </div> 
       
      </div>

      <div id="cardBox2">
      <div class="card mb-3" style="max-width: 1200px; ">
        <div class="row g-0">
          <div class="col-md-3">
            <img src="${royalBox}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-6">
            <div class="card-body">
              <p id="cardBoxContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam </p>
              
            </div>
            <button id="buttonBox2" href="#" data-uri="/creationBox" >Ajouter au panier</button>
            <button id="buttonBox3" href="#" data-uri="/creationBox" >Annuler</button>
          </div>
       </div>
       <div class="sushi-section"></div>
    </div>

    <div class="menu">
      <div class="text-center">
        <button class="btn btn-small" style="background-color: #C69751; width: 15%;" data-toggle="portfilter" data-target="all">
          MAKI
        </button>
        <button class="btn btn-small" style="background-color: #C69751; width: 15%;" data-toggle="portfilter" data-target="art">
          CALIFORNIA ROLLS
        </button>
        <button class="btn btn-small" style="background-color: #C69751; width: 15%;" data-toggle="portfilter" data-target="media">
          SALMON ROLLS
        </button>
        <button class="btn btn-small" style="background-color: #C69751; width: 15%;" data-toggle="portfilter" data-target="brand">
          CRUSTY
        </button>
      </div>
    </div>

    <div class="products">
      <div class="cardMenu">
                          
              <div class="card-image">
                      <img src="${sushi1}" width="150"> 
              </div>  

              <div class="card-inner">
                  <span></span> 
                  <h5 class="mb-0">Maki Saumon</h5> 

                  <div class="price">
                      <span>7.99€</span>
                  </div>


                  <div class="mt-3 d-flex justify-content-center align-items-center">
                      <button class="btn text-uppercase btn-sm details" style="background-color: #C69751;" >Details</button>
                      
                  </div>
              </div>                    
      </div>

      <div class="cardMenu">
                          
              <div class="card-image">
                      <img src="${sushi1}" width="150"> 
              </div>  

              <div class="card-inner">
                  <span></span> 
                  <h5 class="mb-0">Maki Saumon</h5> 

                  <div class="price">
                      <span>7.99€</span>
                  </div>


                  <div class="mt-3 d-flex justify-content-center align-items-center">
                      <button class="btn text-uppercase btn-sm details" style="background-color: #C69751;" >Details</button>
                   
                  </div>
              </div>                    
      </div>

      <div class="cardMenu">
                          
              <div class="card-image">
                      <img src="${sushi1}" width="150"> 
              </div>  

              <div class="card-inner">
                  <span></span> 
                  <h5 class="mb-0">Maki Saumon</h5> 

                  <div class="price">
                      <span>7.99€</span>
                  </div>


                  <div class="mt-3 d-flex justify-content-center align-items-center">
                      <button class="btn text-uppercase btn-sm details" style="background-color: #C69751;" >Details</button>
                      
                  </div>
              </div>                    
      </div>

      <div class="cardMenu">
                          
          <div class="card-image">
                  <img src="${sushi1}" width="150"> 
          </div>  

          <div class="card-inner">
              <span></span> 
              <h5 class="mb-0">Maki Saumon</h5> 

              <div class="price">
                  <span>7.99€</span>
              </div>


              <div class="mt-3 d-flex justify-content-center align-items-center">
                  <button class="btn text-uppercase btn-sm details" style="background-color: #C69751;" >Details</button>
                  
              </div>
          </div>                    
      </div>
        <div class="cardMenu">
                                  
              <div class="card-image">
                      <img src="${sushi1}" width="150"> 
              </div>  

              <div class="card-inner">
                  <span></span> 
                  <h5 class="mb-0">Maki Saumon</h5> 

                  <div class="price">
                      <span>7.99€</span>
                  </div>


                  <div class="mt-3 d-flex justify-content-center align-items-center">
                      <button class="btn text-uppercase btn-sm details" style="background-color: #C69751;" >Details</button>
                   
                  </div>
              </div>                    
        </div>
      <div class="cardMenu">
                                
            <div class="card-image">
                    <img src="${sushi1}" width="150"> 
            </div>  

            <div class="card-inner">
                <span></span> 
                <h5 class="mb-0">Maki Saumon</h5> 

                <div class="price">
                    <span>7.99€</span>
                </div>


                <div class="mt-3 d-flex justify-content-center align-items-center">
                    <button class="btn text-uppercase btn-sm details" style="background-color: #C69751;" >Details</button>
                
                </div>
            </div>                    
      </div>
    </div>


    <div class="text-center" style="padding-top: 2%; padding-bottom: 2%; background-color: #151313;">
      <h1 style="font-weight:700; color: #C69751;" > OU TROUVEZ VOTRE BONHEUR PARMIS NOS BOXS:</h1>
    </div>
    `

    main.innerHTML = bloc1;
    menu();
  };
  
  export default Menu;