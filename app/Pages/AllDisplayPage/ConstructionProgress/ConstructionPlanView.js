/*
 * BaseDataPage
 *
 * at the '/ConstructionPlanView' route
 *
 */

import React from 'react';
import styles from '../styles.css';
import { Form, Input, Row, Col, Button, DatePicker,Upload, Icon,Select,Table } from 'antd';
import systemsetting from '../../../Ajax/Config/config.json';
/*import SearchBar from '../../../Components/SearchBox/SearchBar.js';*/

/***********************************施工计划视图*************************************/
class ConstructionPlanView extends React.Component {

	render() {
		
		return (
				<div>
					<h3 >施工计划</h3>
					<div className={styles.gantt} ref="gantt">
				    	<iframe src={systemsetting.ganttAddress}  width="100%" height="100%"/>
					</div>
				</div>
		       );
	}
}

export default ConstructionPlanView;

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


const columns = [{
			title: '序号',
				dataIndex: 'name',
				width: 30,
		}, {
			title: '任务名称',
				dataIndex: 'age',
				width: 50,
		}, {
			title: '工期（天）',
				dataIndex: 'address1',
				width: 50,
		}, {
			title: '开始时间',
				dataIndex: 'address2',
				width: 50,
		}, {
			title: '前置任务',
			dataIndex: 'address3',
			width: 50,
		}, {
			title: '资源名称',
			dataIndex: 'address4',
			width: 50,
		}, {
			title: '备注',
			dataIndex: 'address5',
			width: 50,
		}
		];

		const data = [];
		for (let i = 1; i <= 100; i++) {
			data.push({
				key: i,
				name: `${i}`,
				age: `执行中的任务${i}`,
				address1: `${i}`,
				address2: `2016.7.3`,
				address3: `无`,
				address4: `资源${i}`,
				address5: `备注${i}`,
			});
		}