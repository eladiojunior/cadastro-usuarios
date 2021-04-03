import React from 'react';
import {Switch, Route, Redirect} from 'react-router';
//Rotas
import Home from '../componentes/home/Home';
import UsuarioCrud from '../componentes/user/UsuarioCrud';
const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/usuarios" component={UsuarioCrud}/>
            <Redirect from="*" to="/"/>
        </Switch>
    )
}
export default Routes;