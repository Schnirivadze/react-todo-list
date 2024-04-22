import React, { useContext, useState } from "react";
import deleteIcon from "./assets/delete_icon.svg";
import editIcon from "./assets/edit_icon.svg";
import confirmIcon from "./assets/confirm_icon.svg";
import { TagsContext } from "./ToDoList.jsx"

function Task(props) {
    const globalTags = useContext(TagsContext);
    const [editing, setEditing] = useState(false)
    const toggleEditing = () => {

        if (editing) props.editTask(
            props.index,
            document.getElementById(`task-edit-name-${props.index}`).value,
            document.getElementById(`task-edit-deadline-${props.index}`).value
        )
        setEditing(e => e = !e)
    }
    const updateTags = (tag) => {
        const newTags = [...props.tags];
        if (newTags.indexOf(tag) == -1) newTags.push(tag)
        else newTags.splice(newTags.indexOf(tag), 1)
        props.editTags(props.index, newTags)
    }
    const editComplete = (event) => {
        props.editDone(props.index, event.target.checked)
    }
    return (
        <div className="task">
            <div className="task-display">
                <div className="task-info">
                    <input type="checkbox" className="task-completion-checkbox" checked={props.done} onChange={(event) => editComplete(event)} />
                    <div className="task-info-wrapper">
                        <div className="task-label-wrapper">

                            {editing ? (
                                <>
                                    <input className="task-edit-name" type="text" defaultValue={props.label} id={`task-edit-name-${props.index}`} />
                                    <nav className="task-edit-deadline">Till <input type="date" defaultValue={props.deadline} id={`task-edit-deadline-${props.index}`} /></nav>
                                </>
                            ) : (
                                <>
                                    <div className={`task-name ${(props.done) ? "task-name-done" : ""}`}>{props.label}</div>
                                    <div className="task-date">Till {props.deadline}</div>
                                </>
                            )}
                        </div>
                        <div className="task-tags">
                            {props.tags.map((tagName, index) =>
                                <div
                                    key={index}
                                    className={`task-tag task-tag-${globalTags.find((element) => element.name == tagName).color}-selected`}
                                >{tagName}</div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="buttons">
                    <button className="task-delete-button" onClick={() => props.deleteTask(props.index)}><img src={deleteIcon} alt="Delete" /></button>
                    <button className="task-edit-button" onClick={() => toggleEditing()}>{editing ? (<img src={confirmIcon} alt="Save" />) : (<img src={editIcon} alt="Edit" />)}</button>
                </div></div>
            {(editing) ? (
                <div className="task-settings">
                    {globalTags.map((tag, index) =>
                        <div
                            key={index}
                            onClick={() => updateTags(tag.name)}
                            className={`task-tag task-tag-${tag.color}-${(props.tags.indexOf(tag.name) == -1) ? "unselected" : "selected"}`}
                        >{tag.name}</div>
                    )}
                </div>
            ) : (<></>)}


        </div>
    );
}

export default Task;