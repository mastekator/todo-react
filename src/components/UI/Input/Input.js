import React from "react";
import classes from './Input.module.css'

const Input = props => {
    const cls = [
        classes.Input,
        classes[props.classStyle]
    ];
    return (
        <input onChange={props.onChange} className={cls.join(' ')} type={props.type}/>
    )
}

export default Input