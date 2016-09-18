/*
 * HomePage
 *
 * at the '/' route
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { createStructuredSelector } from 'reselect';
import { selectUsername } from './selectors';
import { changeUserName } from './actions';
import Button from '../../Components/Button';
import { default as HX } from '../../Components/HX';
import styles from './styles.css';
import nothing from './nothing.png';
//d3 library
import * as d3 from "d3";

class HomePage extends React.Component {
	/**
	 * set path to '/features'
	 */
	openFeaturesPage = () => {
		this.props.changeRoute('/features');
	};

	render() {
		debugger;
		return (
			<article>
				<div>
					<section className={`${styles['text-section']} ${styles.centered}`}>
						<HX.H2>simple biolerplate</HX.H2>
						<p><span>cover all circumstances</span></p>
					</section>
					<section className={`${styles['text-section']} ${styles.centered}`}>
						<HX.H2>this is an iframe example</HX.H2>
						<iframe src="/iframe"></iframe>
					</section>

					<Button handleRoute={this.openFeaturesPage}>Features</Button>
				</div>
			</article>
		);
	}
}

HomePage.propTypes = {
	username: React.PropTypes.string,
	changeRoute: React.PropTypes.func,
	onChangeUsername: React.PropTypes.func,
};

//call when store change
const mapStateToProps = createStructuredSelector({
	username: selectUsername(),
});

//if you drop this parameter, dispatch will be passed into your component
function mapDispatchToProps(dispatch) {
	return {
		onChangeUsername: (e) => dispatch(changeUserName(e.target.value)),
		changeRoute: (url) => dispatch(push(url)),
	};
}

// react-redux usage
// connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
// connect React component and Redux store
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
