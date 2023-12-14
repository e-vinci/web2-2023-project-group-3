import avatar from '../../img/avatar.png'
// setAuthenticatedUser
import { getAuthenticatedUser } from '../../utils/auth'


  const profile = async () => {
  try {
    const authenticatedUser = getAuthenticatedUser();

    if (!authenticatedUser || !authenticatedUser.token) {
      throw new Error("Le token d'accès n'est pas disponible.");
    }

    const response = await fetch(`http://localhost:3000/users/profile/${authenticatedUser.email}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${authenticatedUser.token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Erreur lors de la récupération du profil utilisateur.');
    }

    const user = await response.json();
    
    const userEmailClient = user.email;
    const userFirstnameClient = user.prenom;
    const userDateOfOrderClient = user.date_commande;

    console.log('Données utilisateur :', userEmailClient, userFirstnameClient, userDateOfOrderClient);

    document.getElementById('emailPlaceholder').textContent = userEmailClient;
    document.getElementById('firstnamePlaceholder').textContent = userFirstnameClient;
    document.getElementById('userDateOfOrderClientPlaceHolder').textContent = userDateOfOrderClient;
  } catch (error) {
    console.log(error);
  }
};

const Profil = async () => {
  const main = document.querySelector('main');
  const bloc1 = ` 
    
  <div class="profil">
      <div class="row m-l-0 m-r-0">
          <div class="col-sm-4 bg-c-lite-green user-profile ">
              <div class="profilAvatar">
                <div class="card-block text-center">
                    <div class="m-b-25">
                        <img src="${avatar}" class="img-radius" alt="User-Profile-Image">
                    </div>

                    <div class="infos">
                        <p class="" id="userFirstnameClient"> <span id="firstnamePlaceholder"> </span> </p>
                        <h6 class="text-muted f-w-400" id="userEmailClient"> Email: <span id="emailPlaceholder"> </span></h6>

                      </div>
                      <button id="logOut" href="#" data-uri="/connexion">Se déconnecter</button>
                  </div> 
                </div>
            </div>
            
            <div class="col-sm-4">
                <div class="lastCommandes">
                    <h6 class="">ANCIENNES COMMANDES</h6>
                    <p class="" id="userDateOfOrderClient">
                    Commande du <span id="userDateOfOrderClientPlaceHolder"></span>
                </p>
                </div>
            </div>
        </div>
   
    </div>
                    </div>
                    <button id="logOut" href="#" data-uri="/connexion">Se connecter</button>
                </div> 
              </div>
          </div>
          
          <div class="col-sm-4">
              <div class="lastCommandes">
                  <h6 class="">ANCIENNES COMMANDES</h6>
                  <p class="" id="userDateOfOrderClient">
                  Commande du <span id="userDateOfOrderClientPlaceHolder"></span>
              </p>
              </div>
          </div>
      </div>
 
  </div>

  `

  main.innerHTML = bloc1;
  await profile();
};

export default Profil; 
