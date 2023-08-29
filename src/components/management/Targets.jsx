import React from 'react';
import Head1 from "../headings/Head1";
import Table from '../tables/Table';
import ModalOutlineButton from '../buttons/ModalOutlineButton';
const Targets = () => {
    const headings = ["SNo.","Task","Status","Due Date"];
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
                <div className="flex flex-row items-center justify-between">
                    <Head1 heading={"Set Your Targets"}/>
                    <ModalOutlineButton name={"Add Target"} size={"text-base"} color={"primary"} targetID={"AddTargetForm"}/>
                </div>
                <Table headings={headings} rows={rows}/>
            </div>
        </>
    );
}

export default Targets;
