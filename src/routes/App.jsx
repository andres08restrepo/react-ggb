import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import DietaBarf from '../containers/DietaBarf';
import CalculaRacion from '../containers/CalculaRacion';
import Productos from '../containers/Productos';
import Barf from '../containers/Barf';
import Snacks from '../containers/Snacks';
import Cumpleaños from '../containers/Cumpleaños';
import Combos from '../containers/Combos';
import Nosotros from '../containers/Nosotros';
import FamiliaGGB from '../containers/FamiliaGGB';
import PreguntasFrecuentes from '../containers/PreguntasFrecuentes';
import Contacto from '../containers/Contacto';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';


const App = () => {
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/dieta-barf" component={DietaBarf} />
                    <Route exact path="/calcula-racion" component={CalculaRacion} />
                    <Route exact path="/productos" component={Productos} />
                    <Route exact path="/productos/barf" component={Barf} />
                    <Route exact path="/productos/snacks" component={Snacks} />
                    <Route exact path="/productos/cumpleaños" component={Cumpleaños} />
                    <Route exact path="/productos/combos" component={Combos} />
                    <Route exact path="/nosotros" component={Nosotros} />
                    <Route exact path="/familia-ggb" component={FamiliaGGB} />
                    <Route exact path="/preguntas-frecuentes" component={PreguntasFrecuentes} />
                    <Route exact path="/contacto" component={Contacto} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;