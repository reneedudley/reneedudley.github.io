import React from'react';
import ReactDOM from 'react-dom';

import { Router, Route } from 'react-router';
import { createHistory } from'history';
import { History } from 'react-router';



//import components
import NotFound from'./components/NotFound';
import Home from'./components/App';
import About from'./components/About';
import Portfolio from'./components/Portfolio';
import Skills from'./components/Skills';
import Contact from'./components/Contact';
// Routes //
var routes = (
    <Router history={createHistory()}>
        <Route path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/skills" component={Skills}/>
        <Route path="/contact" component={Contact}/>
        <Route path="*" component={NotFound}/>
    </Router>
);



ReactDOM.render(routes, document.querySelector('#index-banner'));