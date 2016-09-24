import React,{ Component } from 'react';

class BaseComponent extends Component{
    render(){
        return <div>BaseComponent</div>
    }
}

//inheritage render in BaseComponent
class InheritComponent extends BaseComponent{
    constructor(props){
        super(props);
        this.state ={

        }
    }
}

export default InheritComponent;