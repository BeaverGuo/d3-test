/**
 * content.js
 *
 * 综合展示页面左边的导航条
 * 
 */

import React, {
	Component,
	PropTypes
} from 'react'
import SideMenu from '../../Components/SideMenu';
import {
	connect
} from 'react-redux'
import styles from '../../Components/SideMenu/sidebar.css';

var SIDEMENU_NAMES = [{
		id: 0,
		name: 'designModel',
		text: '设计模型',
		path: '/allDisplay/designModel'
	}, {
		id: 1,

		name: 'cnstrctSchedule',
		text: '施工进度',
		path: '/allDisplay/menuBaseData',
		children: [
			{id:0,name:'menuModelMana',text:'进度展示',path:'/allDisplay/progressDisplay'},
			{
				id: 0,
				name: 'contrastAnalysis',
				text: '对比分析',
				path: '/allDisplay/contrastAnalysis'
			},
			// {id:2,name:'menuModelMana',text:'关键路径',path:'/allDisplay/menuModelMana'},
			{
				id: 1,
				name: 'constructionPlanView',
				text: '施工计划',
				path: '/allDisplay/constructionPlanView'
			}
		]
	}, {
		id: 2,
		name: 'quality',
		text: '工程质量',
		path: '/allDisplay/menuBaseData',
		children: [{
			id: 0,
			name: 'qualityControl',
			text: '质量管控',
			path: '/allDisplay/qualityControl'
		}, {
			id: 1,
			name: 'qualityDisplay',
			text: '质量展示',
			path: '/allDisplay/qualityDisplay'
		}]
	},
	{id:2,name:'investment',text:'工程投资',path:'/allDisplay/menuBaseData',
	 children:[{id:0,name:'investmentGeneralSituation',text:'投资概况',path:'/allDisplay/investmentGeneralSituation'},
	          {id:1,name:'investmentDisplay',text:'投资展示',path:'/allDisplay/investmentDisplay'},
	          {id:2,name:'investmentContrastAnalysis',text:'对比分析',path:'/allDisplay/investmentContrastAnalysis'}
	         ]},
	 {id:2,name:'engineeringDocuments',text:'工程文档',path:'/allDisplay/engineeringDocuments'}
];


export default class Content extends Component {
	constructor(props) {
 		super(props);
 		this.state = {
 			index: 0,
 			childrenIndex:-999
 		};
 	}
 	componentWillMount(){
  		let a = document.URL;
    	let	b = a.split('//')[1].split('/');
		let index=0;
		let childrenIndex=-999;
		if(b[2]!='')
			SIDEMENU_NAMES.map((item,index1)=>{
				if(item.children){
						item.children.map((item1,index2)=>{
							if(item1.name==b[2]){
							index=index1;
							childrenIndex=index2;
						}
					})
				}
		
			})
		this.setState({index : index,childrenIndex:childrenIndex});
  	}
	_handleMenuClick(index) {
		
	}
	render() {
		// TODO 请为sidemenu项增加当前选择项显示。对应的css类为 .sideMenu a.current
		return (
			<div className={styles.sideBar}>
				<SideMenu selectIndex={this.state.index} selectChildrenIndex={this.state.childrenIndex} onSideMenuClick={(index)=>this._handleMenuClick(index)} menuItems={SIDEMENU_NAMES} />
				{this.props.children}
			</div>
		);
	}
}
