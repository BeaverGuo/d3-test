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
import mStyles from '../styles.css'

/***********************************质量管控视图*************************************/

const TabPane = Tabs.TabPane;

class QualityControlView extends React.Component {

	handleChange(key){
	  
	}
	render() {
		const columns = [{
					title: '单元名称',
					dataIndex: 'name',
					width: 50,
				}, {
					title: '表单名称',
					dataIndex: 'age',
					width: 50,
				}, {
					title: '申请人',
					dataIndex: 'address1',
					width: 30,
				}, {
					title: '申请时间',
					dataIndex: 'address2',
					width: 50,
				},
			];

		const data = [];
		for (let i = 1; i <= 9; i++) {
			data.push({
				key: i,
				name: `进厂交通洞开挖第${i}单元`,
				age: `Z0622061001地质钻孔验收合格证`,
				address1: `张帅${i}`,
				address2: `2016.7.3`,
			});
		}

		const columns_1 = [{
					title: '单元名称',
					dataIndex: 'name',
					width: 50,
				}, {
					title: '表单名称',
					dataIndex: 'age',
					width: 50,
				}, {
					title: '执行人',
					dataIndex: 'address1',
					width: 30,
				}, {
					title: '执行时间',
					dataIndex: 'address2',
					width: 50,
				},
			];

		const data_1 = [];
		for (let i = 1; i <= 6; i++) {
			data_1.push({
				key: i,
				name: `进厂交通洞开挖第${i}单元`,
				age: `Z0622061001地质钻孔验收合格证`,
				address1: `张帅${i}`,
				address2: `2016.7.3`,
			});
		}

		const columns_2 = [{
					title: '单元名称',
					dataIndex: 'name',
					width: 50,
				}, {
					title: '表单名称',
					dataIndex: 'age',
					width: 50,
				}, {
					title: '评定等级',
					dataIndex: 'address1',
					width: 30,
				}, {
					title: '完成时间',
					dataIndex: 'address2',
					width: 50,
				},
			];

		const data_2 = [];
		for (let i = 1; i <= 7; i++) {
			data_2.push({
				key: i,
				name: `进厂交通洞开挖第${i}单元`,
				age: `Z0622061001地质钻孔验收合格证`,
				address1: `优${i}`,
				address2: `2016.7.3`,
			});
		}

		let data1={};
		data1.tag="单位工程质量验评优良率";
		data1.config = {
			chart: {
				plotBackgroundColor: null,
				plotBorderWidth: null,
				plotShadow: false,
				type: 'pie'
			},
	       	credits: {
            	enabled: false //去掉highcharts logo
        	}, 
			title: {
				text: ''
			},
			tooltip: {
				pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
			},
			plotOptions: {
				pie: {
					allowPointSelect: true,
					cursor: 'pointer',
					dataLabels: {
						enabled: true,
						format: '<b>{point.name}</b>: {point.percentage:.1f} %',
						style: {
							color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
						}
					},
					showInLegend: true
				}
			},
			series: [{
				name: '完成',
				colorByPoint: true,
				data: [{
					name: '执行',
					y: 56.33
				}, {
					name: '结束验评',
					y: 24.03,
					sliced: true,
					selected: true
				}, {
					name: '执行中',
					y: 10.38
				}, {
					name: '申请中',
					y: 4.77
				}, {
					name: '其他',
					y: 0.91
				}, {
					name: '待发起任务',
					y: 0.2
				}]
			}]
		};


		let data2={};
		data2.tag="分部工程当月质量验评信息";
		data2.config = {
			chart: {
				type: 'column'
			},
			title: {
				text: ''
			},
	       	credits: {
            	enabled: false //去掉highcharts logo
        	}, 
			subtitle: {
				text: '——总承包BIM数据中心'
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
					text: '完成百分比'
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
					<Col sm={11} offset={1}>
						<HomeChart {...data1}/>
					</Col>
					<Col sm={11} offset={0}>
						<HomeChart {...data2}/>
					</Col>
				</Row>
				<Row >
					<Col sm={22} offset={1}>
						<h3>{this.props.params.id}</h3>
						<Tabs  className={styles.tabFr} onChange={(key)=>this.handleChange(key)} type="card">
						  <TabPane style={{float:'right'}} tab="已申请" key="1">
						    <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 247 }} size="small" />
						  </TabPane>
						  <TabPane style={{float:'right'}} tab="验证中" key="2">
						    <Table columns={columns_1} dataSource={data_1} pagination={{ pageSize: 50 }} scroll={{ y: 247 }} size="small" />
						  </TabPane>
						  <TabPane style={{float:'right'}} tab="已完成" key="3">
						    <Table columns={columns_2} dataSource={data_2} pagination={{ pageSize: 50 }} scroll={{ y: 247 }} size="small" />
						  </TabPane>
						</Tabs>
					</Col>
				</Row>

			</div>
		);
	}
}

export default QualityControlView;



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
			<div className={mStyles.chart}>
					<div className={mStyles.chartLable}>
						<h3>{this.props.tag}</h3>
					</div>
				<ReactHighcharts config={this.props.config} style={{width:'400px',height:'300px',marginLeft: '10px',marginBottom: '10px'}} ref="chart4"  callback = {this.afterRender}></ReactHighcharts>
			</div>
		)
	}
}



