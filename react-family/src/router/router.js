import React from 'react';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import App from 'components/App/App';
import Home from 'pages/Home/Home';
import ScratchCard from 'pages/ScratchCard/ScratchCard';
import Counter from 'pages/Counter/Counter'
import TimeLine from 'pages/TimeLine/TimeLineDemo';

const routes = [
    {
        path: '/home',
        component: Home,
    },
    {
        path: '/scratchcard',
        component: ScratchCard,
    },
    {
        path: '/counter',
        component: Counter
    },
    {
        path: '/timeline',
        component: TimeLine
    }
]


const getRouter = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/home">首页</Link></li>
                <li><Link to="/scratchcard">ScratchCard</Link></li>
                <li><Link to="/counter">Counter</Link></li>
                <li><Link to="/timeline">timeline演示</Link></li>
            </ul>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/scratchcard" component={ScratchCard}></Route>
                <Route path="/counter" component={Counter}></Route>
                <Route path="/timeline" component={TimeLine}></Route>
            </Switch>
        </div>
    </Router>
)

// export default getRouter;
export default routes;
