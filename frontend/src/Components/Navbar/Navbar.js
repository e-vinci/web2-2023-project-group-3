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
        <button id="connexion" href="#" data-uri="/logout"> Se deconnecter</button> 
      
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
        <a class="nav-item nav-link mx-3" href="#" data-uri="/profil" > Mon profil</a>
        <a class="nav-item nav-link mx-3" href="#"> </a>
      </div>
        </div>
      </nav>
  `;
  navbarWrapper.innerHTML = isAuthenticated() ? navbarAuth: navbar;
};

export default Navbar;
