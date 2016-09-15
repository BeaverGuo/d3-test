/*
 * AllDisplayPage
 *
 * at the 'allDisplay/designModel' route
 *
 */

/***********************************设计模型*************************************/

import React from 'react';
import styles from '../styles.css';
import SearchBar from '../../../Components/SearchBox/SearchBar.js';
import { DatePicker,message } from 'antd';
import 'antd/dist/antd.css';
// import data from '../../../Components/TreeView/data.js';
import TreeView from '../../../Components/TreeView';
import sideBarStyles from '../../../Components/SideMenu/sidebar.css';
import DataService from '../ajax.js';
import Wpunit from '../../../Ajax/BLL/Wpunit.js';

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
    name: '总模型',
    icon: "folder",
    fold: "expanded",
    action: 'link',
    actionData:{linkURL:'/allDisplay/designModel/MainView/test3.dgn'},
    children: [{ name: 'test1.dgn', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/designModel/MainView/test1.dgn'}, fold: "none" },
				{ name: 'test2.dgn', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/designModel/MainView/test2.dgn'}, fold: "none" },
				{ name: 'test3.dgn', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/designModel/MainView/test3.dgn'}, fold: "none" },
				{ name: '测试模型2', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/designModel/MainView/测试模型2'}, fold: "none" },
				{ name: '测试模型', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/designModel/MainView/测试模型'}, fold: "none" },
		]
    }
]

class DesignModel extends React.Component {

	constructor(props){
		super(props);
		this.state = {result: [],data:data};

	} 

	componentWillMount(){
		const dataSource=[{
		    name: '总模型',
		    icon: "folder",
		    fold: "expanded",
		    action: 'link',
		    actionData:{linkURL:'/allDisplay/designModel/MainView/test3.dgn'},
		    // children: [{ name: 'test1.dgn', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/designModel/MainView/test1.dgn'}, fold: "none" },
		    //             { name: 'test2.dgn', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/designModel/MainView/test2.dgn'}, fold: "none" },
		    //             { name: 'test3.dgn', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/designModel/MainView/test3.dgn'}, fold: "none" },
		    //             { name: '测试模型2', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/designModel/MainView/测试模型2'}, fold: "none" },
		    //             { name: '测试模型', icon: "file", action: 'link', actionData:{linkURL:'/allDisplay/designModel/MainView/测试模型'}, fold: "none" },
		    //     ]
		    }
		];
   //      Wpunit.getList(dataSource).then((data) => {
   //      	// console.log(data)
			// this.setState({data:data});
   //          }).catch((err) => {
   //              message.error(err);
   //          }
   //      );

	}


	onChange(input, resolve) {

	}
	onSearch(input, resolve) {
		 Wpunit.searchByKeyword(encodeURI(input)).then((data) => {
	          
	          let results=  data.result.map((item)=>{
	          	console.log('dddd',item.name);
            	return item.name;
		        })
		      	resolve(results);

            }).catch((err) => {
                message.error(err);
            }
        );

	}

	onAction = (data) =>
	{
		// console.log(data);
	}


	render() {
		return (
			<div className={sideBarStyles.sideBox}>
				<div className={sideBarStyles.listBox}>
					<SearchBar placeholder="..." onChange={this.onChange} onSearch={this.onSearch} />
					<TreeView onAction={this.onAction} data={this.state.data} />
				</div>
			{this.props.children}
			</div>
		);
	}
}

export default DesignModel;
