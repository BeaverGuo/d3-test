import Immutable,{ fromJS } from 'immutable';
import * as actionTypes from '../constants/actionTypes';

const initialState = Immutable.Map({ user:{} });

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ME_SET:
            return setMe(state, action);
    }
    return state;
}

function setMe(state, action) {
    const  { user } = action;
    return state.set('user', user);
}

export default authReducer;