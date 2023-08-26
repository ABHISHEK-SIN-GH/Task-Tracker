import React from "react";
import FormModal from "../modals/FormModal";
import AddTaskForm from "../Forms/AddTaskForm";
import Table from "../tables/Table";

const TaskBoard = () => {
  const action = () => {
    console.log("called action from task board");
  };
  const headings = ["SNo.","Task","Category","Priority","Status","Due Date","Action"];
  const rows = [
    {sno:1,task:"Task-1",category:"Category-4",priority:"Priority-1",status:"Status",due:"Due Date 1",},
    {sno:2,task:"Task-2",category:"Category-3",priority:"Priority-2",status:"Status",due:"Due Date 2",},
    // {sno:3,task:"Task-3",category:"Category-1",priority:"Priority-1",status:"Status",due:"Due Date 2",},
    // {sno:4,task:"Task-4",category:"Category-1",priority:"Priority-2",status:"Status",due:"Due Date 1",},
    // {sno:4,task:"Task-4",category:"Category-1",priority:"Priority-2",status:"Status",due:"Due Date 1",},
    // {sno:4,task:"Task-4",category:"Category-1",priority:"Priority-2",status:"Status",due:"Due Date 1",},
    // {sno:4,task:"Task-4",category:"Category-1",priority:"Priority-2",status:"Status",due:"Due Date 1",},
    // {sno:4,task:"Task-4",category:"Category-1",priority:"Priority-2",status:"Status",due:"Due Date 1",},
    // {sno:4,task:"Task-4",category:"Category-1",priority:"Priority-2",status:"Status",due:"Due Date 1",},
    // {sno:3,task:"Task-3",category:"Category-1",priority:"Priority-1",status:"Status",due:"Due Date 2",},
    // {sno:4,task:"Task-4",category:"Category-1",priority:"Priority-2",status:"Status",due:"Due Date 1",},
    // {sno:4,task:"Task-4",category:"Category-1",priority:"Priority-2",status:"Status",due:"Due Date 1",},
    // {sno:4,task:"Task-4",category:"Category-1",priority:"Priority-2",status:"Status",due:"Due Date 1",},
    // {sno:4,task:"Task-4",category:"Category-1",priority:"Priority-2",status:"Status",due:"Due Date 1",},
    // {sno:4,task:"Task-4",category:"Category-1",priority:"Priority-2",status:"Status",due:"Due Date 1",},
    // {sno:4,task:"Task-4",category:"Category-1",priority:"Priority-2",status:"Status",due:"Due Date 1",},
    // {sno:3,task:"Task-3",category:"Category-1",priority:"Priority-1",status:"Status",due:"Due Date 2",},
    // {sno:4,task:"Task-4",category:"Category-1",priority:"Priority-2",status:"Status",due:"Due Date 1",},
    // {sno:4,task:"Task-4",category:"Category-1",priority:"Priority-2",status:"Status",due:"Due Date 1",},
    // {sno:4,task:"Task-4",category:"Category-1",priority:"Priority-2",status:"Status",due:"Due Date 1",},
    // {sno:4,task:"Task-4",category:"Category-1",priority:"Priority-2",status:"Status",due:"Due Date 1",},
    // {sno:4,task:"Task-4",category:"Category-1",priority:"Priority-2",status:"Status",due:"Due Date 1",},
    // {sno:4,task:"Task-4",category:"Category-1",priority:"Priority-2",status:"Status",due:"Due Date 1",}
  ]
  return (
      <>
        <div className="md:mx-7 p-4">
          <h1 className="text-3xl font-thin md:text-5xl my-5 md:my-8">Daily Tasks Record</h1>
          <Table headings={headings} rows={rows}/>
        </div>
        <FormModal name={"Add Task"} targetID={"AddTaskForm"} form={<AddTaskForm/>} action={action} button={"Save Task"}/>
      </>
  );
};

export default TaskBoard;
