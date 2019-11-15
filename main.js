import React from "react"
import ReactDOM from "react-dom"
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from 'reducers'
import {HashRouter, Route} from 'react-router-dom'
import configureStore from 'stores/configureStore'

// import { syncReduxAndRouter } from 'redux-simple-router'
import { Provider } from "react-redux"
import App from 'components/app/App'

// const history = useBasename(createHashHistory)({
//     basename: '/'
// });

// syncReduxAndRouter(history, store);

// const store = configureStore(window.__INITIAL_STATE__);

const store = createStore(
        reducers,
        applyMiddleware(thunkMiddleware)
    )

ReactDOM.render(

    <Provider store={store}>
        <HashRouter>
            <Route path="/" component={App}/>
        </HashRouter>
    </Provider>,
    document.getElementById('templateTools')

);