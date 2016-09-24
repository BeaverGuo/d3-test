
import React,{ Component } from 'react';
import HomePage from '../HomePage';


//test for inheritage code
class InheriHomePage extends HomePage{
    constructor(props){
        super(props);
        this.pageFunction = "Inheritage";
    }

    render(){
        //super.testInheritage();
        return <div>I am a child!</div>
    }
}

//test for inheritage code

export default InheriHomePage;