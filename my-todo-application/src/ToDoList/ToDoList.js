import React from "react";

// import ToDoItem from "../ToDoItem/ToDo";
import ToDoItem from "./ToDo/ToDo";
import "./ToDoList.scss";

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            DataisLoaded: false
        }
    }
    //add a todo item to the list using the function
    addToDo() {
        const tf = document.querySelector("#text-title");
        const des = document.querySelector("#text-description");
        const duedate = document.querySelector("#text-duedate");
        const duetime = document.querySelector("#text-duetime");
// if empty throw alert
        if (duetime.value === "" || tf.value === "" || des.value === "" || duedate.value === "" ) {
            alert("Please Enter all data")
        }

        const addtobackend = {
            title: tf.value,
            description: des.value,
            dueDate: duedate.value,
            dueTime: duetime.value
        }
//used to add new todo to the database
        const method = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(addtobackend)
        };
        fetch('http://localhost:9001/Todo', method);
        window.location.reload(false);
    }
    componentDidMount() {
        fetch(
            "http://localhost:9001/Todo")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    todos: json,
                    DataisLoaded: true
                });
            })
    }

    hideit(){
    //document.querySelector("#Onelastbutton");
    console.log("I came here");
    var vt = document.querySelector(".hideit");
   if (vt.style.display === 'none'){
    vt.style.display = 'flex';
    return ;
}
else{
    vt.style.display = 'none';
    return ;

}

    }
    //used to add to the page
    render() {
        return (
            <div className="maindiv">
                <div className="button1">
                <button id = "Onelastbutton" onClick={this.hideit.bind(this)}>Add</button>
                </div>

                <div className="hideit">
                            
                <input id="text-title" placeholder="Enter Title" ></input><br></br>
                <input id="text-description" placeholder="Enter Description"></input><br></br>
                <input id="text-duedate" type="date"></input><br></br>
                <input id="text-duetime" type="time"></input><br></br>
                <button id="addbtn" onClick={this.addToDo.bind(this)}>Add To Do</button>
                </div>
                <ol>
                    {this.state.todos.map((value, key) => { return <ToDoItem todo={value} key={key}></ToDoItem> })}
                </ol>
            </div>
        );
    }
}

export default ToDoList;