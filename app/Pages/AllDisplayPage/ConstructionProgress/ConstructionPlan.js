/*
 * AllDisplayPage
 *
 * at the 'constructionPlan' route
 *
 */

/***********************************施工计划树*************************************/

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

const data=[{
	name: '年度计划',
		icon: "folder",
		fold: "expanded",
		action: 'fold',
		actionData:{},
		children: [
			{ name: '2015年年度计划', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/constructionPlan/MainView/2015年年度计划'}, fold: "none" },
			{ name: '2016年年度计划', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/constructionPlan/MainView/2016年年度计划'}, fold: "none" },
			{ name: '2017年年度计划', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/constructionPlan/MainView/2017年年度计划'}, fold: "none" },
			{ name: '2018年年度计划', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/constructionPlan/MainView/2018年年度计划'}, fold: "none" },
			]
	},
	{
		name: '季度计划',
		icon: "folder",
		fold: "expanded",
		action: 'fold',
		actionData:{},
		children: [
			{ name: '2015年第一季度', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/constructionPlan/MainView/2015年第一季度'}, fold: "none" },
			{ name: '2015年第二季度', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/constructionPlan/MainView/2015年第二季度'}, fold: "none" },
			{ name: '2015年第三季度', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/constructionPlan/MainView/2015年第三季度'}, fold: "none" },
			{ name: '2015年第四季度', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/constructionPlan/MainView/2015年第四季度'}, fold: "none" },
			{ name: '2016年第一季度', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/constructionPlan/MainView/2016年第一季度'}, fold: "none" },
			{ name: '2016年第二季度', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/constructionPlan/MainView/2016年第二季度'}, fold: "none" },
			{ name: '2016年第三季度', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/constructionPlan/MainView/2016年第三季度'}, fold: "none" },
			{ name: '2016年第四季度', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/constructionPlan/MainView/2016年第四季度'}, fold: "none" },
		]
	},
	{
		name: '月度计划',
		icon: "folder",
		fold: "expanded",
		action: 'fold',
		actionData:{},
		children: [
			{ name: '2015年01月', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/constructionPlan/MainView/test6.imodel'}, fold: "none" },
			{ name: '2015年02月', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/constructionPlan/MainView/test7.imodel'}, fold: "none" },
			{ name: '2015年03月', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/constructionPlan/MainView/test6.imodel'}, fold: "none" },
			{ name: '2015年04月', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/constructionPlan/MainView/test7.imodel'}, fold: "none" },
			{ name: '2015年05月', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/constructionPlan/MainView/test6.imodel'}, fold: "none" },
			{ name: '2015年06月', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/constructionPlan/MainView/test7.imodel'}, fold: "none" },
			{ name: '2015年07月', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/constructionPlan/MainView/test6.imodel'}, fold: "none" },
			{ name: '2015年08月', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/constructionPlan/MainView/test7.imodel'}, fold: "none" },
			{ name: '2015年09月', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/constructionPlan/MainView/test6.imodel'}, fold: "none" },
			{ name: '2015年10月', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/constructionPlan/MainView/test7.imodel'}, fold: "none" },
			{ name: '2015年11月', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/constructionPlan/MainView/test6.imodel'}, fold: "none" },
			{ name: '2015年12月', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/constructionPlan/MainView/test7.imodel'}, fold: "none" },
			{ name: '2016年01月', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/constructionPlan/MainView/test6.imodel'}, fold: "none" },
			{ name: '2016年02月', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/constructionPlan/MainView/test7.imodel'}, fold: "none" },
			{ name: '2016年03月', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/constructionPlan/MainView/test6.imodel'}, fold: "none" },
			{ name: '2016年04月', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/constructionPlan/MainView/test7.imodel'}, fold: "none" },
			{ name: '2016年05月', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/constructionPlan/MainView/test6.imodel'}, fold: "none" },
			{ name: '2016年06月', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/constructionPlan/MainView/test7.imodel'}, fold: "none" },
			{ name: '2016年07月', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/constructionPlan/MainView/test6.imodel'}, fold: "none" },
			{ name: '2016年08月', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/constructionPlan/MainView/test7.imodel'}, fold: "none" },
			{ name: '2016年09月', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/constructionPlan/MainView/test6.imodel'}, fold: "none" },
			{ name: '2016年10月', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/constructionPlan/MainView/test7.imodel'}, fold: "none" },
			{ name: '2016年11月', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/constructionPlan/MainView/test6.imodel'}, fold: "none" },
			{ name: '2016年12月', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/constructionPlan/MainView/test7.imodel'}, fold: "none" },
		]
	},
	]

class ConstructionPlan extends React.Component {

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

export default ConstructionPlan;
