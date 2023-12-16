import boite from '../../img/boite.png'
import sushi1 from '../../img/sushis/1.png'


// Déclarez une variable globale pour stocker tous les sushis
let allSushis = [];

const CreationBox = () => {
  const main = document.querySelector('main');

  const bloc1= `
  <div class="text-center" style="padding-top: 2%; padding-bottom: 2%; background-color: #151313;">
    <h1 style="font-weight:700; color: #C69751;" >Créez votre propre box personnalisée!</h1>
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
    <div class="boxnew">
              <img src="${boite}" width="600">
      </div>  
            
        
            <form action="http://localhost:8080/creationBox" method="get">
              <button id="ajouterPanier" href="#" data-uri="/creationBox" onclick="afficherAnimation()" >Ajouter au panier</button>
              <button id="annulerBox" href="#" data-uri="/creationBox" >Annuler</button>
            </form>      
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
                    <img src="${sushi1}" width="150" class="sushisImg"> 
            </div>  
      
            <div class="card-inner">
                <span></span> 
                <h5 class="mb-0">${sushi.nom}</h5> 
      
                <div class="price">
                    <span>${sushi.prix_unitaire }€/piece</span>
                </div>
      
      
                <div class="mt-3 d-flex justify-content-center align-items-center">
                <button class="btn text-uppercase btn-sm details" style="background-color: #C69751;" onclick="afficher()">Détails</button>
                    <div class="d-flex flex-row">


                    
                          <span class="cart" onclick="afficherAnimation()"><i class="fa fa-shopping-cart">+</i></span>  
                      </div>
                </div>

                  <div class="modal" id="modal">
                      <div class="modal-back"></div>
                        <div class="modal-container">
                          <div class="card" style="width: 25rem;">
                            <img src="${sushi1}" class="card-img-top" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">${sushi.nom}</h5>
                              <p class="card-text">${sushi.description}</p>
                                <a href="#" class="btn btn-dark" id="modal-close">fermer</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>                    
          </div>
    
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
      

          window.afficher = async () => {
            document.getElementById('modal').style.display = 'block'
          };

          window.afficherAnimation = async() => {
            const boiteImage = document.querySelector('.boxnew img');
          
            // Ajoutez la classe 'shake' à l'image de la boîte pour l'animation
            boiteImage.classList.add('shake');
          
            // Supprimez la classe 'shake' après 500 ms (0.5s)
            setTimeout(() => {
              boiteImage.classList.remove('shake');
            }, 500);
          };
        };




export default CreationBox;