import React, { useState } from "react";
import Task from "./Task";
import deleteIcon from "./assets/delete_icon.svg"
import editIcon from "./assets/edit_icon.svg"

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    function handleInputChange() {

    }
    function name(params) {

    }
    return (<>
        <div className="todolist">
            <div className="controls-wrapper">
                <button className="add-task-button">Add Task</button>
                <select className="task-filter">
                    <option value="All">All</option>
                </select>
            </div>
            <div className="tasks-wrapper">
                <Task Label="Create a React project" Deadline={"Today"} />
                <Task Label="Learn React" Deadline={"Tomorrow"} />
                <Task Label="Create a Todo App" Deadline={"Yesterday"} />
            </div>
        </div>
    </>);
}
export default ToDoList