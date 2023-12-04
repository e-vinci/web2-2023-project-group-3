import avatar from '../../img/avatar.png'
// setAuthenticatedUser
import { getAuthenticatedUser } from '../../utils/auth'

const authenticatedUser = getAuthenticatedUser();

// if (!authenticatedUser || !authenticatedUser.token) {
  // throw new Error('Le token d` accès n `est pas disponible. ');
 // }
 

  function profile () {
     fetch('http://localhost:3000/users/profile/:id',{
      headers: {
        'Content-Type' : 'application/json',
        'Authorization' : `${authenticatedUser.token}` ,
      },
    })
    .then((response) => response.json ()  )
    .then(() => {
      const userEmailClient = authenticatedUser.email;
     // const userFirstnameClient = authenticatedUser.prenom;
      document.getElementById('emailPlaceholder').textContent = userEmailClient;
      
    //  document.getElementById('firstnamePlaceholder').textContent = userFirstnameClient;
    })
    .catch((error) => {
      console.log(error);
    })
  } 
  
/* const fetchProfile = async () => {
    try {
      
      const authenticatedUser = getAuthenticatedUser();

      if (!authenticatedUser || !authenticatedUser.token) {
        throw new Error('Le token d` accès n `est pas disponible. ');
      }

      const response = await fetch('http://localhost:3000/users/profile/:id', {  
       // method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : `${authenticatedUser.token}` ,
      
        },
        // body: JSON.stringify(data) // Si vous utilisez une méthode GET, vous n'avez généralement pas de corps (body) dans la requête
      });
      if(response.ok){
      const userEmailClient = authenticatedUser.email;
      document.getElementById('emailPlaceholder').textContent = userEmailClient;
      }
      
      // setAuthenticatedUser(authenticatedUser);
   
  
      // Mettez à jour le contenu HTML avec l'e-mail de l'utilisateur

    } catch (error) {
      console.error('Erreur, cet email n existe pas :', error);
    }
  }; */
  
// await fetchProfile();
  

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
                          <p class="text-muted f-w-400" id="userFirstnameClient"> <span id="firstnamePlaceholder"> ?</span> </p>
                          <h6 class="text-muted f-w-400" id="userEmailClient"> Email: <span id="emailPlaceholder"> ?</span></h6>

                      </div>
                      <button id="logOut" href="#" data-uri="/connexion">Se connecter</button>
                  </div> 
                </div>
            </div>
            
            <div class="col-sm-4">
                <div class="lastCommandes">
                    <h6 class="">ANCIENNES COMMANDES</h6>
                </div>
            </div>
        </div>
   
    </div>

    `
    main.innerHTML = bloc1;
    profile();
  };
  
 export default Profil;
  