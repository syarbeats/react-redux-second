import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import productReducers from './reducers/productReducers';
import userReducers from './reducers/userReducers';


const allReducers = combineReducers({
    products: productReducers,
    user: userReducers
});

const store = createStore(allReducers, {
    products: [{name: 'IPhone'}, {name: 'Google Nexus'}],
    user: 'John Lennon'
},
    window.devToolsExtension && window.devToolsExtension());

console.log(store.getState());

const updateUserAction = {
  type: 'updateUser',
  payload: {
      user: 'Paul McCartney'
  }
};
store.dispatch(updateUserAction);

ReactDOM.render(
    <Provider store={store}>
        <div>
            <h1>React-Redux-chapter-one</h1>
            <p>Check inspect element for checking he state</p>
        </div>
    </Provider>
    ,document.getElementById('root'));

