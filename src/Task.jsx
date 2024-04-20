import React, { useState } from "react";
import deleteIcon from "./assets/delete_icon.svg"
import editIcon from "./assets/edit_icon.svg"

function Task(props) {
    return (
        <div className="task">
            <div className="task-info">
                <input type="checkbox" className="task-completion-checkbox" />
                <div className="task-info-wrapper">
                    <div className="task-name">{props.Label}</div>
                    <div className="task-date">Till {props.Deadline}</div>
                </div>
            </div>
            <div className="buttons">
                <button className="task-delete-button"><img src={deleteIcon} /></button>
                <button className="task-edit-button"><img src={editIcon} /></button>
            </div>
        </div>
    );
}
export default Task