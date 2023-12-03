// eslint-disable-next-line no-unused-vars
import { Navbar as BootstrapNavbar } from 'bootstrap';
import logo from '../../img/logo.jpg';
import { isAuthenticated } from '../../utils/auth';




const Navbar = () => {
  const navbarWrapper = document.querySelector('#navbarWrapper');
  const navbar = `

  <div id="headerLogo" >
  <nav class="navbar navbar-expand-lg style="background-color: #e3f2fd;"">
  <div class="container-fluid">
  
  <img src="${logo}" alt="Logo" width="170" height="85" class="d-inline-block align-text-top " id="imgHeader">

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <button id="connexion" href="#" data-uri="/connexion"> Se connecter</button> 
        <button id="inscription" href="#" data-uri="/inscription">S'inscrire</button>
      </div>
      </div>
    </div>
  </div>
</nav>
  
    </div>

  <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #343A40;">
        <div class="container-fluid">
          <div class="navbar-nav" >
            <a class="nav-item nav-link mx-3" aria-current="page" href="#" data-uri="/">Accueil</a>
            <a class="nav-item nav-link mx-3" href="#" data-uri="/menu">Menu</a>
            <a class="nav-item nav-link mx-3" href="#" ></a>
            <a class="nav-item nav-link mx-3" href="#"></a>
          </div>
        </div>
    </nav>
  `;
  const navbarAuth = `

<<<<<<< HEAD
  <div id="headerLogo" >
  <nav class="navbar navbar-expand-lg style="background-color: #e3f2fd;"">
  <div class="container-fluid">
  <a class="navbar-brand justify-content-center" href="#">
  <img src="${logo}" alt="Logo" width="120" height="95" class="d-inline-block align-text-top ">
</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <button id="connexion" href="#" data-uri="/card"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
      </svg></button> 
        <button id="inscription" href="#" data-uri="/deconnexion">Se deconnecter</button>
      </div>
      </div>
    </div>
  </div>
</nav>
  
=======
  <div id="headerLogo">
    <img id="imgHeader" src="${logo}" alt="" style="width:15%; height:auto"></a>
    <button id="connexion" href="#" data-uri="/logout">Se deconnecter</button>
>>>>>>> ff1972efa42abfbc477306a5d07d516d86711483
    </div>

  <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #343A40;">
        <div class="container-fluid">
          
        <div class="navbar-nav ">
        <a class="nav-item nav-link mx-3" aria-current="page" href="#" data-uri="/">Accueil</a>
        <a class="nav-item nav-link mx-3" href="#" data-uri="/menu">Menu</a>
        <a class="nav-item nav-link mx-3" href="#" data-uri="/profil" > Mon profil</a>
        <a class="nav-item nav-link mx-3" href="#"> </a>
      </div>
        </div>
      </nav>
  `;
  navbarWrapper.innerHTML = isAuthenticated() ? navbarAuth: navbar;
};

export default Navbar;
