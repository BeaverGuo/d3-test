/*
 * HomePage
 *
 * at the '/allDisplayPage' route
 *
 */

import React from 'react';
import styles from './styles.css';
import Content from './content';

//fake data here for test

class AllDisplayPage extends React.Component {

	render() {
		return (
			<div>
			<Content children={this.props.children}/>
		
			</div>
		);
	}
}

export default AllDisplayPage;
