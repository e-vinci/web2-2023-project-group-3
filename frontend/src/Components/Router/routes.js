import HomePage from '../Pages/HomePage';
import NewPage from '../Pages/NewPage';
import Menu from'../Pages/Menu';
import CreationBox from'../Pages/CreationBox';
import Profil from'../Pages/Profil';


const routes = {
  '/': HomePage,
  '/menu': Menu,
  '/creationBox': CreationBox,
  '/profil': Profil,

  '/new': NewPage,
};

export default routes;
