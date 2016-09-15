/*
 * BaseDataPage
 *
 * at the '/QualityDisplayView' route
 *
 */

import React from 'react';
import styles from '../../../Components/SideMenu/mainbox.css';
import { Button,Icon} from 'antd';
import mStyle from '../styles.css';
import { browserHistory } from 'react-router';


var _FileConvertUrl = 'http://10.215.6.135:8088';

/***********************************质量验评视图*************************************/
class QualityInspectionView extends React.Component {
	back(name){
		browserHistory.push('/allDisplay/qualityDisplay/MainView/'+name);
	}
	render() {
		let names=this.props.params.id.split('_');

		let afile='';
		let name=names[1];
		let url=_FileConvertUrl+'/view/url?url='+afile+'&name='+name
		return (
			<div className={styles.mainBox}>
				<h3>{this.props.params.id} <span style={{float: 'right',marginRight:'10px',cursor:'pointer'}} title='返回' onClick={this.back.bind(this,names[0])} > <Icon type="rollback" ></Icon></span></h3>
				<iframe className={mStyle.iframe} src={url} width="100%" />
			</div>
		);
	}
}

export default QualityInspectionView;
