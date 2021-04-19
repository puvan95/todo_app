import React from "react"

function TodoItem(props){

    const completedStyle = {
        fontStyle : "italic",
        color : "grey",
        textDecoration : "line-through"
    }

    return(
        <div className="todo-items">
            <input 
                type="checkbox"
                checked = {props.task.completed}
                onChange = {()=>props.handleChange(props.task.id)}
            />
            <p style = {props.task.completed? completedStyle : null}>{props.task.name}</p>
        </div>
    )
}

export default TodoItem