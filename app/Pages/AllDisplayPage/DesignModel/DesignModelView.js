/*
 * BaseDataPage
 *
 * at the '/BaseDataView' route
 *
 */

import React from 'react';
import styles from '../../../Components/SideMenu/mainbox.css';
import DgnViewer from '../../../Components/DGN';


/***********************************设计模型视图*************************************/
class DesignModelView extends React.Component {

	render() {
		
		return (
			<div  className={styles.mainBox}>
				<h3>{this.props.params.id}</h3>
				<DgnViewer model={this.props.params.id}  width="920px"  height="700px"/>
 			</div>
		);
	}
}

export default DesignModelView;