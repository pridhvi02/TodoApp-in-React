import React, { Component } from "react";
import "./TodoApp.css";
export default class TodoApp extends Component {
  state = {
    input: "",
    items:[]
  };

  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
    // console.log(this.state.input);
  };

  storeitems = (event)=>{

    event.preventDefault()

    const {input , items} = this.state

    this.setState({
      items: [...items, input],
      input: " "
    })
  }

  deleteItem=(key)=>{
    const allItems = this.state.items

    allItems.splice(key,1)

    this.setState({
      items: allItems
    })
  }


  render() {
    const { input, items } = this.state;
    return (
      <div className="todo-container">
        <h1>Todo App</h1>
        <form className="input-section" onSubmit={this.storeitems}>
          <input
            type="text"
            value={input}
            onChange={this.handleChange}
            placeholder="enter something..."
          />
        </form>

        <ul>
          {items.map((data,index)=>(
            <li key={index}>
              {data}<i className="fa-regular fa-trash-can" onClick={()=>this.deleteItem(index)}></i>
            </li>
          ))}
        </ul>
      </div> 
    );
  }
}
