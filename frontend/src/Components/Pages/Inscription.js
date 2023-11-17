import sushiLogo from '../../img/logoSushi.png'
import baguettes from '../../img/baguettes.png'
import sushis from '../../img/someSushis.png'

const Inscription = () => {
    const main = document.querySelector('main');
    const bloc1= `
    <!-- Section: Design Block -->
   
  
  <section class="text-center">
  <div class="formInscriptionConnexion">
  <h2 class="titleInscriptionConnexionPage">S'inscrire <img src="${sushiLogo}" alt="" style="width:10%; height:auto"></h2>
  <img id="baguette" src="${baguettes}" alt="" style="width:30%; height:auto">


    <form>
            <!-- 2 column grid layout with text inputs for the first and last names -->
            <div class="row">
              <div class="col-md-6 mb-4">
                <div class="form-outline">
                  <input type="text" id="form3Example1" class="form-control" />
                  <label class="form-label" for="form3Example1">Prénom</label>
                </div>
              </div>
              <div class="col-md-6 mb-4">
                <div class="form-outline">
                  <input type="text" id="form3Example2" class="form-control" />
                  <label class="form-label" for="form3Example2">Nom</label>
                </div>
              </div>
            </div>

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
              Inscription
            </button>

            </div>
            </section>
          </form>

          <img id="someSushis" src="${sushis}" alt="" style="width:15%; height:auto">
    `
    main.innerHTML = bloc1;
  };
  
  export default Inscription;