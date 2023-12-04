// eslint-disable-next-line import/no-named-as-default
import HomePage from '../Pages/HomePage';
import Menu from'../Pages/Menu';
import CreationBox from'../Pages/CreationBox';
import Profil from'../Pages/Profil';
import Inscription from '../Pages/Inscription';
import Connexion from '../Pages/Connexion';
import Users from '../Pages/UsersPageAdmin';
import Paiement from '../Pages/Paiement';
import Card from '../Pages/CardPage';
import Logout from '../Logout/Logout';


const routes = {
  '/': HomePage,
  '/connexion': Connexion,
  '/inscription': Inscription,
  '/menu': Menu,
  '/creationBox': CreationBox,
  '/profil': Profil,
  '/users' : Users,
  '/paiement' : Paiement,
  '/card': Card,
  '/logout': Logout,
};

export default routes;
