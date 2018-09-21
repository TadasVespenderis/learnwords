import React from 'react';
import ReactDOM from 'react-dom';
import './sass/main.scss';
import AppRoutes from './AppRoutes';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import learningWords from './reducers/learningWords';
import statsReducer from './reducers/statsReducer';

const rootReducer = combineReducers({
    words: learningWords,
    stats: statsReducer
});

const store = createStore (rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <AppRoutes />
    </Provider>, document.getElementById('root'));
registerServiceWorker();