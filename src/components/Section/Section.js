import React from "react";
import classes from './Section.module.css'
import TaskList from "./TaskList/TaskList";

const Section = props => (
    <div className={classes.Section}>
        <h1>{props.sectionName}</h1>
        <TaskList
            tasks={props.tasks}
        >

        </TaskList>
    </div>
);

export default Section