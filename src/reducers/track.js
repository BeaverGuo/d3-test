import Immutable,{ fromJS } from 'immutable';
import * as actionTypes from '../constants/actionTypes.js';
const initialState = Immutable.Map({ 
    tracks:[],
    activeTrack: null
});

const tracksReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TRACKS_SET:
            return setTracks(state, action);
        case actionTypes.TRACK_PLAY:
            return setPlay(state, action);
    }
    return state;
}

function setTracks(state, action) {
    const  { tracks } = action;
    return state.set('tracks', tracks);
}

function setPlay(state, action) {
    const { track } = action;
    return state.set('activeTrack', track);
}

export default tracksReducer;
