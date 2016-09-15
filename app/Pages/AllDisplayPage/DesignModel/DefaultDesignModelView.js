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
class DefaultDesignModelView extends React.Component {

	render() {
		
		return (
			<div  className={styles.mainBox}>
				<h3>总模型</h3>
				<DgnViewer model={'test3.dgn'}  width="920px"  height="700px"/>
 			</div>
		);
	}
}

export default DefaultDesignModelView;


