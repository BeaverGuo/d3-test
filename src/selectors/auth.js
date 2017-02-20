import { createSelector } from 'reselect';

const getAuthReducer = (state) => state.authReducer;

export const getAuth = createSelector([getAuthReducer],(authReducer) => 
    authReducer.get('user'));