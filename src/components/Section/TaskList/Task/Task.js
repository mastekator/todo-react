import React from "react";
import classes from './Task.module.css'

const Task = props => (
    <li className={classes.Task}>
        <p>{props.taskName}</p>
        <img src="https://cdn.dribbble.com/users/162405/avatars/small/e7eee87a3ff47698761874fe291779ff.jpg?1488991848"/>
    </li>
)


export default Task