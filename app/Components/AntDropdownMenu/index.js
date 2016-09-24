/*
 * Ant design drop down menu test component
 *
 * 
 *
 */

import React,{ Component } from 'react';
import { Table, Dropdown, Button, Icon, Popover, Input, Select, Alert, Tag } from "antd";
import styles from './styles.css';

const data = [];
for (let i = 0; i <10; i++) {
  data.push({
    key: i,
    appName: `我是标题${i}`,
    status: '已上线',
    createTime: '2014-12-24 23:12:00'
  });
}



const rowSelection = {
  onChange(selectedRowKeys, selectedRows) {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  onSelect(record, selected, selectedRows) {
    console.log(record, selected, selectedRows);
  },
  onSelectAll(selected, selectedRows, changeRows) {
    console.log(selected, selectedRows, changeRows);
  }
};

const MenuTest = ({
    onClickOp1
})=>{
    return (
        <div className={styles.listDiv}>
              <a onClick={()=>onClickOp1()}>操作1</a>
              <a>操作2</a>
              <a>操作3</a>
        </div>
    );
};

let showShadow = false;

class FixedButtonGroupTop extends React.Component {
  constructor(props) {
    super(props);

    this.onTableScroll = this.onTableScroll.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = {
      shadowClass: false,
      visible: false,
    };
  }

  onTableScroll(e) {
    // 使用额外变量防止 setState 的非同步性
    if (e.target.scrollTop > 0 && !showShadow) {
      showShadow = true;
      this.setState({
        shadowClass: true
      });
      return;
    }

    if (e.target.scrollTop <= 0 && showShadow) {
      showShadow = false;
      this.setState({
        shadowClass: false
      });
    }
  }
  onClick(e){
    console.log(e);
  }
  handleClickOp1(record,para){
    console.log(record,para);
  }
 
  render() {
    let self = this;
    const columns = [{
      title: '应用名称',
      dataIndex: 'appName',
      key: 'appName',
      render: (text) => <a>{text}</a>
    }, {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: () => <span className="c-icon-status">已上线</span>
    }, {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime'
    }, {
      title: '操作',
      key: 'operation',
      render(record,index) {
        return (
          <span>
            <a>操作1</a>
            <span className="ant-divider"></span>
            <span className={styles.hoverEffect}>
            <a>更多</a>
            <MenuTest onClickOp1={()=>self.handleClickOp1(record,"lala")} />
            </span>
          </span>
        );
      }
    }];

    return (
      <div className="fixed-button-group-demo-t">
        <div className={this.state.shadowClass ? 'fbg-shadow-box fbg-shadow' : 'fbg-shadow-box'}>
          <Button type="primary">按钮</Button>
          <Button type="ghost">按钮</Button>
        </div>
        <div className="fbg-table">
          <Table rowSelection={rowSelection} columns={columns} pagination={false} dataSource={data} />
        </div>


      </div>
    );
  }
}

export default FixedButtonGroupTop;
//ReactDOM.render(<App />, document.getElementById('app'));