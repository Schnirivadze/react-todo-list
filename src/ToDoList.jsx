import React, { useState } from "react";
import Task from "./Task";

function ToDoList() {
    const [tasks, setTasks] = useState([
        { id: 0, name: "Create a React project", deadline: "2024-12-31" },
        { id: 1, name: "Learn React", deadline: "2025-01-30" },
        { id: 2, name: "Create a Todo App", deadline: "2025-01-31" }
    ]);

    const addTask = () => {
        // Get the current date
        const currentDate = new Date();

        // Extract year, month, and day
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const day = String(currentDate.getDate()).padStart(2, '0');

        // Format the date as "YYYY-MM-DD"
        const formattedDate = `${year}-${month}-${day}`;
        setTasks([...tasks, {id: tasks.length, name: "Input task description", deadline: formattedDate }]);
    }

    const deleteTask = (index) => {
        const updatedTasks = [...tasks];
        setTasks(updatedTasks.filter(item => item.id != index));
    }

    const editTask = (index, newName, newDeadline) => {
        const updatedTasks = [...tasks];
        const foundindex = updatedTasks.findIndex(item => item.id == index);
        updatedTasks[foundindex].name = newName
        updatedTasks[foundindex].deadline = newDeadline
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
                            index={value.id}
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