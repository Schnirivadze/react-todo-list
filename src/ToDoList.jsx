import React, { createContext, useState } from "react";
import Task from "./Task";


export const TagsContext = createContext();
function ToDoList() {
    const [tagFilter, setFilter] = useState("All");
    const [tags, setTags] = useState([
        { name: "fix", color: "yellow" },
        { name: "urgent", color: "red" },
        { name: "job", color: "aqua" },
        { name: "family", color: "green" },
        { name: "personal", color: "blue" },
        { name: "work", color: "gray" },
        { name: "health", color: "purple" },
        { name: "shopping", color: "violet" },
        { name: "leisure", color: "pink" }
    ]);
    const [tasks, setTasks] = useState([
        { id: 0, name: "Create a React project", deadline: "2024-12-31", tags: ["leisure", "urgent", "work", "job"] },
        { id: 1, name: "Learn React", deadline: "2025-01-30", tags: ["fix", "urgent", "family", "personal"] },
        { id: 2, name: "Create a Todo App", deadline: "2025-01-31", tags: ["fix", "urgent", "shopping", "health"] }
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
        setTasks([...tasks, { id: tasks.length, name: "Input task description", deadline: formattedDate, tags: ["personal"] }]);
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

    const editTags = (index, newTags) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].tags = newTags;
        setTasks(updatedTasks);
    }

    let sortedTasks;
    if (tagFilter !== "All") {
        sortedTasks = [...tasks].filter((task) => task.tags.indexOf(tagFilter) !== -1).sort(compareDeadlines);
    } else {
        sortedTasks = [...tasks].sort(compareDeadlines);
    }
    return (
        <>
            <div className="todolist">
                <div className="controls-wrapper">
                    <button className="add-task-button" onClick={addTask}>Add Task</button>
                    <select onChange={(event)=>{setFilter(event.target.value)}} className="task-filter">
                        <option value="All">All</option>
                        {tags.map((tag,id)=>(
                            <option key={id} value={tag.name}>{tag.name}</option>
                        ))}
                    </select>
                </div>
                <div className="tasks-wrapper">
                    <TagsContext.Provider value={tags}>
                        {sortedTasks.map((value, index) => (
                            <Task
                                key={index}
                                index={value.id}
                                label={value.name}
                                deadline={value.deadline}
                                tags={value.tags}
                                deleteTask={deleteTask}
                                editTask={editTask}
                                editTags={editTags}
                            />
                        ))}
                    </TagsContext.Provider>
                </div>
            </div>
        </>
    );
}

export default ToDoList;