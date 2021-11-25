import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import { images } from './assets/images/images';
import { ChallengeProfile } from './components/Challenge/ChallengeProfile/ChallengeProfile';

import { UIProvider } from './components/Context/UIContext';
import { UserContext} from './components/Context/UserContext';
import { Welcome } from './components/Entrepreneur/Welcome/Welcome';
import Registration from './components/Forms/Registration';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home'
import Foro from './components/Foro/Foro';
import LogIn from './components/LogIn/LogIn';
import Register from './components/Register/Register';
import Start from './components/Start/Start';
import HoldUp from './components/HoldUp/HoldUp';
import { AuthContext } from './components/Context/AuthContext';
import Footer from './components/Footer/Footer';
import FileUpload from './components/Forms/FileUpload';

function App() {
  const {entrepreneur, citizen } = useContext(UserContext);
  const {authEntrepreneur } = useContext(AuthContext);

  //NOTE: si no soy emprendedor pero agrego una url de emprendedor como ciudadano, que me muestre un mensaje que diga que me debo loguear como emprendedor para verla. Pagina 404 o algo asi
  //NOTE: la ruta del ciudadano deberia poder verla siempre, aunque sea emprendedor
  //NOTE: cambiar todos los currentUser al contexto Auth
  
  return (
    <UIProvider>
        <BrowserRouter>
            <NavBar />

            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>

                <Route exact path='/holdup'>
                    <HoldUp />
                </Route>
                <Route exact path='/upload'>
                    <FileUpload />
                </Route>

                <Route exact path='/start'>
                    <Start />
                </Route>

                <Route exact path='/foro'>
                    <Foro />
                </Route>

                <Route exact path='/emprendedor/registro'>
                    <Register />
                </Route>

                <Route exact path='/emprendedor/login'>
                    <LogIn />
                </Route>

                {
                    authEntrepreneur &&
                        <Route exact path='/emprendedor/welcome'>
                            <Welcome />
                        </Route>
                }
                {
                    authEntrepreneur &&
                        <Route exact path='/profile'>
                            <ChallengeProfile/>
                        </Route>
                }
                {
                    (authEntrepreneur && entrepreneur) &&
                        <Route exact path='/emprendedor/registro/emprendimiento'>
                            <Registration 
                                background= '#70af90'
                                border='none'
                                fontColor='#fcf6a0'
                                title={'mi emprendimiento'}
                                image={images.whiteEmprendedores}
                                alt={'make-sense emprendedores'}
                            />
                        </Route> 
                }
                {
                    (!authEntrepreneur && citizen) &&
                        <Route exact path='/ciudadanos/preguntas'>
                            <Registration 
                                background= '#fff'
                                fontColor='#0c3944'
                                title={'ayuda a resolver el reto'}
                                image={images.greenCiudadanos}
                                alt={'make-sense ciudadanos'}
                            />
                        </Route>
                }
                {/* NOTE: manejar useParams para que se muestre la pantalla de cada challenge segun su id */}
                <Route exact path='/profile/:challengeId'>
                    <ChallengeProfile/>
                </Route>
            </Switch>

            <Footer/>
        </BrowserRouter>
      
    </UIProvider>
  );
}

export default App;
