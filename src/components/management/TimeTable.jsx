import React from 'react';
import Head1 from "../headings/Head1";
import ModalOutlineButton from '../buttons/ModalOutlineButton';
import Table from '../tables/Table';
const TimeTable = () => {
    const headings = ["SNo.","Start-Time","End-Time","Task"];
    const rows = [
      [1,"7:00","8:00","BreakFast"],
      [2,"8:00","9:00","Exercise"],
      [3,"9:00","11:00","College"],
      [4,"11:00","12:00","College"],
      [5,"12:00","1:00","Lunch"],
      [6,"1:00","2:00","Rest/Sleep"],
      [7,"2:00","3:00","College"],
      [8,"3:00","5:00","College"],
      [9,"5:00","7:00","Rest/Sleep"],
      [10,"7:00","8:00","Study"],
      [11,"8:00","9:00","Dinner"],
      [12,"9:00","10:00","Study"],
      [13,"10:00","7:00","Sleep"],
    ]
    return (
        <>
            <div className="md:mx-7 p-4">
                <div className="flex flex-row items-center justify-between">
                    <Head1 heading={"Manage Your Time"}/>
                    <div className='flex flex-row items-center justify-between gap-1'>        
                        <ModalOutlineButton name={"Add"} size={"text-base"} color={"primary"} targetID={"AddTimeTableForm"}/>
                        <ModalOutlineButton name={"Update"} size={"text-base"} color={"primary"} targetID={"UpdateTimeTableForm"}/>
                    </div>
                </div>
                <Table headings={headings} rows={rows} timeTable={true}/>
            </div>
        </>
    );
}

export default TimeTable;
