import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Stream from './presenter.js';
import * as allSelectors from '../../selectors'; 

const makeMapStateToProps = (state, props) => {
    //const mapStateToProps = (state, props) => { tracks: allSelectors.getTracks(state) };
    return { 
        tracks: allSelectors.getTracks(state),
        user: allSelectors.getAuth(state),
        activeTrack: allSelectors.getActiveTrack(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAuth: bindActionCreators(actions.auth, dispatch),
        onPlay: bindActionCreators(actions.playTrack, dispatch)
    };
}

export default connect(makeMapStateToProps, mapDispatchToProps)(Stream);
