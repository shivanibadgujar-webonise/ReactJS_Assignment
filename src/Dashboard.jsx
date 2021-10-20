import { Link } from "react-router-dom";
import React, { Component } from "react";
import TodoItems from "./TodoItems";

function TodoList()
{
    return(

        <>
       
        </>
    )
}

/*
class TodoList extends Component {  
        constructor(props) {
          super(props);

          this.state ={
              items: []
          };
       
          this.addItem = this.addItem.bind(this);
        }
        addItem(e) {    

            if (this._inputElement.value !== "") {
                var newItem = {
                  text: this._inputElement.value,
                  key: Date.now()
                };
             
                this.setState((prevState) => {
                  return { 
                    items: prevState.items.concat(newItem) 
                  };
                });
               
                this._inputElement.value = "";
              }
               
              console.log(this.state.items);
                 
              e.preventDefault();
 
        }
        
      
  render() {
    return (
        <>
      <div className="todoListMain">
          <h1 className="todoTitle" >TO-DO LIST</h1>
        <div className="header">
          <form onSubmit={this.addItem}>              
            <input  ref={(a) => this._inputElement = a} placeholder="enter task">
            </input>
            <button type="submit">add</button>
          </form>
        </div>

        <TodoItems entries={this.state.items}/>
      </div>
      <div className="redirectLink">
      <Link to="/" >Logout </Link>
      </div>
     
      </>
    );
  }
}
*/ 
export default TodoList;
