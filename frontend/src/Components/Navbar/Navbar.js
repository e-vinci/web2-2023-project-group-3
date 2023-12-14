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

  <div id="headerLogo" >
  <nav class="navbar navbar-expand-lg style="background-color: #e3f2fd;"">
  <div class="container-fluid">
  
  <img src="${logo}" alt="Logo" width="170" height="85" class="d-inline-block align-text-top " id="imgHeader">

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">

      <button type="button" id="panier" href="#" data-uri="/card">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="16" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z"/>
      </svg>
      Panier 
     
    </button>
    <span class="quantity">0 </span>

        <button id="inscription" href="#" data-uri="/logout"> Se deconnecter</button> 
      
      </div>
      </div>
    </div>
  </div>
</nav>
  
    </div>

  <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #343A40;">
        <div class="container-fluid">
          
        <div class="navbar-nav ">
        <a class="nav-item nav-link mx-3" aria-current="page" href="#" data-uri="/">Accueil</a>
        <a class="nav-item nav-link mx-3" href="#" data-uri="/menu">Menu</a>
        <a class="nav-item nav-link mx-3" href="#" data-uri="/creationBox">Création Box</a>
        <a class="nav-item nav-link mx-3" href="#" data-uri="/profil" > Mon profil</a>
        <a class="nav-item nav-link mx-3" href="#"> </a>
      </div>
        </div>
      </nav>
  `;
  navbarWrapper.innerHTML = isAuthenticated() ? navbarAuth: navbar;
};

export default Navbar;
