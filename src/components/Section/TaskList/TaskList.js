import React from "react";
import classes from './TaskList.module.css'
import Task from "./Task/Task";

const TaskList = props => (
    <ul className={classes.TaskList}>
        {props.tasks.map((task, index) => {
            return (
                <Task
                    key={index}
                    taskName={task.taskName}
                >
                </Task>
            )
        })}

    </ul>
);

export default TaskList
