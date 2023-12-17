import boite from '../../img/boite.png';
import sushi1 from '../../img/sushis/1.png';
import s1 from '../../img/sushis/1bis.png';
import s2 from '../../img/sushis/2bis.png';
import s3 from '../../img/sushis/3bis.png';
import s4 from '../../img/sushis/4bis.png';
import s5 from '../../img/sushis/5.png';
import s6 from '../../img/sushis/6.png';
import s7 from '../../img/sushis/7.png';
import s8 from '../../img/sushis/8.png';
import s9 from '../../img/sushis/9.png';
import s10 from '../../img/sushis/10.png';

const allPics = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10];

// Déclarez une variable globale pour stocker tous les sushis
let allSushis = [];

const CreationBox = () => {
  const main = document.querySelector('main');

  const bloc1 = `
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
            
        
            <form method="GET" action="http://localhost:8080/creationBox">
              <button id="ajouterPanier"  data-uri="/creationBox"  onclick="creationBox();">Ajouter au panier</button>
              <button id="annulerBox" href="#" data-uri="/creationBox" >Annuler</button>
            </form>      

            
</div>

          

           
   

    `;
  const displaySushis = (sushis) => {
    const products = document.createElement('div');
    products.classList.add('products');
    sushis.forEach((sushi, index) => {
      products.innerHTML += `
            <div class="cardMenu">
                                
            <div class="card-image">
                    <img src="${allPics[index]}" width="150" class="sushisImg"> 
            </div>  
      
            <div class="card-inner">
                <span></span> 
                <h5 class="mb-0">${sushi.nom}</h5> 
      
                <div class="price">
                    <span>${sushi.prix_unitaire}€/piece</span>
                </div>
      
      
                <div class="mt-3 d-flex justify-content-center align-items-center">
                <button class="btn text-uppercase btn-sm details" style="background-color: #C69751;" onclick="afficher()">Détails</button>
                    <div class="d-flex flex-row">
                          <span class="cart" onclick="ajouterSushi(${sushi.id_sushi})"><i class="fa fa-shopping-cart">+</i></span>  
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
    
          `;
    });

    products.innerHTML += `
          <div class="text-center" style="padding-top: 2%; padding-bottom: 2%; background-color: #151313;">
            <h1 style="font-weight:700; color: #C69751;" > OU TROUVEZ VOTRE BONHEUR PARMIS NOS BOXS:</h1>
          </div>
          `;
    main.appendChild(products);
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
      console.log(allSushis);
    } else {
      console.error('Erreur lors de la récupération du menu.');
    }
  };

    // function to get already created boxes

   /* const getBoxes = async () => {
   
      const response = await fetch('http://localhost:3000/sushis/get_boxes');
      console.log(response.status);
  
      if (response.ok) {
        allSushis = await response.json();
        console.log(allSushis);
        displaySushis(allSushis);
       
      } else {
        console.error('Erreur lors de la récupération des boîtes.');
      }
    };
*/
  
  // Fonction pour filtrer les sushis par type
  window.filterSushis = (type) => {
    console.log(`Filtrage des sushis par type : ${type}`);
    const filteredSushis = allSushis.filter((sushi) => sushi.type === type);
    console.log(filteredSushis);
    displaySushis(filteredSushis);
  };
  
  main.innerHTML = bloc1;
  menu();
 // getBoxes();


  window.afficher = async () => {
    document.getElementById('modal').style.display = 'block';
  };

  window.creationBox = async () => {
    const boiteImage = document.querySelector('.boxnew img');

    // Ajoutez la classe 'shake' à l'image de la boîte pour l'animation
    boiteImage.classList.add('shake');

    // Supprimez la classe 'shake' après 500 ms (0.5s)
    setTimeout(() => {
      boiteImage.classList.remove('shake');
    }, 500);

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch('http://localhost:3000/sushis/creationBox', options);
    console.log(response.status);

    if (response.ok) {
      console.log('ok');
    } else {
      console.error('Erreur lors de l ajout à la box.');
    }
  };

 /* window.creationBox = async () => {
    console.log(' ! CREATION BOX ! ');

    try {
      const response = await fetch('http://localhost:3000/sushis/creationBox');
      console.log('Response status:', response.status);

      if (response.ok) {
        const responseData = await response.json();
        console.log('Response data:', responseData);
      } else {
        console.error('Errorcreating the box.');
      }
    } catch (error) {
      console.error('Fetch error:', error.message);
    }
  };
  */
/*
  window.ajouterSushi = async (idSushi) => {
    console.log(' ! AJOUT SUSHI ! ');
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'sushi-id': idSushi,
      },
    };

    try {
      const response = await fetch('http://localhost:3000/sushis/ajouterSushi', options);
      console.log('Response status:', response.status);

      if (response.ok) {
        console.log('Sushi added successfully');
        console.log(idSushi);
        const responseData = await response.json();
        console.log('Response data:', responseData);
      } else {
        console.error('Error adding sushi to the box.');
      }
    } catch (error) {
      console.error('Fetch error:', error.message);
    }
  };
*/



};

export default CreationBox;
