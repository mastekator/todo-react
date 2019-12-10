import React, {Component} from "react";
import classes from './Tasks.module.css'
import Section from "../../components/Section/Section";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

class Tasks extends Component {
    state = {
        newTaskName: '',
        newSectionName: '',
        showAddNewSection: false,
        activeSectionId: null,
        sections: {
            section: [
                {
                    sectionName: 'Секция 1',
                    sectionId: 1,
                    showAddNewTask: false,
                }
            ],
            tasks: [
                {
                    taskName: 'Пригласить друзей',
                    taskId: 1,
                    sectionId: 1,
                    isComplete: false,
                },
                {
                    taskName: 'Сделать ToDo',
                    taskId: 2,
                    sectionId: 1,
                    isComplete: false,
                }
            ]
        }
    };

    toggleAddTaskHandler = (sectionId) => {
        let section = {...this.state.sections.section};
        section[sectionId - 1].showAddNewTask = !section[sectionId - 1].showAddNewTask;
        this.setState({
            section
        });
    };

    inputNewTaskHandler = (event) => {
        this.setState({
            newTaskName: event.target.value
        })
    };

    addNewTaskHandler = (sectionId) => {
        if (this.state.newTaskName.trim() !== '') {
            this.state.sections.tasks.push({
                taskName: this.state.newTaskName,
                taskId: this.state.sections.tasks.length + 1,
                sectionId: sectionId,
                isComplete: false
            });
            this.setState({
                taskName: this.state.newTaskName,
                taskId: this.state.sections.tasks.length + 1,
                sectionId: sectionId,
                isComplete: false,
            });
            let section = {...this.state.sections.section};
            section[sectionId - 1].showAddNewTask = false;
            this.setState({
                section
            });
        } else {
            console.log('empty field')
        }
    };

    completeTaskHandler = (taskId) => {
        let tasks = {...this.state.sections.tasks};
        tasks[taskId - 1].isComplete = true;
        this.setState({
            tasks
        })
    };

    addNewSectionHandler = () => {
        if (this.state.newSectionName.trim() !== '') {
            this.state.sections.section.push({
                sectionName: this.state.newSectionName,
                sectionId: this.state.sections.section.length + 1
            });
            this.setState({
                sectionName: this.state.newSectionName,
                sectionId: this.state.sections.section.length + 1,
                showAddNewSection: false
            })
        } else {
            console.log('empty field');
        }
    };

    inputNewSectionHandler = (event) => {
        this.setState({
            newSectionName: event.target.value
        })
    };

    toggleAddSectionHandler = () => {
        this.setState({
            showAddNewSection: !this.state.showAddNewSection
        })
    };


    render() {
        let showAddNewSection = null;
        if (this.state.showAddNewSection) {
            showAddNewSection =
                <div>
                    <Input
                        onChange={this.inputNewSectionHandler}
                        type='text'>
                    </Input>
                    <Button onClick={this.addNewSectionHandler} type='primary'>Добавить задачу</Button>
                    <Button onClick={this.toggleAddSectionHandler} type='default'>Отменить</Button>
                </div>
        }

        return (
            <div className={classes.Tasks}>
                <div className={classes.TasksWrapper}>
                    {this.state.sections.section.map((section, index) => {
                        return (
                            <Section
                                completeTask={this.completeTaskHandler}
                                addNewTask={() => this.addNewTaskHandler(section.sectionId)}
                                inputNewTask={this.inputNewTaskHandler}
                                toggleAddTask={this.toggleAddTaskHandler}
                                showAddNewTask={section.showAddNewTask}
                                key={index}
                                sectionId={section.sectionId}
                                sectionName={section.sectionName}
                                tasks={this.state.sections.tasks}npm
                            >
                            </Section>
                        )
                    })}
                    <Button onClick={this.toggleAddSectionHandler} type='addSection'> Добавить секцию </Button>
                    {showAddNewSection}
                </div>
            </div>
        )
    }
}

export default Tasks