import avatar from '../../img/avatar.png'

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
                          <p class="">Prénom</p>
                          <h6 class="text-muted f-w-400">Email: rntng@gmail.com</h6>   
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
  };
  
  export default Profil;