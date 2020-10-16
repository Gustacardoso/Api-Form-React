import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';

function Section(props) {
    return (
        <section id="section" className="container">
            <Switch>
                <Route exact path="/">
                    test
                </Route>
                <Route exact path="/about">
                    sobre
                </Route>
                <Route exact path="/products">
                    produtos
                </Route>
                <Route exact path="/contact">
                    contatos
                </Route>
            </Switch>
        </section>
    )
}

export default Section;