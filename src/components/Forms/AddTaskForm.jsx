import React from 'react';
import Input from './Input';
import Select from './Select';
import DatePicker from './DatePicker';

const AddTaskForm = () => {
    return (
        <div>
            <Input id={"taskTitle"} type={"text"} label={"Enter Task Title"}/>
            <Select id={"taskCategory"} label={"Select Task Category"} values={["College","Work","Personal"]}/>
            <Select id={"taskPriority"} label={"Select Task Priority"} values={["Low","Medium","High"]}/>
            <DatePicker id={"dueDate"} type={"date"} label={"Set Due Date for the Task"}/> 
        </div>
    );
}

export default AddTaskForm;
