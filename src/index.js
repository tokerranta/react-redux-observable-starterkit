import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import Root from './Root';
import rootReducer from './rootReducer';
import rootEpic from './rootEpic';

const epicMiddleware = createEpicMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(epicMiddleware)
));

epicMiddleware.run(rootEpic);
store.dispatch({ type: 'APP_STARTED',  });

render(<Root store={store} />, 
    document.getElementById('root'));

if(module.hot) {
    module.hot.accept();
}