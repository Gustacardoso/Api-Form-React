import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';

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
            </Switch>
        </section>
    )
}

export default Section;