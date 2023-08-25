import React from 'react';
import SidebarItem from './SidebarItem';
const Sidebar = ({openSidebar}) => {
    return (
        <div>
            <div className="sidebar fixed h-screen lg:left-0 p-2 z-10 w-[200px] overflow-y-auto text-center bg-primary">
                <div className="text-gray-100 text-xl">
                    <SidebarItem name={"All Tasks"} icon={<i className="fa fa-star"></i>} link={"/"}/>
                    <SidebarItem name={"Task Settings"} icon={<i className="fa fa-star"></i>} link={"/task-settings"}/>
                    <SidebarItem name={"Track Tasks"} icon={<i className="fa fa-star"></i>} link={"/track-tasks"}/>
                    <hr className='h-[1px] bg-light my-2'/>
                    <SidebarItem name={"Time Table"} icon={<i className="fa fa-star"></i>}  link={"/time-table"}/>
                    <SidebarItem name={"Calender"} icon={<i className="fa fa-star"></i>}  link={"/calender"}/>
                    <SidebarItem name={"Keep Notes"} icon={<i className="fa fa-star"></i>}  link={"/keep-notes"}/>
                    <hr className='h-[1px] bg-light my-2'/>
                    <SidebarItem name={"Account Settings"} icon={<i className="fa fa-star"></i>} link={"/account-settings"}/>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
