import React from 'react';

import 'sanitize.css/sanitize.css';
import Footer from '../../Components/Footer';

import styles from './styles.css';

class BasePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className={styles.wrapper}>
				<a className={styles.logoWrapper} href="###">
					test d3 library
				</a>
				{this.props.children}
				<Footer />
			</div>
        );
    }
}

BasePage.defaultProps = {
	children: React.PropTypes.node,
};

export default BasePage;
