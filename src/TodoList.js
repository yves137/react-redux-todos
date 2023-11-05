import { TodoItem } from "./TodoItem"
import { useSelector } from "react-redux"

export function TodoList(){
    const todosList= useSelector(state=> state.todoRed.value)
    return (
        <div className="mt-10">
            {todosList.map(todoItem =><TodoItem todoItem={todoItem}/>)}
        </div>
    )
}