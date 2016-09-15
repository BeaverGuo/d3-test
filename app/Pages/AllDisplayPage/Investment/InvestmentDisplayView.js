/*
 * BaseDataPage
 *
 * at the '/ContrastAnalysisView' route
 *
 */

import React from 'react';
import styles from '../../../Components/SideMenu/mainbox.css';
import DgnViewer from '../../../Components/DGN';
import PlayBar from '../../../Components/PlayBar';
import { Form, Input, Row, Col, Button, DatePicker,Upload, Icon,Select,Table,Tabs} from 'antd';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/css/react-bootstrap-table-all.min.css'
import '../../../../node_modules/bootstrap/dist/js/bootstrap.js'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css'
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const Dragger = Upload.Dragger;
const createForm = Form.create;

let playBarData = [
	{tip:"2016-10-01T10:00:00"},
	{tip:"2016-10-03T14:00:00"},
	{tip:"2016-10-08T10:30:00"},
	{tip:"2016-10-09T10:00:00"},
	{tip:"2016-10-10T10:00:00"},
	{tip:"2016-10-12T10:00:00"},
	{tip:"2016-10-14T10:00:00"},
	{tip:"2016-10-16T10:00:00"},
	{tip:"2016-10-18T10:00:00"},
	{tip:"2016-10-20T10:00:00"},
	{tip:"2016-10-22T10:00:00"},
	{tip:"2016-10-24T10:00:00"},
	{tip:"2016-10-26T10:00:00"},
	{tip:"2016-10-28T10:00:00"},
];
const data = [];
	for (let i = 1; i <= 50; i++) {
	  data.push({
	  	key:i,
	    index: i,
	    code: `Z010103-1002-拱坝工程${i}#坝段开挖`,
	    time1:`2016.06.12`,
	    time2:`2016.10.22`,
	    project: `土方开挖`,
	    uint:`立方米`,
	    p1:`2345`,
	    p2:`2248`,
	    divide:`68339.2`,
	  });
	}
		const columns = [{
	  title: '编号',
	  dataIndex: 'index',
	  width: 50,
	},{
	  title: '编码',
	  dataIndex: 'code',
	  width: 150,
	},{
	  title: '名称',
	  dataIndex: 'name',
	  width: 140,
	}, {
	  title: '描述',
	  dataIndex: 'description',
	  width: 140,
	}, {
	  title: '版本',
	  dataIndex: 'version',
	  width: 115,
	},{
	  title: '位置',
	  dataIndex: 'position',
	  width: 115,
	},{
	  title: '文件',
	  dataIndex: 'file',
	  width: 115,
	},{
	  title: '施工包划分',
	  dataIndex: 'divide',
	  width: 115,
	}];

/***********************************投资展示*************************************/
class InvestmentDisplayView extends React.Component {
	componentDidMount() {

  	}
  	onProgress = (data) =>
	{
		console.log(data);
	}
	priceFormatter(cell, row){
 		 return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
	}
	onRowSelect(row, isSelected){
  console.log(row);
  console.log("selected: " + isSelected)
	}
	selectRowProp(){
		  let selectRowProp = {
		  mode: "radio",
		  clickToSelect: true,
		  bgColor: "rgb(238, 193, 213)",
		  onSelect: this.onRowSelect
		};
		return selectRowProp;
	}

	render() {

		return (
			<div  className={styles.mainBox}>
				<div>{this.props.params.id} </div>
				<DgnViewer  height='450' width='920' />
				<row >
					<PlayBar onProgress={this.onProgress} playing="pause" progress={1} data={playBarData} loop={true} duration={300} />
				</row>
				<row  gutter={24} >
					<Form >
						<Col sm={5}>
							<FormItem label="进度类型" labelCol={{ span: 8 }} wrapperCol={{ span:16 }} >
								<Select defaultValue="lucy" dropdownMatchSelectWidth="false">
									<Option value="jack">Jackswsssssssssssssssssssss</Option>
									<Option value="lucy">Lucy</Option>
									<Option value="disabled">Disabled</Option>
									<Option value="yiminghe">yiminghe</Option>
								</Select>
							</FormItem>
						</Col>
						<Col sm={5} >
							<FormItem  label="时段" labelCol={{ span: 6 }} wrapperCol={{ span: 18}} >
								<Select defaultValue="lucy" >
									<Option value="jack">Jackswsssssssssssssssssssss</Option>
									<Option value="lucy">Lucy</Option>
									<Option value="disabled">Disabled</Option>
									<Option value="yiminghe">yiminghe</Option>
								</Select>
							</FormItem>
						</Col>
						<Col sm={1} >

						</Col>
						<Col sm={3} >
							<FormItem wrapperCol={{ span: 24}} >
								<DatePicker defaultValue="2015/01/01" format="yyyy/MM/dd" />
							</FormItem>
						</Col>
						<Col sm={4} >
							<FormItem label="到" labelCol={{ span: 6 }} wrapperCol={{ span: 18}} >
								<DatePicker defaultValue="2015/01/01" format="yyyy/MM/dd" />
							</FormItem>
						</Col>
						<Col sm={3} >
							<FormItem label="步长" labelCol={{ span: 10 }} wrapperCol={{ span: 14}} >
								<Input  size="default" />
							</FormItem>
						</Col>
						<Col sm={1} >
							<FormItem labelCol={{ span: 24 }}>
								天
							</FormItem>
						</Col>
					</Form>
		    	</row>
{/*		         <Col sm={24} offset={0} >
			        	 <Table  columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{  x: 100,y: 200 }} size="small" />
			         </Col>*/}
				<row >
					<Col lg={24}  style={{marginTop:'-20px'}}>
						<Tabs  className={styles.tabFr} onChange={(key)=>this.handleChange(key)} type="card">
						  <TabPane tab="工程量" key="1">
						    <BootstrapTable data={data} selectRow={this.selectRowProp()} height="180" striped={true} hover={true} condensed={true}>
							<TableHeaderColumn dataField="index" width="45" isKey={true}>序号</TableHeaderColumn>
							<TableHeaderColumn dataField="code" width="120">施工包</TableHeaderColumn>
							<TableHeaderColumn dataField="time1" width="120">开始时间</TableHeaderColumn>
							<TableHeaderColumn dataField="time2" width="150">完成时间</TableHeaderColumn>
							<TableHeaderColumn dataField="project" width="100">项目</TableHeaderColumn>
							<TableHeaderColumn dataField="uint" width="100">单位</TableHeaderColumn>
							<TableHeaderColumn dataField="p1" width="100">设计工程量</TableHeaderColumn>
							<TableHeaderColumn dataField="p2" width="100">竣工工程量</TableHeaderColumn>
							<TableHeaderColumn dataField="divide" width="100">竣工费用</TableHeaderColumn>
						</BootstrapTable>
						  </TabPane>
						  <TabPane tab="累计曲线" key="2">
						   累计曲线
						  </TabPane>
						</Tabs>

					</Col>
				</row>
			</div>
		);
	}
}

export default InvestmentDisplayView;
