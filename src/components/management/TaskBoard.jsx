import React from "react";
import Table from "../tables/Table";
import ModalOutlineButton from "../buttons/ModalOutlineButton";
import Head1 from "../headings/Head1";

const TaskBoard = () => {
  
  const headings = ["SNo.","Task","Category","Priority","Status","Due Date","Action"];
  const rows = [
    [1,"Task-1","Category-4","Priority-1","Status","Due Date 1"],
    [1,"Task-1","Category-4","Priority-1","Status","Due Date 1"],
    [1,"Task-1","Category-4","Priority-1","Status","Due Date 1"],
    [1,"Task-1","Category-4","Priority-1","Status","Due Date 1"],
    [1,"Task-1","Category-4","Priority-1","Status","Due Date 1"],
    [1,"Task-1","Category-4","Priority-1","Status","Due Date 1"],
    [1,"Task-1","Category-4","Priority-1","Status","Due Date 1"],
    [1,"Task-1","Category-4","Priority-1","Status","Due Date 1"],
    [1,"Task-1","Category-4","Priority-1","Status","Due Date 1"],
    [1,"Task-1","Category-4","Priority-1","Status","Due Date 1"],
    [1,"Task-1","Category-4","Priority-1","Status","Due Date 1"],
    [1,"Task-1","Category-4","Priority-1","Status","Due Date 1"],
    [1,"Task-1","Category-4","Priority-1","Status","Due Date 1"],
    [1,"Task-1","Category-4","Priority-1","Status","Due Date 1"],
    [1,"Task-1","Category-4","Priority-1","Status","Due Date 1"],
    [1,"Task-1","Category-4","Priority-1","Status","Due Date 1"],
    [1,"Task-1","Category-4","Priority-1","Status","Due Date 1"],
  ]
  return (
      <>
        <div className="md:mx-7 p-4">
          <div className="flex flex-row items-center justify-between">
            <Head1 heading={"Daily Tasks Record"}/>
            <ModalOutlineButton name={"Add Category"} size={"text-base"} color={"primary"} targetID={"AddCategoryForm"}/>
          </div>
          <Table headings={headings} rows={rows}/>
        </div>
      </>
  );
};

export default TaskBoard;
