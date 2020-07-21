
import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store from './redux/store';
import routesConfig from './router/router'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config'
import App from 'components/App/App';


console.log('routesConfig', routesConfig)
// renderWithHotReload(App);

// if (module.hot) {
//     module.hot.accept('components/App/App', () => {
//         const NextApp = require('components/App/App').default;
//         renderWithHotReload(NextApp);
//     });
// }

function renderWithHotReload(RootElement) {
    ReactDom.render(
        <AppContainer>
            <Provider store={store}>
                <Router>
                    <RootElement />
                </Router>
            </Provider>
        </AppContainer>,
        document.getElementById('app')
    )
}

function RouteWithSubRoutes(route) {
    console.log('LUUU', route);
    return (
        <Route
            path={route.path}
            render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
            )}
        />
    )
}

ReactDom.render(
    <AppContainer>
        <Provider store={store}>
            {/* <Router children={routesConfig}>

            </Router> */}
            <Router>
                <ul>
                    <li><Link to="/home">首页</Link></li>
                    <li><Link to="/page1">Page1</Link></li>
                    <li><Link to="/counter">Counter</Link></li>
                    <li><Link to="/timeline">timeline演示</Link></li>
                </ul>
                <Switch>
                    {routesConfig.map((route, index) => {
                        console.log('xgf');
                        <RouteWithSubRoutes key={index} {...route} />
                    })}
                </Switch>
            </Router>
        </Provider>
    </AppContainer>,
    document.getElementById('app')
)