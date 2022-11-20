import React from "react";

import "./ToDo.scss"

class ToDoItem extends React.Component {
    //We take the parameters during the Component initialization and it is available in the props parameter in the constructor

    constructor(props) {
        //We have to pass the props to the super always
        super(props);
        this.state = {
            id: props.todo.id,
            title: props.todo.title,
            description: props.todo.description,
            dueDate: props.todo.dueDate,
            dueTime: props.todo.dueTime,
            completed: props.todo.completed,
        }
    }
    toDoUpdater() {
        let cts = this.state.completed;
        if (cts) {
            cts = false;
            // remove donelist
            const curr = document.querySelector(".list-item-" + this.state.id);
            curr.classList.remove("donelist");

        } else {
            cts = true;
            // add donelist
            const curr = document.querySelector(".list-item-" + this.state.id);
            curr.classList.add("donelist");
        }
        this.setState({
            completed: cts

        });
    }


    listClassUpdater() {
        if (this.state.completed) {
            return "donelist";
        }
    }

//runs when the componments state is changes
    componentDidUpdate() {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)
        };
        fetch('http://localhost:9000/Todo/' + this.state.id, requestOptions);
    }
//used to render the elements
    render(props) {
        return <li className={"list-item-" + this.state.id + " " + this.listClassUpdater()}>
            <span className={"title"}>
                Title: {this.state.title}
            </span>
            <span className={"description"}>
                Description: {this.state.description}
            </span>
            <span className={"duedate"}>
                Due Date: {this.state.dueDate}
            </span>
            <span className={"duetime"}>
                Due Time: {this.state.dueTime}
            </span>
            <span>
                <button  className= "everytodobutton" onClick={this.toDoUpdater.bind(this)}>Mark as Completed</button>
            </span>
        </li>
    }
}

export default ToDoItem;