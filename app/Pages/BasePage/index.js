import React from 'react';

import 'sanitize.css/sanitize.css';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header/headerContainer.js';
import styles from './styles.css';
import Highcharts from 'highcharts';
import ReactHighcharts from 'react-highcharts';
// import HighchartsMore from 'highcharts-more';//引入highcharts导出控件
import HighchartsExporting from 'highcharts-exporting';//引入highcharts导出控件
import 'highcharts-heatmap';//引入highcharts导出控件
import HighchartsMore from 'highcharts-more';//引入highcharts导出控件
import $ from 'jquery';
import {push} from 'react-router-redux';
import {applyRouterMiddleware , browserHistory , Router} from 'react-router';
import Wpunit from '../../Ajax/BLL/Wpunit.js';
import { createStructuredSelector } from 'reselect';
import { getTreeData } from './selectors';
import { connect } from 'react-redux';
import { changeTreeData,addChildrenToTreeData } from './actions';
import { updatePrjQuantList,setDivPrjData,setPartPrjData } from '../QualityManaPage/actions';
import { message } from 'antd';

//树数据传入下面组件
import PrjFill from '../QualityManaPage/projectFill/projectFill';
import ProcessData from '../QualityManaPage/processData/processData';
import QualityCheck from '../QualityManaPage/1stQualityCheck/firstQualityCheck';
import ProgPlan from '../ProgressManaPage/progressPlan/progressPlan';
import ProgReal from '../ProgressManaPage/realProgress/realProgress';

class BasePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        HighchartsMore(ReactHighcharts.Highcharts);
		HighchartsExporting(ReactHighcharts.Highcharts);//将图表导出按钮控件绑定到图表
		// $.support.cors = true;
    }

    isEmpty(obj) {
        console.log(obj)
        for(var prop in obj) {
            console.log(prop)
            if(obj.hasOwnProperty(prop))
                return false;
        }
        return true && JSON.stringify(obj) === JSON.stringify({});
    }

    navigateToLoginPage(){
        browserHistory.push('/Login');
    }

    componentWillMount(){
        let currentUserState = this.props.currentUserState;
        currentUserState = currentUserState.toJS();
        console.log(this.isEmpty(currentUserState));
        let bIsLoggedIn = sessionStorage.getItem('bIsLoggedIn'),
        onChangeTreeData = this.props.onChangeTreeData;
        if(this.isEmpty(currentUserState) && !bIsLoggedIn){
            console.log('Sorry,Not login!')
            //this.navigateToLoginPage();//comment for convience
        }
        if(Array.isArray(this.props.treeData)){
            console.log("empty tree data!");
            return;
        }
        else{

            console.log("load tree data!");
            Wpunit.getUnitTreeToPage().then((data) => {
                console.log(data);
                let tmpArr = data.result;
                //console.log(tmpArr);
                onChangeTreeData(tmpArr);

                }).catch((err) => {
                    message.error(err);
                }
            );

            let self = this;
            window.setTimeout(self.forceUpdate(),10000);   
        }
    }

    render() {
    	// if(window.location != 'http://localhost:8080/HomePage'){
    	// 	window.location = 'http://localhost:8080/HomePage';
    	// }
    	// browserHistory.pushState(null,'/waterCondition');
        return (
			<div className={styles.wrapper}>
				<Header />
					<div className={styles.ctt}>
						{this.props.children}
					</div>
				<Footer />
			</div>
        );
    }
}

BasePage.defaultProps = {
	children: React.PropTypes.node,
};

const mapStateToProps = createStructuredSelector({
  treeData:getTreeData(),
});

function mapDispatchToProps(dispatch){
  return{
    onChangeTreeData: (data) => dispatch(changeTreeData(data)),
    onAddChildrenToTreeData: (pk,data) => dispatch(addChildrenToTreeData(pk,data)),
    onUpdatePrjQuantList: (data) => dispatch(updatePrjQuantList(data)),
  };
}

function mapDispatchToPDProps(dispatch){
  return{
    onChangeTreeData: (data) => dispatch(changeTreeData(data)),
    onAddChildrenToTreeData: (pk,data) => dispatch(addChildrenToTreeData(pk,data)),
    onUpdatePrjQuantList: (data) => dispatch(updatePrjQuantList(data)),
    onSetDivPrjData: (data) => dispatch(setDivPrjData(data)),
    onSetPartPrjData: (data) => dispatch(setPartPrjData(data)),
  };
}

function mapDispatchToQCProps(dispatch){
  return{
    onChangeTreeData: (data) => dispatch(changeTreeData(data)),
    onAddChildrenToTreeData: (pk,data) => dispatch(addChildrenToTreeData(pk,data)),
    onUpdatePrjQuantList: (data) => dispatch(updatePrjQuantList(data)),
    onSetDivPrjData: (data) => dispatch(setDivPrjData(data)),
  };
}


export const UpdatedBasePage = connect(mapStateToProps,mapDispatchToProps)(BasePage);
//导出有树数据的新组件
export const QualManaPrjFill = connect(mapStateToProps,mapDispatchToProps)(PrjFill);
export const QualManaProcessData = connect(mapStateToProps,mapDispatchToPDProps)(ProcessData);
export const FirstQualityCheck = connect(mapStateToProps,mapDispatchToQCProps)(QualityCheck);
export const ProgPlanWrapper = connect(mapStateToProps,mapDispatchToProps)(ProgPlan);
export const ProgRealWrapper = connect(mapStateToProps,mapDispatchToProps)(ProgReal);
