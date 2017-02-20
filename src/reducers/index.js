import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import tracksReducer from './track';
import authReducer from './auth';
//provide our store with the route state when we navigate from page to page.
export default combineReducers({
    authReducer,
    tracksReducer, 
    routing: routerReducer
});
