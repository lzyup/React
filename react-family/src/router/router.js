import React from 'react';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import App from 'components/App/App';
import Home from 'pages/Home/Home';
import Page1 from 'pages/Page1/Page1';
import Counter from 'pages/Counter/Counter'
import TimeLine from 'pages/TimeLine/TimeLineDemo';

const routes = [
    {
        path: '/home',
        component: Home,
    },
    {
        path: '/page1',
        component: Page1,
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
                <li><Link to="/page1">Page1</Link></li>
                <li><Link to="/counter">Counter</Link></li>
                <li><Link to="/timeline">timeline演示</Link></li>
            </ul>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/page1" component={Page1}></Route>
                <Route path="/counter" component={Counter}></Route>
                <Route path="/timeline" component={TimeLine}></Route>
            </Switch>
        </div>
    </Router>
)

// export default getRouter;
export default routes;
