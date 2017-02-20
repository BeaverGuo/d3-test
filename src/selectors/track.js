import { createSelector } from 'reselect';

const getTracksReducer = (state) => state.tracksReducer;

export const getTracks = createSelector([getTracksReducer],(tracksReducer) => 
    tracksReducer.get('tracks'));

export const getActiveTrack = createSelector([getTracksReducer],(tracksReducer) => 
    tracksReducer.get('activeTrack'));
