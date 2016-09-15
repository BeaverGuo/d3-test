
class CheckObj {
	constructor() {
		
  	}
    bIsNotEmpty(obj) {
		if(!obj)
			return false;
		if(Object.keys(obj))
			return Object.keys(obj).length;
		else
			return false;
	}
  	check(obj){
  		if(this.bIsNotEmpty(obj)){
  		  obj = obj.toJS ? obj.toJS() : obj||[];
  		}
  		return obj;
  	}

  	checkObj(obj){
  		if(this.bIsNotEmpty(obj)){
  		  obj = obj.toJS ? obj.toJS() : obj||{};
  		}
  		return obj;
  	}

  	//单元工程数据处理
  	dataFormat(data,hasDate,isReal){
  		if(Array.isArray(data)){
		  	data.map((val)=>{
		  		let newVal = JSON.parse(val.attributes);
		  		console.log(newVal);
		  		let tmpArr = [];
		  		if(newVal.extra['桩号范围'].includes('～'))
					tmpArr = newVal.extra['桩号范围'].split('～');
				else
					tmpArr = newVal.extra['桩号范围'].split('~');
				val.stakeScopeStart = tmpArr[0];
				val.stakeScopeEnd = tmpArr[1];
				val.height_area = newVal.extra['高程'];
				val.yplan_code = newVal.extra['年度节点'];
				if(hasDate){
					if(isReal){
						if(this.bIsNotEmpty(newVal))
							if(newVal.hasOwnProperty('basic'))
								if(newVal.basic.hasOwnProperty('tech_parmas'))
									if(newVal.basic.tech_parmas.hasOwnProperty('actual_process'))
										if(newVal.basic.tech_parmas.actual_process.hasOwnProperty('start_time')){
											val.start_time = newVal.basic.tech_parmas.actual_process.start_time.slice(0,10);
											val.end_time = newVal.basic.tech_parmas.actual_process.end_time.slice(0,10);
										}
					}
					else{
						if(this.bIsNotEmpty(newVal))
							if(newVal.hasOwnProperty('basic'))
								if(newVal.basic.hasOwnProperty('tech_parmas'))
									if(newVal.basic.tech_parmas.hasOwnProperty('plan_process'))
										if(newVal.basic.tech_parmas.plan_process.hasOwnProperty('start_time')){
											val.start_time = newVal.basic.tech_parmas.plan_process.start_time.slice(0,10);
											val.end_time = newVal.basic.tech_parmas.plan_process.end_time.slice(0,10);
										}
					}
								
				}
				return val;
			});
  		}
	  	
		return data;
  	}
}

export default CheckObj;