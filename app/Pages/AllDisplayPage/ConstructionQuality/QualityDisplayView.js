/*
 * BaseDataPage
 *
 * at the '/QualityDisplayView' route
 *
 */

import React from 'react';
import publicStyles from '../../../Components/SideMenu/mainbox.css';
import styles from '../styles.css';
import DgnViewer from '../../../Components/DGN';
import { browserHistory } from 'react-router';

var _FileConvertUrl = 'http://10.215.6.135:8088';

/***********************************质量显示视图*************************************/
class QualityDisplayView extends React.Component {
	onSelection(name){
		browserHistory.push('/allDisplay/qualityDisplay/MainView/show/'+this.props.params.id+'_'+name);
	}
	render() {
		let afile='';
		let name='';
		let url=_FileConvertUrl+'/view/url?url='+afile+'&name='+name
		return (
			<div className={publicStyles.mainBox}>
				<h3>{this.props.params.id}</h3>
				<DgnViewer  ShowRight={true}  width="920px" onSelection={this.onSelection.bind(this)} height="700px"/>
{/*				<iframe  src={url} width="100%" />*/}
				{/*<iframe className={mStyle.iframe} src={url} width="100%" />*/}
			</div>
		);
	}
}

export default QualityDisplayView;
// eleForm.onsubmit = function() {
//     var message = document.querySelector("input[type='text']").value;
//     // 这里是关键，发送信息
//     window.parent.frames[1].postMessage(message, '*');
//     return false;    
// }
// 右侧iframe JS代码：
// var eleBox = document.querySelector("#message");
// var messageHandle = function(e) {
//     eleBox.innerHTML = '接受到的信息是：' + e.data;
// };
// if (window.addEventListener) {
//     // 接受信息
//     window.addEventListener("message", messageHandle, false);
// } else if (window.attachEvent) {
//     // 接受信息，兼顾IE8之流
//     window.attachEvent('onmessage', messageHandle);
// }
