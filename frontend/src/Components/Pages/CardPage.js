import royalBox from '../../img/sushiRoyalBox.png'

import { getAuthenticatedUser } from '../../utils/auth';








const Card = () => {
    // eslint-disable-next-line no-unused-vars
    const main = document.querySelector('main');

    const bloc1 = `
    <section class="h-100" style="background-color: #eee;">
  <div class="container h-100 py-5">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-10">

        <div class="d-flex justify-content-center align-items-center mb-4">
          <h3 class="fw-normal mb-0 text-black">MON PANIER</h3>
        </div>

        <div class="myCard">
        <div class="card rounded-3 mb-4">
        <div class="card-body p-4">
          <div class="row d-flex justify-content-between align-items-center">
            <div class="col-md-2 col-lg-2 col-xl-2">
              <img
                src="${royalBox}"
                class="img-fluid rounded-3" alt="Box">
            </div>
            <div class="col-md-3 col-lg-3 col-xl-3">
              <p class="lead fw-normal mb-2">Box de sushi personnalisé</p>
             
            </div>
            <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
              <button class="btn btn-link px-2"
                onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                <i class="fas fa-minus"></i>
              </button>
  
              <input id="form1" min="0" name="quantity" value="2" type="number"
                class="form-control form-control-sm" />
  
              <button class="btn btn-link px-2"
                onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                <i class="fas fa-plus"></i>
              </button>
            </div>
            <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
              <h5 class="mb-0">25€</h5>
            </div>
            <div class="col-md-1 col-lg-1 col-xl-1 text-end">
              <a href="#" class="text-danger"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
              <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"></path>
            </svg></a>
            </div>
          </div>
        </div>
      </div>
        </div>


        <div class="card">
            
          <div class="card-body d-flex justify-content-end align-items-end">
            <p class="lead fw-normal">Total:25€ </p>

            <form action="http://localhost:8080/payment" method="get">
                <button type="submit" class="btn btn-dark btn-block btn-lg " > Procéder au paiement</button>
            </form> 
            
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
        
    `

    const displayArticles = (myArticles) => {
      const myCard = document.getElementsByClassName('myCard');

      const panier = document.createElement('div');
        myArticles.forEach(article => {
          panier.innerHTML+=
          `
          <div class="card rounded-3 mb-4">
          <div class="card-body p-4">
            <div class="row d-flex justify-content-between align-items-center">
              <div class="col-md-2 col-lg-2 col-xl-2">
                <img
                  src="${royalBox}"
                  class="img-fluid rounded-3" alt="Box">
              </div>
              <div class="col-md-3 col-lg-3 col-xl-3">
                <p class="lead fw-normal mb-2">Box de sushi personnalisé</p>
               
              </div>
              <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                <button class="btn btn-link px-2"
                  onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                  <i class="fas fa-minus"></i>
                </button>
    
                <input id="form1" min="0" name="quantity" value="2" type="number"
                  class="form-control form-control-sm" />
    
                <button class="btn btn-link px-2"
                  onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                  <i class="fas fa-plus"></i>
                </button>
              </div>
              <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                <h5 class="mb-0">${article.prix_total}</h5>
              </div>
              <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                <a href="#" class="text-danger"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"></path>
              </svg></a>
              </div>
            </div>
          </div>
        </div>
          `
        });
        myCard.appendChild(panier);
        main.appendChild(myCard);
        
    };


    const fetchOrders = async () => {
      try {
        const userId = getAuthenticatedUser();
        const options = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'User-Id': userId,
          },
        };
    
        const response = await fetch('http://localhost:3000/sushis/commande', options);
    
        console.log(response.status);
    
        if (response.ok) {
          const orders = await response.json();
          console.log('Orders from server:', orders);
          displayArticles(orders);

        } else {
          throw new Error('Erreur lors de la récupération des commandes depuis le serveur');
        }
      } catch (error) {
        console.error('Erreur:', error.message);
      }
    };


    main.innerHTML = bloc1;
    fetchOrders();

  };
  
  export default Card;


