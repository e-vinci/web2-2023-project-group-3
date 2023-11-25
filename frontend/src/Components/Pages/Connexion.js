import sushiLogo from '../../img/logoSushi.png'
import baguettes from '../../img/baguettes.png'
import sushis from '../../img/someSushis.png'
import Navbar from '../Navbar/Navbar';
import Navigate from '../Router/Navigate';
import { setAuthenticatedUser } from '../../utils/auth';

const validateForm = () => {
  const form = document.getElementById('connexionForm');

  form.querySelectorAll('input').forEach((input) => {
    if (!input.value) {
      input.classList.add('is-invalid');
    }
    else{
      input.classList.remove('is-invalid');
    }
  });
};

const handleSubmit = async (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const mdp = document.getElementById('mdp').value;
  if (!email || !mdp) {
    validateForm();
    return; 
  }
  const data = {
    email,
    mdp
  };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
  const reponse = await fetch('http://localhost:3000/auths/login',options);
  const errorMessage = document.getElementById('error-message');
  if (reponse.ok) {
    const authenticatedUser = await reponse.json();
    setAuthenticatedUser(authenticatedUser);
    Navbar();
    Navigate('/');
  }else{
    const errorData = await reponse.json()
    errorMessage.innerHTML = errorData.message;
    errorMessage.style.display = 'block';
  }
};

const Connexion = () => {
    // eslint-disable-next-line no-unused-vars
    const main = document.querySelector('main');

    const bloc1 = `
    <!-- Section: Design Block -->
   
  
    <section class="text-center">
    <div class="formInscriptionConnexion">
    <h2 class="titleInscriptionConnexionPage">Se connecter <img src="${sushiLogo}" alt="" style="width:10%; height:auto"></h2>
    
    <img id="baguette" src="${baguettes}" alt="" style="width:30%; height:auto">

      <form id="connexionForm">
              <!-- 2 column grid layout with text inputs for the first and last names -->
              <div id="error-message" class="alert alert-danger" role="alert" style="display: none;"></div>
  
              <!-- Email input -->
              <div class="form-outline mb-4">
                <input type="email" id="email" class="form-control" />
                <label class="form-label" for="email">Email</label>
              </div>
  
              <!-- Password input -->
              <div class="form-outline mb-4">
                <input type="password" id="mdp" class="form-control" />
                <label class="form-label" for="mdp">Mot de passe</label>
              </div>
  
              <!-- Submit button -->
              <button type="submit" class="goldButton">
                Connexion
              </button>

              <p> Pas encore membre? Inscrivez vous <a href="">ici</a></p>

  
              </div>
              </section>
            </form>
        <img id="someSushis" src="${sushis}" alt="" style="width:15%; height:auto">
    `
    main.innerHTML = bloc1;
    const connexionForm = document.getElementById('connexionForm');
    connexionForm.addEventListener('submit', handleSubmit);
  };
  
  export default Connexion;