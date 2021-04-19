import React from "react"
import "./style.css"

//Components
import TodoItem from "./TodoItem"

//Data
import todoData from "./todoData"

class MainContent extends React.Component{

    constructor(){
        super()
        this.state = {
            todoArray: todoData
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id){
        this.setState(prevState => {
            const updatedTodoArray = prevState.todoArray.map(todo => {
                if(todo.id === id){
                    todo.completed = !todo.completed
                }
                return todo
            })

            return{
                todoArray: updatedTodoArray
            }
        })
    }

    render(){
        
        const todoComponents = this.state.todoArray.map(task => <TodoItem key={task.id} task={task} handleChange={this.handleChange}/>)

        return(
            <div className ="todo-list">
                {todoComponents}
            </div>
        )
    }
    
}

export default MainContent