import royalBox from '../../img/sushiRoyalBox.png'

const CreationBox = () => {
  const main = document.querySelector('main');

  const bloc1= `
    <div class="menu">
      <div class="filter">
        <div class="filter-card">
          <a href=# >MAKI</a>
        </div>  

        <div class="filter-card">
         <a href=# >CALIFORNIA ROLL</a>
        </div> 

        <div class="filter-card">
          <a href=# >SAUMON ROLL</a>
        </div> 

        <div class="filter-card">
          <a href=# >CRUSTY</a>
        </div> 

        <div class="filter-card">
          <a href=# >NIGIRI</a>
        </div> 

        <div class="filter-card">
          <a href=# >NOS BOXES</a>
        </div> 
       
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
    </div>
    `

    main.innerHTML = bloc1;
};

export default CreationBox;