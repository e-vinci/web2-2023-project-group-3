// eslint-disable-next-line import/no-named-as-default
import HomePage from '../Pages/HomePage';
import Menu from'../Pages/Menu';
import CreationBox from'../Pages/CreationBox';
import Profil from'../Pages/Profil';
import Inscription from '../Pages/Inscription';
import Connexion from '../Pages/Connexion';
import Admin from '../Pages/AdminPage';
import Payment from '../Pages/Payment';
import Card from '../Pages/CardPage';
import Thanks from '../Pages/ThanksPage';
import Logout from '../Logout/Logout';



const routes = {
  '/': HomePage,
  '/connexion': Connexion,
  '/inscription': Inscription,
  '/menu': Menu,
  '/creationBox': CreationBox,
  '/profil': Profil,
  '/admin' : Admin,
  '/payment' : Payment,
  '/card': Card,
  '/logout': Logout,
  '/thanks': Thanks,
 
};

export default routes;
