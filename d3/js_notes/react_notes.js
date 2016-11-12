/*What makes React important is the shift from global, template-based layouts to distinct, data-driven components.
render的错误被promise的catch捕获到了
*/
1.this in js
/*These two snippets are different:

// 1
obj.method();

// 2
var method = obj.method;
method();

Learn why and you’ll understand JavaScript.
In my opinion, a lot of this confusion is cleared up by understanding the core function invocation primitive, and then looking at all other ways of invoking a function as sugar on top of that primitive.
The Core Primitive
First, let's look at the core function invocation primitive, a Function's call method[1]. The call method is relatively straight forward.

Make an argument list (argList) out of parameters 1 through the end
The first parameter is thisValue
Invoke the function with this set to thisValue and the argList as its argument list
For example:

function hello(thing) {  
  console.log(this + " says hello " + thing);
}

hello.call("Yehuda", "world") //=> Yehuda says hello world 
Obviously, invoking functions with call all the time would be pretty annoying. JavaScript allows us to invoke functions directly using the parens syntax (hello("world"). When we do that, the invocation desugars:

function hello(thing) {  
  console.log("Hello " + thing);
}

// this:
hello("world")

// desugars to:
hello.call(window, "world"); 
This behavior has changed in ECMAScript 5 only when using strict mode[2]:

// this:
hello("world")

// desugars to:
hello.call(undefined, "world"); 
The short version is: a function invocation like fn(...args) is the same as fn.call(window [ES5-strict: undefined], ...args).
Note that this is also true about functions declared inline: (function() {})() is the same as (function() {}).call(window [ES5-strict: undefined).
The ECMAScript 5 spec says that undefined is (almost) always passed, but that the function being called should change its thisValue to the global object when not in strict mode. This allows strict mode callers to avoid breaking existing non-strict-mode libraries.
var person = {  
  name: "Brendan Eich",
  hello: function(thing) {
    console.log(this + " says hello " + thing);
  }
}

// this:
person.hello("world")

// desugars to this:
person.hello.call(person, "world");
function hello(thing) {  
  console.log(this + " says hello " + thing);
}

person = { name: "Brendan Eich" }  
person.hello = hello;

person.hello("world") // still desugars to person.hello.call(person, "world")

hello("world") // "[object DOMWindow]world"  
Notice that the function doesn't have a persistent notion of its 'this'. It is always set at call time based upon the way it was invoked by its caller.
var person = {  
  name: "Brendan Eich",
  hello: function(thing) {
    console.log(this.name + " says hello " + thing);
  }
}

var boundHello = function(thing) { return person.hello.call(person, thing); }

boundHello("world");  
Even though our boundHello call still desugars to boundHello.call(window, "world"), we turn right around and use our primitive call method to change the this value back to what we want it to be.

var bind = function(func, thisValue) {  
  return function() {
    return func.apply(thisValue, arguments);
  }
}

var boundHello = bind(person.hello, person);  
boundHello("world") // "Brendan Eich says hello world"

var person = {  
  name: "Alex Russell",
  hello: function() { console.log(this.name + " says hello world"); }
}

$("#some-div").click(person.hello.bind(person));

// when the div is clicked, "Alex Russell says hello world" is printed
Because jQuery makes such heavy use of anonymous callback functions, it uses the call method internally to set the this value of those callbacks to a more useful value. For instance, instead of receiving window as this in all event handlers (as you would without special intervention), jQuery invokes call on the callback with the element that set up the event handler as its first parameter.

In several places, I simplified the reality a bit from the exact wording of the specification. Probably the most important cheat is the way I called func.call a "primitive". In reality, the spec has a primitive (internally referred to as [[Call]]) that both func.call and [obj.]func() use.
However, take a look at the definition of func.call:

If IsCallable(func) is false, then throw a TypeError exception.
Let argList be an empty List.
If this method was called with more than one argument then in left to right order starting with arg1 append each argument as the last element of argList
Return the result of calling the [[Call]] internal method of func, providing thisArg as the this value and argList as the list of arguments.
As you can see, this definition is essentially a very simple JavaScript language binding to the primitive [[Call]] operation.

If you look at the definition of invoking a function, the first seven steps set up thisValue and argList, and the last step is: "Return the result of calling the [[Call]] internal method on func, providing thisValue as the this value and providing the list argList as the argument values."

It's essentially identical wording, once the argList and thisValue have been determined.

I cheated a bit in calling call a primitive, but the meaning is essentially the same as had I pulled out the spec at the beginning of this article and quoted chapter and verse.

There are also some additional cases (most notably involving with) that I didn't cover here.

*/
2.setState()
this.setState({locationArr});
this.setState(function(prevState, props) {
  return {
    counter: prevState.counter + props.increment
  };
});
// Correct
this.setState((prevState, props) => ({
  counter: prevState.counter + props.increment
}));

3.text select
inputOnClick(e){
	e.target.focus();
    e.target.setSelectionRange(7,e.target.value.length);
}

4.
this.props.dispatch() doesn't guarantee that you will have proper values in this.props.pets_options immediately after dispatch call. If you want to do something with new props values you have to use componentWillReceiveProps lifecycle method.

componentWillReceiveProps(nextProps) {
    this.setState({pets_options: nextProps.pets_options})
}
//不能立即生效
handleClick(index,rks){
    if(index == 1){
      let itemsToDo = this.check.check(this.props.itemsToDo);
      if(!itemsToDo.length){
        message.info('不存在分项工程');
        return ;
      }
      if(!rks.length){
        message.info('请选择分项工程');
        return ;
      }
      let v = [];
      rks.map((val)=>{
        v.push(itemsToDo[val]);
      });
      this.props.onFilterItemTodo(v);
      //console.log(this.props);
      
      this.updateList(v);
      this.setState({current:1});
    }
    else{

    }
  }
  updateList(v){

    let itemsToDo = v ? v : this.check.check(this.props.filteredItemsTodo);
    this.check.pArrHelper(itemsToDo,'wp',Api,'getCode',true).then((val)=>{
      //console.log(val);
      let res = [];
      val.map((item)=>{
        res = res.concat(this.check.dataFormat(item.children_wp,false,false,`${item.code} ${item.name}/${item.pk}`,item.related_documents));
      });
      //console.log("res",res);
      this.props.onSetItemsToDoChildren(res);
    });
  }


//remove duplicate items with same prop in an array
uniq(a,prop) {
  var seen = {};
  var out = [];
  var len = a.length;
  var j = 0;
  for(var i = 0; i < len; i++) {
       var propVal = a[i][prop];
       if(seen[propVal] !== 1) {
             seen[propVal] = 1;
             out[j++] = a[i];
       }else{
          out.map((val)=>{
            if(val[prop] == propVal)
              val.quantity = Number(val.quantity) + Number(a[i].quantity);
            return val;
          });
       }
  }
  return out;
}

//reducer,actions应该把某一类操作写在一起,如设置数据,增删改查
case SET_DATA:
  switch(action.name){
    case 'partData':
    return state.set('partData',action.data);
    break;
    case 'divData':
    return state.set('divData',action.data);
    break;
    case 'cellData':
    let tmpArr = [];
    action.data.map((dat)=>{
      tmpArr = tmpArr.concat(dat.children_wp);
    });
    tmpArr.map((val)=>{
      val.key = val.pk+"/"+val.code+"/"+val.name;
      return val;
    });
    let cellToSelState = state.set('cellToSel',tmpArr);
    return cellToSelState.set('cellData',action.data);
    default:
    return state;
    break;
  }


  //event pass
  class TableManagementView extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      data:data,
      selectedRowKeys:[],
      show:false,
    }
    var saveTable = document.createEvent('Event');
    saveTable.initEvent('tableSaveClick', true, false);
    window.saveTable = saveTable;
  }
  handleSave(){
    document.dispatchEvent(window.saveTable);
  }
  componentWillUnmount(){
    //remove event
  }
    componentWillMount(){

    }
    componentWillReceiveProps(nextProps){
      if(nextProps.params.id!=this.props.params.id){
      this.setState({show:false});
      }
    }
  onSelectChange(selectedRowKeys) {
      this.setState({ selectedRowKeys }); 
  }
  showList(){
    this.setState({show:true});
  }
  hideList(){
    this.setState({show:false});
  }
  deleteRow(record){
        let index=this.state.data.indexOf(record);
     
        if(index!=null&&index!=undefined){
            this.state.data.splice(index,1);
            this.state.data.map((item,i)=>{
                item.key=i+1;
                item.index=i+1;
              }
            ); 
        }
        this.forceUpdate();
  }
  render() {
    const columns= [
      {
        title: '序号',
        dataIndex: 'index',
        width:60
      },{
        title: '编号',
        dataIndex: 'code',
        width:200
      }, {
        title: '表格名称',
        dataIndex: 'name',
          render: (text,item) => <span title={text}>{text}</span>,

      }, {
          title: '',
            render: (text,record) =>
            <Popconfirm title="确定要删除这个表单吗？" onConfirm={this.deleteRow.bind(this,record)}>
                <a title='删除'> <Icon type="delete" ></Icon></a>
            </Popconfirm> ,
        width:150
      }
    ];
    const { selectedRowKeys } = this.state;
      const rowSelection = {
        selectedRowKeys,
        onChange: this.onSelectChange.bind(this),
      };
    return (
      <div>
        <div className={styles[this.state.show!=true?'show':'hide']}>
            <h3>{this.props.params.id}</h3>
          <Affix  offsetTop={20} target={() => document.getElementById('affix-target')}>
            <div style={{float:'right',marginRight:5}}>
              <Badge dot >
                <Button onClick={this.showList.bind(this)} title='显示提交列表' style={{border: '1px solid #41addd',fontSize:18,color: '#57c5f7',float:'right',marginRight:8}} shape="circle" icon="bars" />
              </Badge>
            </div>
            <Button title='添加到提交列表' style={{border: '1px solid #41addd',fontSize:18,color: '#57c5f7',float:'right',marginRight:8}} shape="circle" icon="plus-square-o" ></Button>
            <Button title='保存' onClick={()=>this.handleSave()} style={{border: '1px solid #41addd',fontSize:18,color: '#57c5f7',float:'right',marginRight:8}} shape="circle" icon="save" />
          </Affix>
              <UpdatedQualityCheckContent />
        </div>
        <div  className={styles[this.state.show==true?'show':'hide']}>
            <h3>{'表单批处理'}</h3>
          <Button onClick={this.hideList.bind(this)} title='返回表单填写' style={{border: '1px solid #41addd',fontSize:18,color: '#57c5f7',float:'right',marginRight:30,marginBottom: 20}} shape="circle" icon="rollback" />
          <Table style={{clear:'both',marginTop:20}}  bordered rowSelection={rowSelection} columns={columns} dataSource={this.state.data} pagination={false} scroll={{y: 430 }} size='middle'/>
          <div style={{bottom:-80,position: 'relative'}}>
            <FlowInfo  bToProcessData={1}/>
          </div>
        </div>
      </div>
    );
  }
}

class QualityCheckContent extends Component{
    constructor(props) {
        super(props);
        this.check = new CheckObj();
        this.state = {
            tabIndex:"14",
            suffix:"",
            isOPenListBox:true,
            isShowPDF:false,
            url:"",
        };
        this.tableSaveClick = this.tableSaveClick.bind(this);
        document.addEventListener("tableSaveClick",this.tableSaveClick,false);
    }
    handleClick(e){
        console.log(e);
        let str = e.name.slice(-1),
            suffix = "";
        if(Number(str)){
            if(e.state[Number(str)-1]==2){
                message.info("该质量表单已被创建!");
                return;
            }
            suffix = str;
        }
        this.setState({
            tabIndex:e.serial_code,
            isOPenListBox: false,
            suffix:suffix
        });
    }
    tableSaveClick(){
        console.log('here...');
    }
    //.....
}


/*event parameters

If you make "x" a global variable, it will solve your problem. Perhaps you are looking for event.detail

new CustomEvent('eventName', {'detail': data})
Instead of data use x and in event listenener you can access x using event.detail
*/
function getSelectionBounds() {
  var x =(bounds["x"].toFixed(2));
 var y=  "xyz";
  var selectionFired = new CustomEvent("selectionFired",{ "detail": {"x":x,"y":y }});

  document.dispatchEvent(selectionFired);
};

document.addEventListener("selectionFired", function (e) {
  alert(e.detail.x+"   "+e.detail.y);
});


Yes, you can use a MessageEvent or a CustomEvent.

Example usage:

//Listen for the event
window.addEventListener("MyEventType", function(evt) {
    alert(evt.detail);
}, false);

//Dispatch an event
var evt = document.createEvent("CustomEvent");
evt.initCustomEvent("MyEventType", true, true, "Any Object Here");