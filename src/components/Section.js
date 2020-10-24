import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import ContactsView from './pages/contactsView';

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
                <Route exact path="/contacts/view">
                      <ContactsView />
                </Route>
            </Switch>
        </section>
    )
}

export default Section;