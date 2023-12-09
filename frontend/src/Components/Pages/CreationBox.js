import royalBox from '../../img/sushiRoyalBox2.png'
import sushi1 from '../../img/sushis/1.png'

const CreationBox = () => {
  const main = document.querySelector('main');

  const bloc1= `
  

    <div id="cardBox2">
      <div class="card" style="width: 100%; ">
        <div class="row ">
            <div class="col-md-3">
              <img src="${royalBox}" class="img-fluid rounded-start" alt="...">
            </div>
              <div class="col">
                  <div class="card-body">
                    <div id="cardBoxContent">

                                <div class="cardSushiInBox">
                                      
                                <div class="card-image">
                                        <img src="${sushi1}" width="100"> 
                                </div>  
                  
                                <div class="">
                                    <span></span> 
                                    <h5 class="mb-0">Maki Saumon</h5> 
                  
                                    <div class="price">
                                        <span>7.99€</span>
                                    </div>
                
                                </div>                    
                                </div>
                                <div class="cardSushiInBox">
                                      
                                <div class="card-image">
                                        <img src="${sushi1}" width="100"> 
                                </div>  
                  
                                <div class="">
                                    <span></span> 
                                    <h5 class="mb-0">Maki Saumon</h5> 
                  
                                    <div class="price">
                                        <span>7.99€</span>
                                    </div>
                
                                </div>                    
                                </div>
                                <div class="cardSushiInBox">
                                      
                                <div class="card-image">
                                        <img src="${sushi1}" width="100"> 
                                </div>  
                  
                                <div class="">
                                    <span></span> 
                                    <h5 class="mb-0">Maki Saumon</h5> 
                  
                                    <div class="price">
                                        <span>7.99€</span>
                                    </div>
                
                                </div>                    
                                </div>
                                <div class="cardSushiInBox">
                                      
                                <div class="card-image">
                                        <img src="${sushi1}" width="100"> 
                                </div>  
                  
                                <div class="">
                                    <span></span> 
                                    <h5 class="mb-0">Maki Saumon</h5> 
                  
                                    <div class="price">
                                        <span>7.99€</span>
                                    </div>
                
                                </div>                    
                                </div> 
                    
                    
              

            <button id="buttonBox2" href="#" data-uri="/creationBox" >Ajouter au panier</button>
            <button id="buttonBox3" href="#" data-uri="/creationBox" >Annuler</button>
            </div>    </div> 
            </div>
        </div>
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


                  <div class="mt-3 d-flex justify-content-between align-items-center">
                      <button class="btn text-uppercase btn-sm details" style="background-color: #C69751;" >Details</button>
                      <div class="d-flex flex-row">
                          <span class="cart"><i class="fa fa-shopping-cart">+</i></span>  
                      </div>
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


                  <div class="mt-3 d-flex justify-content-between align-items-center">
                      <button class="btn text-uppercase btn-sm details" style="background-color: #C69751;" >Details</button>
                      <div class="d-flex flex-row">
                          <span class="cart"><i class="fa fa-shopping-cart">+</i></span>  
                      </div>
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


                  <div class="mt-3 d-flex justify-content-between align-items-center">
                      <button class="btn text-uppercase btn-sm details" style="background-color: #C69751;" >Details</button>
                      <div class="d-flex flex-row">
                          <span class="cart"><i class="fa fa-shopping-cart">+</i></span>  
                      </div>
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


              <div class="mt-3 d-flex justify-content-between align-items-center">
                  <button class="btn text-uppercase btn-sm details" style="background-color: #C69751;" >Details</button>
                  <div class="d-flex flex-row">
                      <span class="cart"><i class="fa fa-shopping-cart">+</i></span>  
                  </div>
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


                  <div class="mt-3 d-flex justify-content-between align-items-center">
                      <button class="btn text-uppercase btn-sm details" style="background-color: #C69751;" >Details</button>
                      <div class="d-flex flex-row">
                          <span class="cart"><i class="fa fa-shopping-cart">+</i></span>  
                      </div>
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


                <div class="mt-3 d-flex justify-content-between align-items-center">
                    <button class="btn text-uppercase btn-sm details" style="background-color: #C69751;" >Details</button>
                    <div class="d-flex flex-row">
                        <span class="cart"><i class="fa fa-shopping-cart">+</i></span>  
                    </div>
                </div>
            </div>                    
      </div>
    </div>
    `

    main.innerHTML = bloc1;
};

export default CreationBox;