import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';

import Login from './admin/login';
import AdminHome from './admin/Home';
//componentes de conta
import ContactsView from './admin/ContactsView';
import ContatcResponse from './admin/ContactsResponse';

import ClientsView from './admin/ClientsView';
import ClientsAdd from './admin/ClientsAdd';

import { isAdmin } from '../Auth';

function Section(props) {
    return (
        <section id="section" className="container">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route  path="/products">
                    <Products />
                </Route>
                <Route exact path="/contact">
                    <Contact />
                </Route>
              
                <Route  path="/users/login">
                      <Login />
                </Route>
                

                <PrivateRoute exact path="/admin/home" component={AdminHome}/>
                <PrivateRoute exact path="/admin/contacts/view" component={ContactsView}/>
                <PrivateRoute path ="/admin/contacts/response/:id" component={ContatcResponse}/>

                <PrivateRoute exact path="/admin/clients/view" component={ClientsView}/>
                <PrivateRoute exact path="/admin/clients/add" component={ClientsAdd}/>

                
                
            </Switch>
        </section>
    )
}

export default Section;

function PrivateRoute({component: Component, ...rest}){
    return(
        <Route
            {...rest}
            render={
                props => (
                    isAdmin() ? 
                        <Component {...props}/>
                    :
                        console.log('não logado')
                )
            }
        />    
    )
}