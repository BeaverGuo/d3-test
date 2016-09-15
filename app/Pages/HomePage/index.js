/*
 * HomePage
 *
 * at the '/homePage' route
 *
 */

import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.css';
import Highcharts from 'highcharts';
import ReactHighcharts from 'react-highcharts';
import 'highcharts-heatmap';//引入highcharts导出控件
import HighchartsMore from 'highcharts-more';
import Img from './u41.jpg';
import Img2 from './u52.jpg';
import TasksBox from '../../Components/TasksBox';
import { Button,Icon} from 'antd';
import systemsetting from '../../Ajax/Config/config.json';

var list = [
   // {id:0,name:'baseData',text:'基础数据',path:'/baseData/baseData'},
    {id:1,time:'2014/12/31 08:56',name:'modelManagement',text:'Z01011021003—土方开挖验评土方开挖验评',state:'1'},
    {id:2,time:'2014/12/01 08:56',name:'engineeringData',text:'Z00624061001—通风洞土方开挖',state:'2'},
    {id:3,time:'2014/11/31 08:56',name:'engineeringData',text:'Z00624061002—通风洞土方开挖',state:'3'},
    {id:4,time:'2014/11/01 08:56',name:'engineeringData',text:'Z00624061003—通风洞土方开',state:'4'},
    {id:1,time:'2014/10/31 08:56',name:'modelManagement',text:'Z01011021003—土方开挖验评土方开挖验评',state:'1'},
    {id:2,time:'2014/10/01 08:56',name:'engineeringData',text:'Z00624061001—通风洞土方开挖',state:'2'},
        {id:2,time:'2014/10/01 08:56',name:'engineeringData',text:'Z00624061001—通风洞土方开挖',state:'2'},
            {id:2,time:'2014/10/01 08:56',name:'engineeringData',text:'Z00624061001—通风洞土方开挖',state:'2'},
                {id:2,time:'2014/10/01 08:56',name:'engineeringData',text:'Z00624061001—通风洞土方开挖',state:'2'},
                    {id:2,time:'2014/10/01 08:56',name:'engineeringData',text:'Z00624061001—通风洞土方开挖',state:'2'},
                        {id:2,time:'2014/10/01 08:56',name:'engineeringData',text:'Z00624061001—通风洞土方开挖',state:'2'},
                            {id:2,time:'2014/10/01 08:56',name:'engineeringData',text:'Z00624061001—通风洞土方开挖',state:'2'},
                                {id:2,time:'2014/10/01 08:56',name:'engineeringData',text:'Z00624061001—通风洞土方开挖',state:'2'},
                                    {id:2,time:'2014/10/01 08:56',name:'engineeringData',text:'Z00624061001—通风洞土方开挖',state:'2'},

 ];
class HomePage extends React.Component {

	constructor(props) {
    	super(props);
        this.state = {chart: {},show:false};
        HighchartsMore(ReactHighcharts.Highcharts);
    }
	afterRender(){
	}
    componentDidMount() {
    $('#home').mCustomScrollbar({
        mouseWheel: {
            preventDefault: true
        },
        theme:"dark-2",
        scrollInertia: 0,

        advanced: {
            autoExpandHorizontalScroll: true,
            updateOnImageLoad: false,
            updateOnContentResize: false
        },
    });
    }
	add(){
	    let chart = this.refs.chart4.getChart();
	    chart.series[0].addPoint(500);
	}
    open(){
        this.setState({show:true})
    }
    close(){
        this.setState({show:false})
    }
    more(){

    }
    onSelection(text,pk){
        console.log(text);
    }

	render() {
		let data1={};
		data1.tag="质量管理数据分析";
		data1.config = {
		 chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: '杨房沟水电站质量验评表完成分析'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        credits: {
            enabled: false //去掉highcharts logo
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
                }
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
		data2.tag="投资管理数据分析";
		data2.config = {
				 chart: {
            type: 'column'
        },
        title: {
            text: '杨房沟水电站计划投资展示'
        },
        subtitle: {
            text: '——BIM数据中心'
        },
        credits: {
            enabled: false //去掉highcharts logo
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

		let data3={};
		data3.tag="安全信息监测";
		data3.config = {
		title: {
            text: '大坝安全监测仪器安装系统',
            x: -20 //center
        },
        subtitle: {
            text: '--总承包BIM数据中心',
            x: -20,
        },
        legend: {
            enabled: false
        },
   		tooltip: {
            pointFormat: '安装数量: <b>{point.y} 个</b>',
        },
		chart: {
            type: 'column'
        },
        // exporting:{
        //             enabled:false
        //         },
        credits: {
            enabled: false //去掉highcharts logo
        }, 
        yAxis: {
            title: {
                text: '安装数量（个）'
            }
        },
		  xAxis: {
		    categories: ['导流洞', '进水口边坡', '大坝', '主厂房','副厂房', '进厂公路', '进厂交通洞', '左岸边坡', '右岸边坡'],
		    labels: {
                rotation: -45,
                align: 'right',
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
		  },
		  series: [{
		    data: [235, 40, 142, 167.5, 125, 121, 116, 117, 150],
		    dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                x: 0,
                y: 5,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif',
                    textShadow: '0 0 3px black'
                }
            }
		  }]
		};

		let data4={};
		data4.tag="混凝土智能温控";
		data4.config = {

        chart: {
            type: 'heatmap',
            marginTop: 40,
            marginBottom: 40
        },


        title: {
            text: 'Sales per employee per weekday'
        },

        xAxis: {
            categories: ['Alexander', 'Marie', 'Maximilian', 'Sophia', 'Lukas', 'Maria', 'Leon', 'Anna', 'Tim', 'Laura']
        },

        yAxis: {
            categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            title: null
        },

        colorAxis: {
            min: 0,
            minColor: '#FFFFFF',
            maxColor: Highcharts.getOptions().colors[0]
        },

        legend: {
            align: 'right',
            layout: 'vertical',
            margin: 0,
            verticalAlign: 'top',
            y: 25,
            symbolHeight: 320
        },

        tooltip: {
            formatter: function () {
                return '<b>' + this.series.xAxis.categories[this.point.x] + '</b> sold <br><b>' +
                    this.point.value + '</b> items on <br><b>' + this.series.yAxis.categories[this.point.y] + '</b>';
            }
        },
        // series: [{
        //     name: 'Sales per employee',
        //     borderWidth: 1,
        //     data: [[0, 0, 10], [0, 1, 19], [0, 2, 8], [0, 3, 24], [0, 4, 67], [1, 0, 92], [1, 1, 58], [1, 2, 78], [1, 3, 117], [1, 4, 48], [2, 0, 35], [2, 1, 15], [2, 2, 123], [2, 3, 64], [2, 4, 52], [3, 0, 72], [3, 1, 132], [3, 2, 114], [3, 3, 19], [3, 4, 16], [4, 0, 38], [4, 1, 5], [4, 2, 8], [4, 3, 117], [4, 4, 115], [5, 0, 88], [5, 1, 32], [5, 2, 12], [5, 3, 6], [5, 4, 120], [6, 0, 13], [6, 1, 44], [6, 2, 88], [6, 3, 98], [6, 4, 96], [7, 0, 31], [7, 1, 1], [7, 2, 82], [7, 3, 32], [7, 4, 30], [8, 0, 85], [8, 1, 97], [8, 2, 123], [8, 3, 64], [8, 4, 84], [9, 0, 47], [9, 1, 114], [9, 2, 31], [9, 3, 48], [9, 4, 91]],
        //     dataLabels: {
        //         enabled: false,
        //         color: '#000000'
        //     }
        // }]
		};
		return (
			<div id='home' className={styles.home}>
                <div className={styles[this.state.show!=true?'show':'hidden']}>
                      <div className={styles.img} >
                        <img className={styles.imgBox}  onClick={this.open.bind(this)} src={Img}  />

                    </div>
                    <div className={styles.task}>
                       <TasksBox more={this.more.bind(this)} onSelection={this.onSelection.bind(this)} List={list} />
                    </div>
                    <div className={styles.charts} ref='charts'>
                        <HomeChart {...data1}/>
                        <HomeChart {...data2}/>
                        <HomeChart {...data3}/>
                        <HomeChart {...data4}/>
                    </div>
                    <div className={styles.gantt}>
                        <h3 >{'施工年度计划表'}</h3>
                        <iframe  className={styles.ganttBox} src={systemsetting.ganttAddress} width="100%" height="100%"/>
                    </div>
                </div>

                <div className={styles[this.state.show==true?'show':'hidden']}>
                    <div className={styles.details}>
                        <h3> <span style={{float: 'right',cursor:'pointer'}} title='返回' onClick={this.close.bind(this)} > <Icon type="rollback" ></Icon></span></h3>
                        <h1 style={{ textAlign: 'center',marginBottom:'30px'}}>{'杨房沟水电站工程概况'}</h1>
                        <p><img style={{ float: 'right',width: '600px'}}  src={Img2}></img>杨房沟水电站位于四川省凉山彝族自治州木里县境内的雅砻江中游河段上，是规划中该河段的第6级水电站，上距孟底沟水电站37km，下距卡拉水电站33km。杨房沟水电站控制流域面积8.088万km²，多年平均流量896m³/s，年径流量282.76亿m³。电站距西昌和成都的公路距离分别为236km、590km。杨房沟水电站工程的开发任务为发电，电站正常蓄水位2094m，相应库容为4.558亿m³，死水位2088m，相应库容为4.0195亿m³，电站调节库容为0.5385亿m³，电站总装机容量1500MW，安装4台375MW的混流式水轮发电机组。杨房沟水电站与两河口水电站联合运行时，保证出力523.3MW，多年平均发电量为68.557亿kW.h，装机利用小时数4570h。</p>
                        <p>杨房沟水电站为一等工程，工程规模为大（1）型。枢纽主要建筑物由挡水建筑物、泄洪消能建筑物及引水发电系统等组成。挡水建筑物采用混凝土双曲拱坝，最大坝高155m；泄洪消能建筑物为坝身表、中孔＋坝后水垫塘及二道坝，泄洪建筑物布置在混凝土坝身，消能建筑物布置在坝后；引水发电系统布置在河道左岸山体内，地下厂房采用首部开发方式，尾水洞出口布置在杨房沟沟口上游侧。混凝土双曲拱坝、泄洪及消能建筑物、引水发电系统等主要水工建筑物为1级建筑物，坝后水垫塘及其它次要建筑物为3级建筑物。</p>
                        <p>混凝土双曲拱坝最大坝高155m，坝顶高程2102m。拱坝水平拱圈采用抛物线型，坝顶中心线弧长362.17m，最大中心角87.01°。拱冠梁顶厚9m，拱冠梁底厚32m，最大拱端厚度34.96m。</p>
                        <p>泄洪及消能建筑物采用坝身3个表孔+4个中孔+坝后水垫塘及二道坝。坝身表孔为开敞式溢流表孔，溢流面采用WES堰，堰顶高程2080m，表孔孔口尺寸12m×14m（宽×高）。坝身中孔进出口底高程均为2029m，进口孔口尺寸为5.5 m×8m（宽×高），出口孔口尺寸5.5 m×7m（宽×高）。坝后水垫塘紧邻拱坝下游布置，采用底部为平底的复式梯形断面，底板和两岸边墙均采用钢筋混凝土衬砌，衬砌厚度2~3m，两岸边坡坡比为1：0.3。水垫塘自拱坝坝趾至二道坝前总长度约为197.68m。水垫塘末端设置二道坝，为使出塘水流归槽平顺，二道坝轴线与水垫塘斜交。二道坝坝顶高程为1988.5m，最大坝高38.5m，采用上游坝坡为1：0.3，下游坝坡为1：0.5的实体溢流式重力坝。二道坝后河床采用混凝土护坦进行保护，保护长度30m。</p>
                        <p>引水发电系统主要建筑物由进水口、压力管道、地下厂房、主变洞、尾水调压室、尾水隧洞、尾水闸门室等组成。引水系统采用单机单洞布置。进水口采用岸塔式，总宽度104m，长28m，高约45m。压力管道为竖井式，内径10m，长度217~258m，除下平段近厂段50m采用钢板衬砌外，其余洞段均采用钢筋混凝土衬砌。地下厂房纵轴线方位N5°E。主副厂房、主变洞、尾水调压室三大洞室平行布置，主副厂房洞的最大开挖尺寸230m×30m×75.57m（长×宽×高），主变洞室最大开挖尺寸156m×18m×27.7m（长×宽×高）。尾水系统采用一洞两机布置，主变洞下游设尾水调压室。尾水调压室采用阻抗长廊式，1#和2#调压室尺寸分别为85m×20m×64m（长×宽×高）和67.5m×20m×64m（长×宽×高）。两条尾水洞断面采用15m×16.5m（宽×高）的城门洞形，长度602~768m，采用钢筋混凝土衬砌。尾水洞出口检修闸门置于岸坡内，设尾水闸门室。地面开关站布置在进水口上游侧约100m处的山坡上，建基高程为2102m，场地开挖尺寸158.5m×20m（长×宽）。</p>
                    </div>
                </div>
			</div>
		);
	}
}

export default HomePage;

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
	        	<span >{this.props.tag}</span>
	        </div>
	  		<ReactHighcharts config={this.props.config} style={{width:'600px',height:'370px',marginLeft: '10px',marginBottom: '10px'}} ref="chart4"  callback = {this.afterRender}></ReactHighcharts>
        </div>
      )
  }
}
