// eslint-disable-next-line
import { StrictMode } from 'react';
// eslint-disable-next-line
import ReactDOM from 'react-dom/client';
import { legacy_createStore as createStore, bindActionCreators } from 'redux';
import * as actions from './actions';
import reducer from './reducer';

import './index.css';

const store = createStore(reducer);

const { dispatch, getState, subscribe } = store;

const update = () => {
    document.querySelector('#counter').textContent = getState().value;
};

subscribe(update);

const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

document.querySelector('#inc').addEventListener('click', inc);
document.querySelector('#dec').addEventListener('click', dec);
document.querySelector('#rnd').addEventListener('click', () => {
    const value = (Math.random() * 100).toFixed(0);
    rnd(value);
});

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <StrictMode>
//         <></>
//     </StrictMode>
// );
