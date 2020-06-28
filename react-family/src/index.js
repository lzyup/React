
import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store from './redux/store';
import routesConfig from './router/router'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import { renderRoutes } from 'react-router-config'
import App from 'components/App/App';


if (Array.isArray(routesConfig)) {
    console.log('xgf--->', routesConfig)
}
// renderWithHotReload(App);

// if (module.hot) {
//     module.hot.accept('components/App/App', () => {
//         const NextApp = require('components/App/App').default;
//         renderWithHotReload(NextApp);
//     });
// }

// function renderWithHotReload(RootElement) {
//     ReactDom.render(
//         <AppContainer>
//             <Provider store={store}>
//                 <Router>
//                     <RootElement />
//                 </Router>
//             </Provider>
//         </AppContainer>,
//         document.getElementById('app')
//     )
// }
ReactDom.render(
    <AppContainer>
        <Provider store={store}>
            {/* <Router children={routesConfig}>

            </Router> */}
            <Router>
            <Switch>
                {routesConfig.map(({path,component},index)=>{
                    console.log('11111',component);
                    console.log('22222',path);
                    return (<Route
                        key={index}
                        path={path}
                        component={component}
                    />)
                    
                })}
            </Switch>
            </Router>
            {/* {renderRoutes(routesConfig)} */}
        </Provider>
    </AppContainer>,
    document.getElementById('app')
)