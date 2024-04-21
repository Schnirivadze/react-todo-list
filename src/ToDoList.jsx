import React, { useState } from "react";
import Task from "./Task";

function ToDoList() {
    const [tasks, setTasks] = useState([
        { name: "Create a React project", deadline: "2024-12-31" },
        { name: "Learn React", deadline: "2025-01-30" },
        { name: "Create a Todo App", deadline: "2025-01-31" }]);
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

    // Function to compare task deadlines
    const compareDeadlines = (task1, task2) => {
        const deadline1 = new Date(task1.deadline);
        const deadline2 = new Date(task2.deadline);
        return deadline1 - deadline2;
    };

    // Sort tasks by deadline
    const sortedTasks = [...tasks].sort(compareDeadlines);

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
                    {sortedTasks.map((value, index) => (
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