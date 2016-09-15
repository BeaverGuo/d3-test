/*
 * AllDisplayPage
 *
 * at the 'qualityControl' route
 *
 */

/***********************************质量管控*************************************/

import React from 'react';
import styles from '../styles.css';
import SearchBar from '../../../Components/SearchBox/SearchBar.js';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
// import data from '../../../Components/TreeView/data.js';
import TreeView from '../../../Components/TreeView';
import sideBarStyles from '../../../Components/SideMenu/sidebar.css';

const matches = {
	'macbook a': [
		'macbook air 13 case',
		'macbook air 11 case',
		'macbook air charger'
	],
	'macbook p': [
		'macbook pro 13 case',
		'macbook pro 15 case',
		'macbook pro charger'
	]
};

const data={
	name: '全部',
	icon: "folder",
	fold: "expanded",
	action: 'fold',
	actionData:{},
	children: [
	{
		name: '挡水工程',
		icon: "folder",
		fold: "folded",
		action: 'fold',
		actionData:{},
		children: [
			{ name: '挡水工程', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/qualityControl/MainView/挡水工程'}, fold: "none" },
			{ name: '水垫塘二道坝工程', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/qualityControl/MainView/水垫塘二道坝工程'}, fold: "none" },
			{ name: '泄洪雾化区处理工程', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/qualityControl/MainView/泄洪雾化区处理工程'}, fold: "none" },
			{ name: '危岩体处理工程', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/qualityControl/MainView/危岩体处理工程'}, fold: "none" },
		]
	},
	{
		name: '饮水发电工程',
		icon: "folder",
		fold: "folded",
		loading: true,
		action: 'fold',
		actionData:{},
		children: [
			{ name: '输水工程', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/qualityControl/MainView/输水工程'}, fold: "none" },
			{ name: '地下发电厂房工程Z06', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/qualityControl/MainView/地下发电厂房工程Z06'}, fold: "none" },
			{ name: '升压变电工程', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/qualityControl/MainView/升压变电工程'}, fold: "none" },
			{ name: '其他电工程', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/qualityControl/MainView/其他电工程'}, fold: "none" },
		]
	}
	,
		{
			name: '近坝岸坡处理工程',
			icon: "folder",
			fold: "folded",
			action: 'fold',
			actionData:{},
			children: [
				{ name: '下游河道整治工程', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/qualityControl/MainView/一次系统'}, fold: "none" },
				{ name: '旦坡崩坡机体处理工程', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/qualityControl/MainView/气系统'}, fold: "none" },
			]
		},
		{
			name: '辅助工程',
			icon: "folder",
			fold: "folded",
			action: 'fold',
			actionData:{},
			children: [
				{ name: '公路与桥梁工程', icon: "file", action: 'set', actionData:{}, fold: "none" },
				{ name: '麦地龙承包商营地工程', icon: "file", action: 'set', actionData:{}, fold: "none" },
				{ name: '导截流工程', icon: "file", action: 'set', actionData:{}, fold: "none" },
				{ name: '导截流工程', icon: "file", action: 'set', actionData:{}, fold: "none" },
				{ name: '导截流工程', icon: "file", action: 'set', actionData:{}, fold: "none" },
				{ name: '导截流工程', icon: "file", action: 'set', actionData:{}, fold: "none" },
				{ name: '导截流工程', icon: "file", action: 'set', actionData:{}, fold: "none" },
			]
		},        
		{
			name: '环境保护和水土保持工程',
			icon: "folder",
			fold: "folded",
			action: 'fold',
			actionData:{},
			children: [
				{ name: 'animations.js', icon: "file", action: 'set', actionData:{}, fold: "none" },
				{ name: 'default.js', icon: "file", action: 'set', actionData:{}, fold: "none" }
			]
		},
		{
			name: '其他项目',
			icon: "folder",
			fold: "folded",
			action: 'fold',
			actionData:{},
			children: [
				{ name: 'animations.js', icon: "file", action: 'set', actionData:{}, fold: "none" },
				{ name: 'default.js', icon: "file", action: 'set', actionData:{}, fold: "none" }
			]
		},
		]
}

class QualityControl extends React.Component {

	constructor(props){
		super(props);
		this.state = {result: []};
	} 

	handleSearch(text){
		console.log("查询"+text);
		var text1 =text+"1";
		var text2 =text+"2";

		this.setState({result: [text1,text2]});
	}

	onChange(input, resolve) {
		// Simulate AJAX request
		setTimeout(() => {
			const suggestions = matches[Object.keys(matches).find((partial) => {
				return input.match(new RegExp(partial), 'i');
			})] || ['macbook', 'macbook air', 'macbook pro'];

			resolve(suggestions.filter((suggestion) =>
					suggestion.match(new RegExp('^' + input.replace(/\W\s/g, ''), 'i'))
					));
		}, 25);
	}
	onSearch(input) {
		if (!input) return;
		console.info(`Searching "${input}"`);
	}

	onAction = (data) =>
	{
		// console.log(data);
	}


	render() {
		return (
			<div className={sideBarStyles.sideBox}>
				<div className={sideBarStyles.listBox}>
					<SearchBar placeholder="search 'mac'" onChange={this.onChange} onSearch={this.onSearch} />
					<TreeView onAction={this.onAction} data={data} />
				</div>
				{this.props.children}
			</div>
		);
	}
}

export default QualityControl;
