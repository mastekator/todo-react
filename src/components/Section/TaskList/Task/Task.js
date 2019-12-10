import React from "react";
import classes from './Task.module.css'
import Button from "../../../UI/Button/Button";

const Task = props => {
    let complete = '';
    if (props.isComplete) {
        complete = 'complete';
    }
    const cls = [
        classes.Task,
        classes[complete]
    ];

    return (
        <li className={cls.join(' ')}>
            <p>
                <Button
                    onClick={() => props.completeTask(props.taskId)}
                    type=''
                    disabled={props.isComplete}
                >
                    ОК
                </Button>
                {props.taskName}</p>
            <img
                src="https://cdn.dribbble.com/users/162405/avatars/small/e7eee87a3ff47698761874fe291779ff.jpg?1488991848"
                alt=''/>
        </li>

    )
};


export default Task