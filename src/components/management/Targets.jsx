import React from 'react';
import Head1 from "../headings/Head1";
import Table from '../tables/Table';
import GeneralForm from '../Forms/GeneralForm';
import AddTargetForm from '../Forms/AddTargetForm';

const Targets = () => {
    const headings = ["SNo.","Task","Status","Due Date","Action"];
    const rows = [
      [1,"Task-1","Status","Due Date 1"],
      [1,"Task-1","Status","Due Date 1"],
      [1,"Task-1","Status","Due Date 1"],
      [1,"Task-1","Status","Due Date 1"],
      [1,"Task-1","Status","Due Date 1"],
      [1,"Task-1","Status","Due Date 1"],
      [1,"Task-1","Status","Due Date 1"],
      [1,"Task-1","Status","Due Date 1"],
      [1,"Task-1","Status","Due Date 1"],
    ]
    return (
        <>
            <div className="md:mx-7 p-4">
                <Head1 heading={"Set Your Targets"}/>
                <div className='flex flex-col md:flex-row gap-3'>
                    <div className='flex-1 md:basis-2/3'>
                        <Table headings={headings} rows={rows}/>
                    </div>
                    <div className='flex-1 md:basis-1/3 py-2'>
                        <GeneralForm  title={"Add Target"} form={<AddTargetForm/>} action={()=>{console.log("Test")}}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Targets;
