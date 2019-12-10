import React from "react";
import classes from './TaskList.module.css'
import Task from "./Task/Task";

const TaskList = props => (
    <ul className={classes.TaskList}>
        {props.tasks.map((task, index) => {
            return task.sectionId === props.sectionId
                ?
                <Task
                    completeTask={props.completeTask}
                    key={index}
                    taskId={task.taskId}
                    taskName={task.taskName}
                    isComplete={task.isComplete}
                />
                :
                ''
        })}

    </ul>
);

export default TaskList
