const Menu = () => {
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
    `

    main.innerHTML = bloc1;
  };
  
  export default Menu;