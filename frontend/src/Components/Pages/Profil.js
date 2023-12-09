import avatar from '../../img/avatar.png'
// setAuthenticatedUser
import { getAuthenticatedUser } from '../../utils/auth'

  function profile () {
    const authenticatedUser = getAuthenticatedUser();


 if (!authenticatedUser || !authenticatedUser.token ) {
   throw new Error('Le token d` accès n `est pas disponible. ');
  }
  // const idClient = authenticatedUser.id; // Assurez-vous que c'est la bonne propriété

 // console.log('ID du client envoyé depuis le frontend :', idClient);

     fetch(`http://localhost:3000/users/profile/${authenticatedUser.email}`,{
      headers: {
        'Content-Type' : 'application/json',
        'Authorization' : `${authenticatedUser.token}` ,
      },
    })
    .then((response) => response.json ())
    .then((user) => {
      console.log('Données reçues depuis l\'API :');
    
      const userEmailClient = user.email;
      const userFirstnameClient = user.prenom;
      const userDateOfOrderClient = user.date_commande;
      document.getElementById('emailPlaceholder').textContent = userEmailClient;
      document.getElementById('firstnamePlaceholder').textContent = userFirstnameClient;
      document.getElementById('userDateOfOrderClientPlaceHolder').textContent = userDateOfOrderClient;

    })
    .catch((error) => {
      console.log(error);
    })
  } 
const Profil = () => {
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
    profile();
  };
  
 export default Profil;
  