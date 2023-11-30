import HomePage from '../Pages/HomePage';
import NewPage from '../Pages/NewPage';
import Menu from'../Pages/Menu';
import CreationBox from'../Pages/CreationBox';
import Profil from'../Pages/Profil';
import Inscription from '../Pages/Inscription';
import Connexion from '../Pages/Connexion';
import Users from '../Pages/UsersPageAdmin';
import Paiement from '../Pages/Paiement';



const routes = {
  '/': HomePage,
  '/connexion': Connexion,
  '/inscription': Inscription,
  '/menu': Menu,
  '/creationBox': CreationBox,
  '/profil': Profil,
  '/users' : Users,
  '/paiement' : Paiement,
  '/new': NewPage,
};

export default routes;
