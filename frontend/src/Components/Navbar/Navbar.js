// eslint-disable-next-line no-unused-vars
import { Navbar as BootstrapNavbar } from 'bootstrap';
import logo from '../../img/logo.jpg';
import { isAuthenticated } from '../../utils/auth';

/**
 * Render the Navbar which is styled by using Bootstrap
 * Each item in the Navbar is tightly coupled with the Router configuration :
 * - the URI associated to a page shall be given in the attribute "data-uri" of the Navbar
 * - the router will show the Page associated to this URI when the user click on a nav-link
 * 
 * 
 * 
 * <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16"><path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/><path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/></svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16"><path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>
  
 * 
 * 
 * <a class="navbar-brand" href="#">Add your brand here</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
 * 
 */



const Navbar = () => {
  const navbarWrapper = document.querySelector('#navbarWrapper');
  const navbar = `

  <div id="headerLogo">
    <img id="imgHeader" src="${logo}" alt="" style="width:15%; height:auto"></a>
    <button id="connexion" href="#" data-uri="/connexion">Se connecter</button>
    <button id="inscription" href="#" data-uri="/inscription">S'inscrire</button> 
    </div>

  <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #343A40;">
        <div class="container-fluid">
          
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#" data-uri="/">Accueil</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" data-uri="/menu">Menu</a>
              </li>  
              <li class="nav-item">
                <a class="nav-link" href="#" data-uri="/profil">Mon profil</a>
              </li>                       
            </ul>
          </div>
        </div>
      </nav>
  `;
  const navbarAuth = `

  <div id="headerLogo">
    <img id="imgHeader" src="${logo}" alt="" style="width:15%; height:auto"></a>
    <button id="connexion" href="#" data-uri="/deconnexion">Se deconnecter</button>
    </div>

  <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #343A40;">
        <div class="container-fluid">
          
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#" data-uri="/">Accueil</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" data-uri="/menu">Menu</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" data-uri="/creationBox">Création box</a>
              </li>  
              <li class="nav-item">
                <a class="nav-link" href="#" data-uri="/profil">Mon profil</a>
              </li>                       
            </ul>
          </div>
        </div>
      </nav>
  `;
  navbarWrapper.innerHTML = isAuthenticated() ? navbarAuth: navbar;
};

export default Navbar;
