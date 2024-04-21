import React, { useState } from "react";
import Task from "./Task";

function ToDoList() {
    const [tasks, setTasks] = useState([
        { name: "Create a React project", deadline: "2018-12-31" },
        { name: "Learn React", deadline: "2018-12-31" },
        { name: "Create a Todo App", deadline: "2018-12-31" }]);
    const [newTask, setNewTask] = useState("");

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    }

    const addTask = () => {
        if (newTask.trim() !== "") {
            setTasks([...tasks, newTask]);
            setNewTask("");
        }
    }

    const deleteTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    }
    const editTask = (index, newName, newDeadline) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].name = newName
        updatedTasks[index].deadline = newDeadline
        console.log("edited")
        setTasks(updatedTasks);
    }
    // const moveTaskUp = (index) => {
    //     if (index > 0) {
    //         const updatedTasks = [...tasks];
    //         const temp = updatedTasks[index];
    //         updatedTasks[index] = updatedTasks[index - 1];
    //         updatedTasks[index - 1] = temp;
    //         setTasks(updatedTasks);
    //     }
    // }

    // const moveTaskDown = (index) => {
    //     if (index < tasks.length - 1) {
    //         const updatedTasks = [...tasks];
    //         const temp = updatedTasks[index];
    //         updatedTasks[index] = updatedTasks[index + 1];
    //         updatedTasks[index + 1] = temp;
    //         setTasks(updatedTasks);
    //     }
    // }

    return (
        <>
            <div className="todolist">
                <div className="controls-wrapper">
                    <button className="add-task-button" onClick={addTask}>Add Task</button>
                    <select className="task-filter">
                        <option value="All">All</option>
                    </select>
                </div>
                <div className="tasks-wrapper">
                    {tasks.map((value, index) => (
                        <Task
                            key={index}
                            index={index}
                            label={value.name}
                            deadline={value.deadline}
                            deleteTask={deleteTask}
                            editTask={editTask}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default ToDoList;