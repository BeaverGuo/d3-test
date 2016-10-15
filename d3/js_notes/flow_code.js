if(flow.hasOwnProperty("history")){
	moment.locale('zh-CN');
	let len = flow.history.length;
	if(len>=2){
		if(flow.history[len-2].records[0]){
			note1 = flow.history[len-2] ? (flow.history[len-2].records[0].hasOwnProperty("note") ? flow.history[len-2].records[0].note : "") : "";
			apprTime1 = moment(flow.history[len-2] ? flow.history[len-2].records[0].log_on : "").format('YYYY-MM-DD hh:mm:ss');
		}
	}
	if(len>=3){
		if(flow.history[len-3].records[0]){
			note2 = flow.history[len-3] ? (flow.history[len-3].records[0].hasOwnProperty("note") ? flow.history[len-3].records[0].note : "") : "";
			apprTime2 = moment(flow.history[len-3] ? flow.history[len-3].records[0].log_on : "").format('YYYY-MM-DD hh:mm:ss');
		}
	}
	if(len>=4){
		if(flow.history[len-3].records[0]){
			note3 = flow.history[len-4] ? (flow.history[len-4].records[0].hasOwnProperty("note") ? flow.history[len-4].records[0].note : "") : "";
			apprTime3 = moment(flow.history[len-4] ? flow.history[len-4].records[0].log_on : "").format('YYYY-MM-DD hh:mm:ss');
		}
	}
}




//reverse
if(this.check.bIsNotEmpty(flow)){
			
	if(flow.hasOwnProperty("history")){
		moment.locale('zh-CN');
		let history = fromJS(flow.history);
		history = history.toJS();
		history.reverse();
		//console.log("ffff",history);
		if(history[1] && history[1].records[0]){
			note1 = history[1] ? history[1].records[0].note : "";
			apprTime1 = moment(history[1] ? history[1].records[0].log_on : "").format('YYYY-MM-DD a hh:mm:ss ');
		}
		if(history[2] && history[2].records[0]){
			note2 = history[2] ? history[2].records[0].note : "";
			apprTime2 = moment(history[2] ? history[2].records[0].log_on : "").format('YYYY-MM-DD a hh:mm:ss ');
		}
		if(history[3] && history[3].records[0]){
			note3 = history[3] ? history[3].records[0].note : "";
			apprTime3 = moment(history[3] ? history[3].records[0].log_on : "").format('YYYY-MM-DD a hh:mm:ss ');
		}
	}
}