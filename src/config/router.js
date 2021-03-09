import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Reduxx from "../component/reduxx";
import App from "../App";
import About from '../component/about'

export default class AppRouter extends React.Component {
    render(){
        return(
            <Router>
                <Route exact path="/" component={Reduxx} />
                {/* <Route exact path="/home" component={App} /> */}
                <Route exact path="/about" component={About} />
            </Router>
        )
    }
}