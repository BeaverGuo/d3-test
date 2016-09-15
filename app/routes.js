/**
 * routes.js
 *
 * 整个应用的路径配置
 *
 */
import React from 'react';
import { UpdatedLoginPage } from 'Pages/LoginPage';
import DgnDownloadPage from 'Pages/DgnDownloadPage';
import HomePage from 'Pages/HomePage';
import FeaturePage from 'Pages/FeaturePage';
import MainPage from 'Pages/MainPage';
import AllDisplayPage from 'Pages/AllDisplayPage';
import DesignManaPage from 'Pages/DesignManaPage';
import QualityManaPage from 'Pages/QualityManaPage';
import ProgressManaPage from 'Pages/ProgressManaPage';
import SafetyDetPage from 'Pages/SafetyDetPage';
import DetectVideoPage from 'Pages/DetectVideoPage';
import WaterConditionPage from 'Pages/WaterConditionPage';
import ConcretTempPage from 'Pages/ConcretTempPage';
import BaseDataPage from 'Pages/BaseDataPage';
import SystemManaPage from 'Pages/SystemManaPage';
import UserCenterPage from 'Pages/UserCenterPage';
import TestPage from 'Pages/TestComponentsYin';
import TestApi from 'Pages/TestApi';

//综合展示
import DefaultDesignModelView from 'Pages/AllDisplayPage/DesignModel/DefaultDesignModelView';
import DesignModel from 'Pages/AllDisplayPage/DesignModel/DesignModel';
import DesignModelView from 'Pages/AllDisplayPage/DesignModel/DesignModelView';
import ConstructionPlan from 'Pages/AllDisplayPage/ConstructionProgress/ConstructionPlan';
import ConstructionPlanView from 'Pages/AllDisplayPage/ConstructionProgress/ConstructionPlanView';
import ContrastAnalysis from 'Pages/AllDisplayPage/ConstructionProgress/ContrastAnalysis';
import ContrastAnalysisView from 'Pages/AllDisplayPage/ConstructionProgress/ContrastAnalysisView';
import ProgressDisplay from 'Pages/AllDisplayPage/ConstructionProgress/ProgressDisplay';
import ProgressDisplayView from 'Pages/AllDisplayPage/ConstructionProgress/ProgressDisplayView';
import QualityControl from 'Pages/AllDisplayPage/ConstructionQuality/QualityControl';
import QualityControlView from 'Pages/AllDisplayPage/ConstructionQuality/QualityControlView';
import QualityDisplay from 'Pages/AllDisplayPage/ConstructionQuality/QualityDisplay';
import QualityDisplayView from 'Pages/AllDisplayPage/ConstructionQuality/QualityDisplayView';
import QualityInspectionView from 'Pages/AllDisplayPage/ConstructionQuality/QualityInspectionView';
import InvestmentDisplay from 'Pages/AllDisplayPage/Investment/InvestmentDisplay';
import InvestmentDisplayView from 'Pages/AllDisplayPage/Investment/InvestmentDisplayView';
import InvestmentGeneralSituation from 'Pages/AllDisplayPage/Investment/InvestmentGeneralSituation';
import InvestmentGeneralSituationView from 'Pages/AllDisplayPage/Investment/InvestmentGeneralSituationView';

//设计管理现在就是工程文档
import DefaultDesignManagementView from 'Pages/DesignManaPage/DesignManagement/DefaultDesignManagementView';
import DesignManagement from 'Pages/DesignManaPage/DesignManagement/DesignManagement';
import DesignManagementView from 'Pages/DesignManaPage/DesignManagement/DesignManagementView';
//设计管理现在就是工程文档

//个人中心
import TaskManagement from 'Pages/UserCenterPage/TaskManagement/TaskManagement';
import TaskManagementView from 'Pages/UserCenterPage/TaskManagement/TaskManagementView';
import UsrCenterProAlert from 'Pages/UserCenterPage/processPreAlert/UsrCenterProAlert';
import ProcessPreAlert from 'Pages/UserCenterPage/processPreAlert/processPreAlert';
import ChangeUserPwd from 'Pages/UserCenterPage/changeUserPwd/changeUserPwd';
import ChangeUserPwdView from 'Pages/UserCenterPage/changeUserPwd/changeUserPwdView';


//设计管理

import DrawingNoticeReview from 'Pages/DesignManaPage/DrawingNoticeReview/DrawingNoticeReview';
import DrawingNoticeReviewView from 'Pages/DesignManaPage/DrawingNoticeReview/DrawingNoticeReviewView';
import DrawingReview from 'Pages/DesignManaPage/DrawingReview/DrawingReview';
import DrawingReviewView from 'Pages/DesignManaPage/DrawingReview/DrawingReviewView';


//基础数据
import BaseData from 'Pages/BaseDataPage/BaseData/BaseData';
import BaseDataView from 'Pages/BaseDataPage/BaseData/BaseDataView';
import ModelManagement from 'Pages/BaseDataPage/ModelManagement/ModelManagement';
import CivilEngineeringModelView from 'Pages/BaseDataPage/ModelManagement/Design/CivilEngineeringModelView';
import ElectromechanicalModelView from 'Pages/BaseDataPage/ModelManagement/Design/ElectromechanicalModelView';
import GeologyModelView from 'Pages/BaseDataPage/ModelManagement/Design/GeologyModelView';
import MappingModelView from 'Pages/BaseDataPage/ModelManagement/Design/MappingModelView';
import ConstructionInfoView from 'Pages/BaseDataPage/ModelManagement/Construction/ConstructionInfoView';
import ConstructionModelView from 'Pages/BaseDataPage/ModelManagement/Construction/ConstructionModelView';
import ModelVersionView from 'Pages/BaseDataPage/ModelManagement/Version/ModelVersionView';
import EngineeringData from 'Pages/BaseDataPage/EngineeringData/EngineeringData';
import ConstructionObjectView from 'Pages/BaseDataPage/EngineeringData/ConstructionObjectView';
import ParticipatingUnitView from 'Pages/BaseDataPage/EngineeringData/ParticipatingUnitView';
import PersonnelDataView from 'Pages/BaseDataPage/EngineeringData/PersonnelDataView';
import PositionDataView from 'Pages/BaseDataPage/EngineeringData/PositionDataView';
import QualityCheckTemplateView from 'Pages/BaseDataPage/EngineeringData/QualityCheckTemplateView';
import SystemDataView from 'Pages/BaseDataPage/EngineeringData/SystemDataView';
import InvestInfo from 'Pages/BaseDataPage/InvestInfo/InvestInfo';
import EngineeringQuantityModelView from 'Pages/BaseDataPage/InvestInfo/EngineeringQuantityModelView';
import InviteBidsQuantityModelView from 'Pages/BaseDataPage/InvestInfo/InviteBidsQuantityModelView';
import ContractEngineeringQuantityModelView from 'Pages/BaseDataPage/InvestInfo/ContractEngineeringQuantityModelView';
import ContractEngineeringQuantityModelChangeView from 'Pages/BaseDataPage/InvestInfo/ContractEngineeringQuantityModelChangeView';

//质量管理
import { QualManaPrjFill } from 'Pages/BasePage';
import { QualManaProcessData } from 'Pages/BasePage';
import { FirstQualityCheck } from 'Pages/BasePage';
import ProjectFill from 'Pages/QualityManaPage/projectFill/prjFillTable';
import DividedPrjQuant from 'Pages/QualityManaPage/projectFill/dividedPrj';
import {TabSelect} from 'Pages/QualityManaPage/processData/tabSelect';
import {QualityCheck_1} from 'Pages/QualityManaPage/1stQualityCheck/qualityCheckTables';
import QualityCheckContent from 'Pages/QualityManaPage/1stQualityCheck/qualityCheckTables';
import ModifyUnitTabContainer from 'Pages/QualityManaPage/processData/modifyUnitTabContainer';
//系统管理
import {SysManaUserMana} from 'Pages/SystemManaPage/userMana/userMana';
import {SysManaSysSet} from 'Pages/SystemManaPage/sysSet/sysSet';
import AccountMana from 'Pages/SystemManaPage/userMana/accMana';
import {RoleManaWrapper} from 'Pages/SystemManaPage/userMana/roleMana';
import {AuthManaWrapper} from 'Pages/SystemManaPage/userMana/authMana';
import ChPwdWrapper from 'Pages/SystemManaPage/userMana/chPwd';
import {SysDisplay} from 'Pages/SystemManaPage/sysSet/display';
import {MeasureUnitWrapper} from 'Pages/SystemManaPage/sysSet/unitOfMeasure';
import {FlowTemplateWrapper} from 'Pages/SystemManaPage/sysSet/flowTemp';
//进度管理
import { ProgPlanWrapper } from 'Pages/BasePage';
import { ProgRealWrapper } from 'Pages/BasePage';
import TimeNodeFillContainer from 'Pages/ProgressManaPage/timeNodeFill/timeNodeFillContainer';
import AnualAccountManaContainer from 'Pages/ProgressManaPage/accountMana/accountManaContainer';

export default function createRoutes() {
	return [
		{
			path: '/',
			component: HomePage
    	},
        {
            path: '/Login',
            component: UpdatedLoginPage
        },
        {
            path: '/Download',
            component: DgnDownloadPage
        },
    	{
			path: '/HomePage',
			component: HomePage
    	},
    	{
			path: '/features',
			component: FeaturePage
    	},
    	{
			path: '/allDisplay',
			component: AllDisplayPage,
            indexRoute: { component: DesignModel },
            childRoutes: [
                { path: '/allDisplay/designModel', component: DesignModel, indexRoute:{ component: DefaultDesignModelView },
                    childRoutes: [{ path: '/allDisplay/designModel/MainView/:id', component: DesignModelView}]
                },
                { path: '/allDisplay/progressDisplay', component: ProgressDisplay,
                    childRoutes: [{ path: '/allDisplay/progressDisplay/MainView/:id', component: ProgressDisplayView}]
                },
                { path: '/allDisplay/constructionPlanView', component: ConstructionPlanView,
                  /*  childRoutes: [{ path: '/allDisplay/constructionPlan/MainView/:id', component: ConstructionPlanView}]*/
                },
                { path: '/allDisplay/contrastAnalysis', component: ContrastAnalysis,
                    childRoutes: [{ path: '/allDisplay/contrastAnalysis/MainView/:id', component: ContrastAnalysisView}]
                },
                { path: '/allDisplay/qualityControl', component: QualityControl,
                    childRoutes: [{ path: '/allDisplay/qualityControl/MainView/:id', component: QualityControlView}]
                },
                { path: '/allDisplay/qualityDisplay', component: QualityDisplay,
                    childRoutes: [{ path: '/allDisplay/qualityDisplay/MainView/:id', component: QualityDisplayView},
                                { path: '/allDisplay/qualityDisplay/MainView/show/:id', component: QualityInspectionView}]
                },
                { path: '/allDisplay/investmentDisplay', component: InvestmentDisplay,
                    childRoutes: [{ path: '/allDisplay/investmentDisplay/MainView/:id', component: InvestmentDisplayView}]
                },
                { path: '/allDisplay/investmentGeneralSituation', component: InvestmentGeneralSituation,
                    childRoutes: [{ path: '/allDisplay/InvestmentGeneralSituation/MainView/:id', component: InvestmentGeneralSituationView}]
                },
                { path: '/allDisplay/engineeringDocuments', component: DesignManagement,indexRoute: { component: DefaultDesignManagementView },
                    childRoutes: [{ path: '/allDisplay/engineeringDocuments/MainView/:id', component: DefaultDesignManagementView},
                                { path: '/allDisplay/engineeringDocuments/MainView/show/:id', component: DesignManagementView}]
                }
            ]
    	},
    	{
			path: '/designMana',
			component: DesignManaPage,
            indexRoute: { component: DrawingReview },
            childRoutes: [
/*                { path: '/designMana/designManagement', component: DesignManagement, indexRoute: { component: DefaultDesignManagementView },
                    childRoutes: [{ path: '/designMana/designManagement/MainView/:id', component: DesignManagementView}]
                },*/
                { path: '/designMana/drawingNoticeReview', component: DrawingNoticeReview,indexRoute: { component: DrawingNoticeReviewView },
                    childRoutes: [{ path: '/designMana/drawingNoticeReview/MainView/:id', component: DrawingNoticeReviewView}]
                },
                { path: '/designMana/drawingReview', component: DrawingReview,indexRoute: { component: DrawingReviewView },
                    childRoutes: [{ path: '/designMana/drawingReview/MainView/:id', component: DrawingReviewView}]
                }
            ]
    	},
    	{
			path: '/qualityMana',
            indexRoute: { components: 
                {
                    sideBox:QualManaPrjFill
                } 
            },
			component: QualityManaPage,
			childRoutes:[
            /*{
				path: '/qualityMana/qualityManagement',
				components: {
					sideBox:QualManaQualMana
				},
                childRoutes: [
                    {
                        path: '/qualityMana/qualityMana/hc',
                        components: {
                            mainBox:QMHighcharts
                        },
                    }
                ]
			},*/
            {
                path: '/qualityMana/processData',
                components: {
                    sideBox:QualManaProcessData
                },
                childRoutes: [
                    {
                        path: '/qualityMana/processData/tab1',
                        components: {
                            mainBox:TabSelect
                        },
                    },
                    {
                        path: '/qualityMana/processData/tab2',
                        components: {
                            mainBox:ModifyUnitTabContainer
                        },
                    }
                ]
            },
            
            {
                path: '/qualityMana/unitProjectReport',
                components: {
                	sideBox:QualManaPrjFill
                },
                childRoutes: [
                    {
                        path: '/qualityMana/unitProjectReport/fill',
                        components: {
                            mainBox:ProjectFill
                        },
                    },
                    {
                        path: '/qualityMana/unitProjectReport/divided',
                        components: {
                            mainBox:DividedPrjQuant
                        },
                    }
                ]
            },
            {
                path: '/qualityMana/QualityCheck',
                components: {
                	sideBox:FirstQualityCheck
                },
                childRoutes: [
                    {
                        path: '/qualityMana/QualityCheck/table1',
                        components: {
                            mainBox:QualityCheckContent
                        },
                    }
                ]
            },
            /*{
                path: '/qualityMana/2ndQualityCheck',
                components: {
                	sideBox:SecondQualityCheck
                },
                childRoutes: [
                    {
                        path: '/qualityMana/2ndQualityCheck/table2',
                        components: {
                            mainBox:WordPage000
                        },
                    }
                ]
            }*/


            ]
    	},
    	{
			path: '/progressMana',
            indexRoute: { components: 
                {
                    sideBox:ProgPlanWrapper
                } 
            },
			component: ProgressManaPage,
            childRoutes:[
            {
                path: '/progressMana/progressPlan',
                components: {
                    sideBox:ProgPlanWrapper
                }
            },
            {
                path: '/progressMana/realProgress',
                components: {
                    sideBox:ProgRealWrapper
                }
            },
            {
                path: '/progressMana/timeNodeFill',
                components: {
                    sideBox:TimeNodeFillContainer
                }
            },
            {
                path: '/progressMana/accountMana',
                components: {
                    sideBox:AnualAccountManaContainer
                }
            }
            ]
    	},
    	{
			path: '/safetyDet',
			component: MainPage
    	},
    	{
			path: '/detectVideo',
			component: DetectVideoPage
    	},
    	{
			path: '/waterCondition',
			component: WaterConditionPage
    	},
    	{
			path: '/concretTemp',
			component: ConcretTempPage
    	},
    	{
			path: '/baseData',
			component: BaseDataPage,
            indexRoute: { component: ModelManagement },
			childRoutes: [
			    { path: '/baseData/baseData', component: BaseData, 
                 childRoutes: [{ path: '/baseData/baseData/MainBox/:id', component: BaseDataView }]},
			    { path: '/baseData/modelManagement', component: ModelManagement,indexRoute: { component: MappingModelView }, 
                childRoutes: [{ path: '/baseData/modelManagement/mappingModel', component: MappingModelView },
                            { path: '/baseData/modelManagement/geologyModel', component: GeologyModelView },
                            { path: '/baseData/modelManagement/electromechanicalModel', component: ElectromechanicalModelView },
                            { path: '/baseData/modelManagement/civilEngineeringModel', component: CivilEngineeringModelView },
                            { path: '/baseData/modelManagement/constructionInfo', component: ConstructionInfoView },
                            { path: '/baseData/modelManagement/constructionModel', component: ConstructionModelView },
                            { path: '/baseData/modelManagement/modelVersion', component: ModelVersionView }]},
                            
                { path: '/baseData/engineeringData', component: EngineeringData,indexRoute: { component: PersonnelDataView }, 
                 childRoutes: [{ path: '/baseData/engineeringData/constructionObject', component: ConstructionObjectView },
                            { path: '/baseData/engineeringData/participatingUnit', component: ParticipatingUnitView },
                            { path: '/baseData/engineeringData/personnelData', component: PersonnelDataView },
                            { path: '/baseData/engineeringData/positionData', component: PositionDataView },
                            { path: '/baseData/engineeringData/qualityCheckTemplate', component: QualityCheckTemplateView },
                            { path: '/baseData/engineeringData/systemData', component: SystemDataView }]},
                { path: '/baseData/investInfo', component: InvestInfo ,indexRoute: { component: EngineeringQuantityModelView }, 
                childRoutes: [{ path: '/baseData/investInfo/EngineeringQuantityModel', component: EngineeringQuantityModelView },
                            { path: '/baseData/investInfo/InviteBidsQuantityModel', component: InviteBidsQuantityModelView },
                            { path: '/baseData/investInfo/ContractEngineeringQuantityModel', component: ContractEngineeringQuantityModelView },
                            { path: '/baseData/investInfo/ContractEngineeringQuantityModelChange', component: ContractEngineeringQuantityModelChangeView }]},
  			]

    	},
    	{
			path: '/systemMana',
            indexRoute: { components: 
                {
                    sideBox:SysManaUserMana
                } 
            },
			component: SystemManaPage,
            childRoutes:[
            {
                path: '/systemMana/userManagement',
                components: {
                    sideBox:SysManaUserMana, 
                },
                childRoutes: [
                    {
                        path: '/systemMana/userMana/accMana',
                        components: {
                            mainBox:ChPwdWrapper
                        },
                    },
                    {
                        path: '/systemMana/userMana/roleMana',
                        components: {
                            mainBox:RoleManaWrapper
                        },
                    },
                    {
                        path: '/systemMana/userMana/authMana',
                        components: {
                            mainBox:AuthManaWrapper
                        },
                    },
                    {
                        path: '/systemMana/userMana/chPwd',
                        components: {
                            mainBox:ChPwdWrapper
                        },
                    }
                ]
            },
            {
                path: '/systemMana/sysSet',
                components: {
                    sideBox:SysManaSysSet
                },
                childRoutes: [
                    {
                        path: '/systemMana/sysSet/disp',
                        components: {
                            mainBox:SysDisplay
                        },
                    },
                    {
                        path: '/systemMana/sysSet/unit',
                        components: {
                            mainBox:MeasureUnitWrapper
                        },
                    },
                    {
                        path: '/systemMana/sysSet/flow',
                        components: {
                            mainBox:FlowTemplateWrapper
                        },
                    },
                    {
                        path: '/systemMana/sysSet/rule',
                        components: {
                            mainBox:SysDisplay
                        },
                    },
                    {
                        path: '/systemMana/sysSet/dir',
                        components: {
                            mainBox:SysDisplay
                        },
                    }
                ]
            }
            ]
    	},
    	{
			path: '/userCenter',
			component: UserCenterPage,
            indexRoute: { component: TaskManagement },
            childRoutes: [
                { path: '/userCenter/taskManagement', component: TaskManagement,
                    childRoutes: [{ path: '/userCenter/taskManagement/MainView/:id', component: TaskManagementView}]
                },
                { path: '/userCenter/processAlert', component: UsrCenterProAlert,
                    childRoutes: [{ path: '/userCenter/processAlert/MainView/:id', component: ProcessPreAlert}]
                },
                { path: '/userCenter/userSet', component: ChangeUserPwdView,
                    childRoutes: [{ path: '/userCenter/userSet/MainView', component: ChangeUserPwdView}]
                }
            ]
    	},
    	{
			path: '/testPage',
			component: TestPage,
    	},
        {
            path: '/testApi',
            component: TestApi
        }
	];
}
