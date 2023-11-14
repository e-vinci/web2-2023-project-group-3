import imgBloc1 from '../../img/bloc1.png';


const HomePage = () => {
  const main = document.querySelector('main');

  const bloc1 = `
  <div id="">
    <img id="" src="${imgBloc1}" alt="" style="width:100%; height:auto"></a>
  </div>
  `
  main.innerHTML=bloc1;
};

export default HomePage;
