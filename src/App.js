import logo from './logo.svg';
import React from 'react';
// import { firebase } from "./config/firebase";
// import { FaBeer } from 'react-icons/fa';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
// import {EditIcon} from '@material-ui/icons/Edit';
import { FaEdit , FaRemoveFormat , FaUpload} from 'react-icons/fa';



import './App.css';



//TODO APP - Database
class App extends React.Component{
  constructor(){
    super()
    this.state={ todos : [ {title: "My first todo", edit:false},
                {title: "Will add firebase soonsd23", edit:false},
                {title: "i know the css is bad :p", edit:false},{title: " star the repo", edit:false} ],
                 value: ''} ;
  }
  addtodo = () =>{
    //this.state.todos.push(this.state.value);
    let obj = {title: this.state.value,edit : false}
    this.setState({
        todos: [...this.state.todos,obj],
        value : '',
        edit_value:''
    })
  }
  deltodo = (i) =>{
    // this.state.todos.splice()
    this.state.todos.splice(i,1)
    this.setState({todos: this.state.todos})
  }
  // edittodo = (i) =>{
  //   var newtodo = prompt("edit your todo");
  //    this.state.todos[i] = newtodo
  //    this.setState({todos : this.state.todos})
  // }
  edit_true = (i,v) =>{
    this.state.todos[i].edit = true;
    this.setState({todos: this.state.todos})
    
  }

  update_todo = (index,val,e) =>{
      this.state.todos[index].edit = false
      this.setState({
        todos : this.state.todos
      })
  }
  handle = (e,i) => {
    this.state.todos[i].title = e.target.value;
    this.setState({
      todos: this.state.todos
    })
  }

  render(){
    let {todos , value} = this.state;
    return (
        <div>
          <h2>Todo App</h2>
          
      <div className="container">
        
        <div className="list">
        
        
        <div className="input">
        <TextField id="outlined-basic" label="Add Todo" variant="outlined" type="text" value={value} onChange={(e)=>this.setState({value: e.target.value})}
         placeholder="Add Todo"/>
          <br/>
        <Button id="btn1" variant="contained" color="primary" onClick={this.addtodo}>add todo</Button>
        </div>

          <div className="listtt">
        <ul>{this.state.todos.map((v,i) => {
          return <li key={i}>
          
          {v.edit ? <TextField id="standard-basic" label="Edit your todo"  
 value={v.title} type="text" 
              onChange={(e)=>this.handle(e,i)} />: <p>{v.title}</p>}

          {v.edit ? <button onClick={()=>{this.update_todo(i,v.title)}}><FaUpload/></button>: 
          <button onClick={() =>this.edit_true(i,v.title)}><FaEdit/></button>}

          <button onClick={() =>this.deltodo(i)}><FaRemoveFormat/></button> 
          </li>
        })}</ul>
          </div>

         </div>

      </div></div>
    )
  }
}

export default App;
