/* eslint-disable no-plusplus */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import SplineLoader from '@splinetool/loader';
import imgBloc1 from '../../img/bloc1.png';
import sushi1 from '../../img/sushis/1.png';
import sushi2 from '../../img/sushis/2.png';
import sushi3 from '../../img/sushis/3.png';
import sushi4 from '../../img/sushis/4.png';
import box from '../../img/sushis/box.jpg';
import about from '../../img/about.png';



  function render3d(){
  
    // camera
    const camera = new THREE.OrthographicCamera(window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2,  -50000, 50000);
    camera.position.set(0, 0, 1000);
    camera.quaternion.setFromEuler(new THREE.Euler(0, 0, 0));
    
    // scene
    const scene = new THREE.Scene();
    
    // spline scene
    const loader = new SplineLoader();
    loader.load(
      'https://prod.spline.design/C319pzDj3vaYbLmx/scene.splinecode',
      (splineScene) => {
        scene.add(splineScene);
      }
    );
    
    // renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setAnimationLoop(animate);
    document.body.appendChild(renderer.domElement);
    
    // scene settings
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    
    scene.background = new THREE.Color('#343a40');
    renderer.setClearAlpha(1);
    
    // orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.125;
    
    window.addEventListener('resize', onWindowResize);
    function onWindowResize() {
      camera.left = window.innerWidth / - 2;
      camera.right = window.innerWidth / 2;
      camera.top = window.innerHeight / 2;
      camera.bottom = window.innerHeight / - 2;
      camera.updateProjectionMatrix();
   
    }
    
    function animate(time) {
      controls.update();
      renderer.render(scene, camera);
    }
    
}



const HomePage = () => {

const main = document.querySelector('main');
  const bloc1 = `

  

  <div id="bloc1">
    <img id="" src="${imgBloc1}" alt="" style="width:100%; height:auto"></a>
  </div>
 
   `



  const bloc2 = `
  <div class="transition transition-1"></div>
  <div id="bloc2">
  <div class="slider">
    <div class="title">
    <p>NOTRE MENU</p>
        
    </div>
    <div class="images">
    
    <div class="container">
      <div class="row">

              <div class="col">
                <div class="item " >
                  <img class="itemImg1" src="${sushi1}">
                </div>   
              </div>

              <div class="col">   
                <div class="item " >
                  <img class="itemImg2" src="${sushi2}">
                </div>   
              </div>

              <div class="col">
                <div class="item " >
                  <img class="itemImg3" src="${sushi3}">
                </div>
              </div>

              <div class="col"> 
                <div class="item " >
                  <img class="itemImg4" src="${sushi4}">
                </div>
              </div>
      </div>

    </div>
    
    <div class="content">
    
                
     

        <div class="row">
            <div class="col">
             <div class="item1">
            <h1> MAKIS</h1>

            <form action="http://localhost:8080/menu?maki" method="get">
              <button type="submit">VOIR PLUS</button>
            </form>   
        </div>   
            </div>

            <div class="col">
             <div class="item2">
            <h1> CALIFORNIA ROLLS</h1>
         
            <form action="http://localhost:8080/menu?california" method="get">
              <button type="submit">VOIR PLUS</button>
            </form>   
        </div>   
            </div>

            <div class="col">
              <div class="item3">
            <h1> SALMON ROLLS</h1>
           
            <form action="http://localhost:8080/menu?salmon" method="get">
              <button type="submit">VOIR PLUS</button>
            </form>   
        </div>  
            </div>

            <div class="col">
               <div class="item4">
            <h1> CRUSTYS</h1>
          
            <form action="http://localhost:8080/menu?crusty" method="get">
              <button type="submit">VOIR PLUS</button>
            </form>   
        </div>  
            </div>

         </div>  
        </div>



        
        
       
        
    </div>

</div>

  </div>
  
 
  `

  const bloc3 = `
  <div id="bloc3">
    <div class="title3">
    <p>VOTRE BOX</p>
    </div>

    <div class="justify-content-center">
           
    
    <div id="cardBox">
      <div class="card mb-3" >
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${box}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <p id="cardBoxContent2">Vous souhaitez personnaliser votre box en choisissant vos propres sushis ? 
              C’est possible chez nous. Composez votre délicieux repas </p>
              
            </div>

            <form action="http://localhost:8080/creationBox" method="get">
               <button id="buttonBox" href="#" data-uri="/creationBox" >Je crée ma box</button>
           </form>   
            
          </div>
       </div>
    </div>
    </div>
  </div>
  `

  const bloc4 = ` 


  
  <div id="bloc4">
  <div class="title4">
  <p class="hr-lines">À PROPOS DE NOUS</p>
  </div>
  
<div class="bg-grey py-5">
<div class="container py-5">
  <div class="row align-items-center mb-5">
    <div class="col-lg-6 order-2 order-lg-1"><i class="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
      <h2 class="font-weight-light">Vous êtes entre de bonnes mains.</h2>
      <p class="font-italic text-muted ">Notre professionalisme et notre expérience acquis 
      fait de nous une entreprise hors du commun. 
      Notre objectif est d'aider le client en lui offrant 
      des services de qualités tout en gardant notre touche d'originalité.</p>

      <form action="http://localhost:8080/menu?box" method="get">
       <button href="#" class="btn btn-dark px-5 rounded-pill shadow-sm">Découvrez les boxs confectionnés par notre équipe</button>
      </form>   
     
    
    
    </div>
    <div class="col-lg-6 px-5 mx-auto order-1 order-lg-2"><img src="${about}" alt="" class="img-fluid mb-lg-0" style=" border-radius: 40px 0px 40px 0px;"></div>
  </div>
</div>
</div>   
    </div>
  </div>


  ` 
  main.innerHTML=bloc1 + bloc2 + bloc3 + bloc4;

};
render3d();



export default HomePage;
