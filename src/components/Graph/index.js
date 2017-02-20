import React, { Component } from 'react';
import { connect } from 'react-redux';
import Graph from './presenter.js';

const makeMapStateToProps = (state, props) => {
    //const mapStateToProps = (state, props) => { tracks: allSelectors.getTracks(state) };
    return { 
        
    };
};

export default connect(makeMapStateToProps)(Graph);