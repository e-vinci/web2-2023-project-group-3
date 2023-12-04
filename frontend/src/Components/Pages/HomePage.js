/* eslint-disable no-unused-vars */
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import SplineLoader from '@splinetool/loader';
import imgBloc1 from '../../img/bloc1.png';
import sushi1 from '../../img/sushis/1.png';
import sushi2 from '../../img/sushis/2.png';
import sushi3 from '../../img/sushis/3.png';
import box from '../../img/sushis/box.jpg';
import about from '../../img/about.png';






const HomePage = () => {
  
const main = document.querySelector('main');
  const bloc1 = `
  <div id="bloc1">
    <img id="" src="${imgBloc1}" alt="" style="width:100%; height:auto"></a>
  </div>
  

  <div class="canva">
  
  </div>
   `
  /* const camera = new THREE.OrthographicCamera(window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2,  -50000, 50000);
  camera.position.set(0, 0, 1000);
  camera.quaternion.setFromEuler(new THREE.Euler(0, 0, 0));
  
  // scene
  const scene = new THREE.Scene();
  
  // spline scene
  const loader = new SplineLoader();
  loader.load(
    'https://prod.spline.design/NKK52eT7OjU7W8b8/scene.splinecode',
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
  
  scene.background = new THREE.Color('#878480');
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
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  
  function animate() {

    renderer.render(scene, camera);
  } */


  const bloc2 = `
  <div id="bloc2">
  <div class="slider">
    <div class="title">
    <h2 >NOTRE MENU</h2>
        
    </div>
    <div class="images">
        <div class="item active" >
            <img class="itemImg" src="${sushi1}">
        </div>

    </div>
    <div class="content">
        <div class="item active">
            <h1>DES MAKIS</h1>
           
            <button>VOIR PLUS</button>
        </div>
        <div class="item">
            <h1>DES CALIFORNIAS ROLLS</h1>
         
            <button>See more</button>
        </div>
        <div class="item">
            <h1>DES SAUMONS ROLLS</h1>
           
            <button>VOIR PLUS</button>
        </div>
        <div class="item">
            <h1>PRODUCT NAME 4</h1>
          
            <button>See more</button>
        </div>
        <div class="item">
            <h1>PRODUCT NAME 5</h1>
           
            <button>See more</button>
        </div>
        <div class="item">
            <h1>PRODUCT NAME 6</h1>
           
            <button>See more</button>
        </div>
    </div>
  <button id="prev"><</button>
  <button id="next">></button>
</div>

  </div>
  
 
  `

  const bloc3 = `
  <div id="bloc3">
    <div class="title3">
    <h2>VOTRE BOX</h2>
    </div>

    <div id="cardBox">
      <div class="card mb-3" style="max-width: 1200px; ">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${box}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <p id="cardBoxContent">Vous souhaitez personnaliser votre box en choisissant vos propres sushis ? 
              C’est possible chez nous. Composez votre délicieux repas </p>
              
            </div>
            <button id="buttonBox" href="#" data-uri="/creationBox" >Je crée ma box</button>
          </div>
       </div>
    </div>
  </div>
  `
  const bloc4 = `
  <div id="bloc4">
  <div class="title4">
  <h2 class="hr-lines">À PROPOS DE NOUS</h2>
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
      <a href="#" class="btn btn-dark px-5 rounded-pill shadow-sm">Découvrez les boxs confectionnés par notre équipe</a>
    </div>
    <div class="col-lg-6 px-5 mx-auto order-1 order-lg-2"><img src="${about}" alt="" class="img-fluid mb-lg-0" style=" border-radius: 40px 0px 40px 0px;"></div>
  </div>
</div>
</div>

        
    </div>
  </div>
  ` 


  main.innerHTML=bloc1 + bloc2 + bloc3;

  const button = document.getElementById('next')
  // button.addEventListener("click",ShowImages); 
  main.innerHTML=bloc1 + bloc2 + bloc3 + bloc4;
  
};






export default HomePage;
