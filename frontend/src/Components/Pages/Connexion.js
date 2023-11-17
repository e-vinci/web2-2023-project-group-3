import sushiLogo from '../../img/logoSushi.png'
import baguettes from '../../img/baguettes.png'
import sushis from '../../img/someSushis.png'


const Connexion = () => {
    // eslint-disable-next-line no-unused-vars
    const main = document.querySelector('main');

    const bloc1 = `
    <!-- Section: Design Block -->
   
  
    <section class="text-center">
    <div class="formInscriptionConnexion">
    <h2 class="titleInscriptionConnexionPage">Se connecter <img src="${sushiLogo}" alt="" style="width:10%; height:auto"></h2>
    
    <img id="baguette" src="${baguettes}" alt="" style="width:30%; height:auto">

      <form>
              <!-- 2 column grid layout with text inputs for the first and last names -->
         
  
              <!-- Email input -->
              <div class="form-outline mb-4">
                <input type="email" id="form3Example3" class="form-control" />
                <label class="form-label" for="form3Example3">Email</label>
              </div>
  
              <!-- Password input -->
              <div class="form-outline mb-4">
                <input type="password" id="form3Example4" class="form-control" />
                <label class="form-label" for="form3Example4">Mot de passe</label>
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

  };
  
  export default Connexion;