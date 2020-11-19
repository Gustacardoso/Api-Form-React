import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import ContactsView from './pages/ContactsView';
import Login from './admin/login';
import AdminHome from './admin/Home';

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
                <Route  path="/contactsview">
                      <ContactsView />
                </Route>
                <Route  path="/users/login">
                      <Login />
                </Route>
                <Route  path="/admin/home">
                      <AdminHome />
                </Route>
            </Switch>
        </section>
    )
}

export default Section;