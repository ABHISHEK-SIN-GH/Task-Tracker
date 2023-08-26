import React from 'react';
import SidebarItem from './SidebarItem';
const Sidebar = ({openSidebar}) => {
    return (
        <div>
            <div className="sidebar hidden fixed h-screen lg:left-0 p-2 z-10 w-[200px] overflow-y-auto text-center bg-primary">
                <div className="text-gray-100 text-xl">
                    <SidebarItem name={"All Tasks"} icon={<i className="fa fa-list"></i>} link={"/"}/>
                    <SidebarItem name={"Task Settings"} icon={<i className="fa fa-sliders"></i>} link={"/task-settings"}/>
                    <SidebarItem name={"Track Tasks"} icon={<i className="fa fa-bar-chart"></i>} link={"/track-tasks"}/>
                    <hr className='h-[1px] bg-light my-2'/>
                    <SidebarItem name={"Time Table"} icon={<i className="fa fa-table"></i>}  link={"/time-table"}/>
                    <SidebarItem name={"Calender"} icon={<i className="fa fa-calendar"></i>}  link={"/calender"}/>
                    <SidebarItem name={"Keep Notes"} icon={<i className="fa fa-pencil-square-o"></i>}  link={"/keep-notes"}/>
                    <hr className='h-[1px] bg-light my-2'/>
                    <SidebarItem name={"Targets"} icon={<i className="fa fa-bullseye"></i>} link={"/targets"}/>
                    <SidebarItem name={"Achievements"} icon={<i className="fa fa-trophy"></i>} link={"/achievements"}/>
                    <SidebarItem name={"Account Settings"} icon={<i className="fa fa-cogs"></i>} link={"/account-settings"}/>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
