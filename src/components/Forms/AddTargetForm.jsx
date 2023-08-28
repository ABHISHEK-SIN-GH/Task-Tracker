import React from 'react';
import Input from './Input';
import DatePicker from './DatePicker';

const AddTargetForm = () => {
    return (
        <div>
            <Input id={"targetTitle"} type={"text"} label={"Enter Target Name"}/>
            <DatePicker id={"targetDueDate"} type={"date"} label={"Enter Due Date For Target"}/>
        </div>
    );
}

export default AddTargetForm;
