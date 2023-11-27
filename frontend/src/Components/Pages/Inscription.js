import sushiLogo from '../../img/logoSushi.png'
import baguettes from '../../img/baguettes.png'
import sushis from '../../img/someSushis.png'
import Navbar from '../Navbar/Navbar';
import Navigate from '../Router/Navigate';
import { setAuthenticatedUser } from '../../utils/auth';


const validateForm = () => {
  const form = document.getElementById('inscriptionForm');

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
  event.preventDefault(); // Empêcher le comportement par défaut du formulaire (rechargement de la page)
  const prenom = document.getElementById('prenom').value;
  const nom = document.getElementById('nom').value;
  const adresse = document.getElementById('adresse').value;
  const email = document.getElementById('email').value;
  const mdp = document.getElementById('mdp').value;

  if (!nom || !prenom || !adresse || !email || !mdp) {
    validateForm();
    return;
  }

  const data = {
    prenom,
    nom,
    adresse,
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
  const reponse= await fetch('http://localhost:3000/users/add',options);

  const successMessage = document.getElementById('success-message');
  const errorMessage = document.getElementById('error-message');

  if (reponse.ok) {
    const authenticatedUser = await reponse.json();
    setAuthenticatedUser(authenticatedUser);
    Navbar();
    Navigate('/');
    successMessage.style.display = 'block';
    errorMessage.style.display = 'none';
  } else {
    const errorData = await reponse.json()
    errorMessage.innerHTML = errorData.message;
    errorMessage.style.display = 'block';

    successMessage.style.display = 'none';
  }
};

const Inscription = () => {
    const main = document.querySelector('main');
    const bloc1= `
    <!-- Section: Design Block -->
   
  
  <section class="text-center">
  <div class="formInscriptionConnexion">
  <h2 class="titleInscriptionConnexionPage">S'inscrire <img src="${sushiLogo}" alt="" style="width:10%; height:auto"></h2>
  <img id="baguette" src="${baguettes}" alt="" style="width:30%; height:auto">


    <form id="inscriptionForm">
            <!-- 2 column grid layout with text inputs for the first and last names -->

            <!--  afficher le message de succès -->
            <div id="success-message" class="alert alert-success" role="alert" style="display: none;"></div>

            <!--  afficher le message d'erreur -->
            <div id="error-message" class="alert alert-danger" role="alert" style="display: none;"></div>

            <div class="row">
              <div class="col-md-6 mb-4">
                <div class="form-outline">
                  <input type="text" id="prenom" class="form-control" />
                  <label class="form-label" for="prenom">Prénom</label>
                </div>
              </div>
              <div class="col-md-6 mb-4">
                <div class="form-outline">
                  <input type="text" id="nom" class="form-control" />
                  <label class="form-label" for="nom">Nom</label>
                </div>
              </div>
            </div>

            <!-- Adresse input -->
            <div class="form-outline mb-4">
              <input type="text" id="adresse" class="form-control" />
              <label class="form-label" for="adresse">Adresse</label>
            </div>

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
              Inscription
            </button>

            </div>
            </section>
          </form>

          <img id="someSushis" src="${sushis}" alt="" style="width:15%; height:auto">
    `
    main.innerHTML = bloc1;
    const inscriptionForm = document.getElementById('inscriptionForm');
    inscriptionForm.addEventListener('submit', handleSubmit);
  };

  export default Inscription;