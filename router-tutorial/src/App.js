import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BaseDemo from './components/BaseDemo'
import RoutingNested from './components/routerNest'
import { HashRouter as Router, Link, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
     <Router>
         <div>
             <ol>
                 <li><Link to="/BaseDemo">BaseDemo</Link></li>
                 <li><Link to="/RoutingNested">路由嵌套</Link></li>
             </ol>
             <hr/>

                <Route path="/BaseDemo" component={BaseDemo}/>
                <Route path="/RoutingNested" component={RoutingNested}/>
         </div>
     </Router>
    );
  }
}

export default App;
