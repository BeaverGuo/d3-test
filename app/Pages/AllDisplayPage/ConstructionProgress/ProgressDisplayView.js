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
import { Form, Input, Row, Col, Button, DatePicker,Upload, Icon,Select,Table } from 'antd';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
// import 'react-bootstrap-table/css/react-bootstrap-table-all.min.css'



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
	    code: `code${i}`,
	    name:`name${i}`,
	    description:`description${i}`,
	    version: `version${i}`,
	    position:`position${i}`,
	    file:`file${i}`,
	    divide:`divide${i}`
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
	var products = [{
      id: 1,
      name: "Item name 1",
      price: 100
  },{
      id: 2,
      name: "Item name 2",
      price: 100
  },{
      id: 3,
      name: "Item name 2",
      price: 100
  },{
      id: 4,
      name: "Item name 2",
      price: 100
  },{
      id: 5,
      name: "Item name 2",
      price: 100
  },{
      id: 5,
      name: "Item name 2",
      price: 100
  },{
      id: 5,
      name: "Item name 2",
      price: 100
  },{
      id: 5,
      name: "Item name 2",
      price: 100
  },{
      id: 5,
      name: "Item name 2",
      price: 100
  }];
/***********************************对比分析视图*************************************/
class ProgressDisplayView extends React.Component {
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
				<h3>{this.props.params.id} </h3>
				<DgnViewer  height='450px' width='920px' />
				<row >
					<PlayBar onProgress={this.onProgress} playing="pause" progress={1} data={playBarData} loop={true} duration={300} />
				</row>
				<row  gutter={24} >
					<Form >
						<Col sm={5}>
							<FormItem label="分项列表" labelCol={{ span: 9 }} wrapperCol={{ span:15 }} >
								<Select defaultValue="1" dropdownMatchSelectWidth="false">
									<Option value="1">饮水发电工程</Option>
									<Option title='2222222222222222222222' value="2">近坝岸坡处理工程</Option>
								</Select>
							</FormItem>
						</Col>
						<Col sm={4}>
							<FormItem label="进度类型" labelCol={{ span: 10 }} wrapperCol={{ span:14 }} >
								<Select defaultValue="1" dropdownMatchSelectWidth="false">
									<Option value="1">计划进度</Option>
									<Option value="2">实际进度</Option>
								</Select>
							</FormItem>
						</Col>
						<Col sm={4} >
							<FormItem  label="时段" labelCol={{ span: 8 }} wrapperCol={{ span: 16}} >
								<Select defaultValue="1" >
									<Option value="1">最近一周</Option>
									<Option value="2">最近一个月</Option>
									<Option value="3">最近一年</Option>
								</Select>
							</FormItem>
						</Col>

						<Col sm={4} >
							<FormItem label="从" labelCol={{ span: 6 }} wrapperCol={{ span: 18}} >
								<DatePicker defaultValue="2015/01/01" format="yyyy/MM/dd" />
							</FormItem>
						</Col>
						<Col sm={4} >
							<FormItem label="到" labelCol={{ span: 6 }} wrapperCol={{ span: 18}} >
								<DatePicker defaultValue="2015/01/01" format="yyyy/MM/dd" />
							</FormItem>
						</Col>
						<Col sm={2} >
							<FormItem label="步长" labelCol={{ span: 12 }} wrapperCol={{ span: 12}} >
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
						<BootstrapTable data={data} selectRow={this.selectRowProp()} height="200">
							<TableHeaderColumn dataField="index" width="45" isKey={true}>编号</TableHeaderColumn>
							<TableHeaderColumn dataField="code" width="120">编码</TableHeaderColumn>
							<TableHeaderColumn dataField="name" width="120">名称</TableHeaderColumn>
							<TableHeaderColumn dataField="description" width="150">描述</TableHeaderColumn>
							<TableHeaderColumn dataField="version" width="100">版本</TableHeaderColumn>
							<TableHeaderColumn dataField="position" width="100">位置</TableHeaderColumn>
							<TableHeaderColumn dataField="file" width="100">文件</TableHeaderColumn>
							<TableHeaderColumn dataField="divide" width="100">施工包划分</TableHeaderColumn>
						</BootstrapTable>
					</Col>
				</row>
			</div>
		);
	}
}

export default ProgressDisplayView;
