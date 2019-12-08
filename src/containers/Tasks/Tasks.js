import React, {Component} from "react";
import classes from './Tasks.module.css'
import Section from "../../components/Section/Section";

class Tasks extends Component {
    state = {
        sections: {
            section: [
                {
                    sectionName: 'Секция 1',
                    sectionId: 1
                }
            ],
            tasks: [
                {
                    taskName: 'Пригласить друзей',
                    taskId: 1,
                },
                {
                    taskName: 'Сделать ToDo',
                    taskId: 2,
                }
            ]
        }
    };


    render() {
        return (
            <div className={classes.Tasks}>
                <div className={classes.TasksWrapper}>
                    {this.state.sections.section.map((section, index) => {
                        return (
                            <Section
                                key={index}
                                sectionName={section.sectionName}
                                tasks={this.state.sections.tasks}
                            >

                            </Section>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Tasks