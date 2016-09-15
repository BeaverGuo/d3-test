/*
 * BaseDataPage
 *
 * at the '/QualityControlView' route
 *
 */

import React from 'react';
import styles from '../../../Components/SideMenu/mainbox.css';
import { Form, Input, Row, Col, Button, DatePicker,Upload, Icon,Select,Table,Tabs } from 'antd';
import Highcharts from 'highcharts';
import ReactHighcharts from 'react-highcharts';
import 'highcharts-heatmap';//引入highcharts导出控件
import HighchartsMore from 'highcharts-more';

/***********************************质量管控视图*************************************/

const TabPane = Tabs.TabPane;

class InvestmentGeneralSituationView extends React.Component {

	handleChange(key){
	  
	}
	render() {
		const columns = [{
					title: '序号',
					dataIndex: 'index',
					width: 50,
				},{
					title: '项目',
					dataIndex: 'projectName',
					width: 50,
				},{
					title: '单位',
					dataIndex: 'f1',
					width: 50,
				},{
					title: '合同量',
					dataIndex: 'f2',
					width: 50,
				},{
					title: '本月计划量',
					dataIndex: 'f3',
					width: 50,
				},{
					title: '本月完成量',
					dataIndex: 'f4',
					width: 50,
				}, {
					title: '完成比例',
					dataIndex: 'f5',
					width: 50,
				}, {
					title: '费用',
					dataIndex: 'f6',
					width: 30,
				}, {
					title: '备注',
					dataIndex: 'f7',
					width: 50,
				},
			];

		const data = [];
		for (let i = 1; i <= 9; i++) {
			data.push({
				index: i,
				// name: `进厂交通洞开挖第${i}单元`,
				// age: `Z0622061001地质钻孔验收合格证`,
				// address1: `张帅${i}`,
				// address2: `2016.7.3`,
			});
		}

		const columns_1 = [{
					title: '序号',
					dataIndex: 'index',
					width: 50,
				},{
					title: '项目',
					dataIndex: 'projectName',
					width: 50,
				},{
					title: '单位',
					dataIndex: 'f1',
					width: 50,
				},{
					title: '合同量',
					dataIndex: 'f2',
					width: 50,
				},{
					title: '本季度计划量',
					dataIndex: 'f3',
					width: 50,
				},{
					title: '本季度完成量',
					dataIndex: 'f4',
					width: 50,
				}, {
					title: '完成比例',
					dataIndex: 'f5',
					width: 50,
				}, {
					title: '费用',
					dataIndex: 'f6',
					width: 30,
				}, {
					title: '备注',
					dataIndex: 'f7',
					width: 50,
				},
			];

		const data_1 = [];
		for (let i = 1; i <= 6; i++) {
			data_1.push({
				index: i,
				// name: `进厂交通洞开挖第${i}单元`,
				// age: `Z0622061001地质钻孔验收合格证`,
				// address1: `张帅${i}`,
				// address2: `2016.7.3`,
			});
		}

		const columns_2 = [{
					title: '序号',
					dataIndex: 'index',
					width: 50,
				},{
					title: '项目',
					dataIndex: 'projectName',
					width: 50,
				},{
					title: '单位',
					dataIndex: 'f1',
					width: 50,
				},{
					title: '合同量',
					dataIndex: 'f2',
					width: 50,
				},{
					title: '本季度计划量',
					dataIndex: 'f3',
					width: 50,
				},{
					title: '本季度完成量',
					dataIndex: 'f4',
					width: 50,
				}, {
					title: '完成比例',
					dataIndex: 'f5',
					width: 50,
				}, {
					title: '费用',
					dataIndex: 'f6',
					width: 30,
				}, {
					title: '备注',
					dataIndex: 'f7',
					width: 50,
				},
			];

		const data_2 = [];
		for (let i = 1; i <= 7; i++) {
			data_2.push({
				index: i,
				// name: `进厂交通洞开挖第${i}单元`,
				// age: `Z0622061001地质钻孔验收合格证`,
				// address1: `优${i}`,
				// address2: `2016.7.3`,
			});
		}

		const columns_3 = [{
					title: '序号',
					dataIndex: 'index',
					width: 50,
				},{
					title: '项目',
					dataIndex: 'projectName',
					width: 50,
				},{
					title: '单位',
					dataIndex: 'f1',
					width: 50,
				},{
					title: '总量',
					dataIndex: 'f2',
					width: 50,
				},{
					title: '累计完成量',
					dataIndex: 'f3',
					width: 50,
				},{
					title: '完成比例',
					dataIndex: 'f4',
					width: 50,
				},{
					title: '费用',
					dataIndex: 'f5',
					width: 30,
				}, {
					title: '备注',
					dataIndex: 'f6',
					width: 50,
				},
			];

		const data_3 = [];
		for (let i = 1; i <= 7; i++) {
			data_3.push({
				index: i,
				// name: `进厂交通洞开挖第${i}单元`,
				// age: `Z0622061001地质钻孔验收合格证`,
				// address1: `优${i}`,
				// address2: `2016.7.3`,
			});
		}

		let data2={};
		data2.tag="投资管理数据分析";
		data2.config = {
			chart: {
				type: 'column'
			},
			title: {
				text: '杨房沟水电站计划投资展示'
			},
	       	credits: {
            	enabled: false //去掉highcharts logo
        	}, 
			subtitle: {
				text: '——BIM数据中心'
			},
			xAxis: {
				categories: [
					'2013',
				'2014',
				'2015',
				'2016',
				'2017',
				'2018',
				'2019',
				'2020',
				'2021',
				'2022',
				'2023',
				'2024'
					],
				crosshair: true
			},
			yAxis: {
				min: 0,
				title: {
					text: '单位 (万元)'
				}
			},
			tooltip: {
				headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
				pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
					'<td style="padding:0"><b>{point.y:.1f} 万元</b></td></tr>',
				footerFormat: '</table>',
				shared: true,
				useHTML: true
			},
			plotOptions: {
				column: {
					pointPadding: 0.2,
					borderWidth: 0
				}
			},
			series: [{
				name: '引水发电工程',
				data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

			}, {
				name: '挡水工程',
				data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

			}, {
				name: '坝岸坡处理',
				data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

			}, {
				name: '辅助工程',
				data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

			}]
		};

		return (
			<div gutter={24} className={styles.mainBox}>
				<Row gutter={24}>
					<Col sm={24} >
						<ReactHighcharts {...data2} ref="chart4"  callback = {this.afterRender}></ReactHighcharts>
					</Col>
				</Row>
				<Row >
					<Col sm={22} offset={1}>
						<h3>投资概况</h3>
						<Tabs  className={styles.tabFr} onChange={(key)=>this.handleChange(key)} type="card">
						  <TabPane style={{float:'right'}} tab="本月" key="1">
						    <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 247 }} size="small" />
						  </TabPane>
						  <TabPane style={{float:'right'}} tab="上一季度" key="2">
						    <Table columns={columns_1} dataSource={data_1} pagination={{ pageSize: 50 }} scroll={{ y: 247 }} size="small" />
						  </TabPane>
						  <TabPane style={{float:'right'}} tab="下一季度" key="3">
						    <Table columns={columns_2} dataSource={data_2} pagination={{ pageSize: 50 }} scroll={{ y: 247 }} size="small" />
						  </TabPane>
						  <TabPane style={{float:'right'}} tab="全部" key="4">
						    <Table columns={columns_3} dataSource={data_3} pagination={{ pageSize: 50 }} scroll={{ y: 247 }} size="small" />
						  </TabPane>
						</Tabs>
					</Col>
				</Row>

			</div>
		);
	}
}

export default InvestmentGeneralSituationView;



//主页公共图表
class HomeChart extends React.Component {
	constructor(props) {
		super(props);
		this.chart = undefined;
	}

	componentDidMount() {

	}

	componentWillReceiveProps(props) {
	}


	render() {

		return (
			<div className={styles.chart}>
					<div className={styles.chartLable}>
						<h1>{this.props.tag}</h1>
					</div>
				<ReactHighcharts config={this.props.config} style={{width:'400px',height:'300px',marginLeft: '10px',marginBottom: '10px'}} ref="chart4"  callback = {this.afterRender}></ReactHighcharts>
			</div>
		)
	}
}



