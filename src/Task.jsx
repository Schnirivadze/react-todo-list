import React, { useState } from "react";
import deleteIcon from "./assets/delete_icon.svg";
import editIcon from "./assets/edit_icon.svg";
import confirmIcon from "./assets/confirm_icon.svg";

function Task(props) {
    const [editing, setEditing] = useState(false)
    const toggleEditing = () => {

        if (editing) props.editTask(
            props.index,
            document.getElementById(`task-edit-name-${props.index}`).value,
            document.getElementById(`task-edit-deadline-${props.index}`).value
        )
        setEditing(e => e = !e)
    }
    return (
        <div className="task">
            <div className="task-info">
                <input type="checkbox" className="task-completion-checkbox" />
                <div className="task-info-wrapper">
                    <div className="task-label-wrapper">

                        {editing ? (
                            <>
                                <input className="task-edit-name" type="text" defaultValue={props.label} id={`task-edit-name-${props.index}`} />
                                <nav className="task-edit-deadline">Till <input type="date" defaultValue={props.deadline} id={`task-edit-deadline-${props.index}`} /></nav>
                            </>
                        ) : (
                            <>
                                <div className="task-name">{props.label}</div>
                                <div className="task-date">Till {props.deadline}</div>
                            </>
                        )}
                    </div>
                    <div className="task-tags">
                        <div className="task-tag task-tag-red">fix</div>
                        <div className="task-tag task-tag-green">urgent</div>
                        <div className="task-tag task-tag-blue">Non urgent</div>
                        <div className="task-tag task-tag-yellow">plannung</div>
                    </div>
                </div>
            </div>
            <div className="buttons">
                <button className="task-delete-button" onClick={() => props.deleteTask(props.index)}><img src={deleteIcon} alt="Delete" /></button>
                <button className="task-edit-button" onClick={() => toggleEditing()}>{editing ? (<img src={confirmIcon} alt="Save" />) : (<img src={editIcon} alt="Edit" />)}</button>
            </div>
        </div>
    );
}

export default Task;