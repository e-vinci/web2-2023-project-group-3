// import royalBox from '../../img/sushiRoyalBox.png'
import sushi1 from "../../img/sushis/1.png"

const Menu = () => {
    const main = document.querySelector('main');

    const bloc1= `
    <div class="text-center" style="padding-top: 2%; padding-bottom: 2%; background-color: #151313;">
      <h1 style="font-weight:700; color: #C69751;" >FAITES VOTRE CHOIX!</h1>
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
  };
  
  export default Menu;