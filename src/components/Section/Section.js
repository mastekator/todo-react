import React from "react";
import classes from './Section.module.css'
import TaskList from "./TaskList/TaskList";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

const Section = props => {
    let showAddNewTask = null;
    if (props.showAddNewTask) {
        showAddNewTask =
            <div>
                <Input
                    onChange={props.inputNewTask}
                    type='text'>
                </Input>
                <Button onClick={props.addNewTask} type='primary'>Добавить задачу</Button>
                <Button onClick={() => props.toggleAddTask(props.sectionId)} type='default'>Отменить</Button>
            </div>
    }

    return (
        <div className={classes.Section}>
            <h1>{props.sectionName} {props.sectionId}</h1>
            <TaskList
                sectionId={props.sectionId}
                completeTask={props.completeTask}
                tasks={props.tasks}
            >
            </TaskList>
            <Button
                onClick={ () => props.toggleAddTask(props.sectionId)}
                type='addTask'
            >
                <i>+</i>Добавить задачу
            </Button>
            {showAddNewTask}
        </div>
    )
};

export default Section