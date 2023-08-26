import React from 'react';
import HeaderLogo from './HeaderLogo';
import HeaderText from './HeaderText';
import ModalButton from '../../buttons/ModalButton';
const Header = ({openSidebar}) => {
    return (
        <div className='flex flex-row text-center bg-secondary'>
            <HeaderLogo openSidebar={openSidebar}/>
            <HeaderText/>
            <div className='grow my-auto text-right pe-4'>
                <ModalButton name={"Add Task"} size={"text-base"} color={"bg-primary"} targetID={"AddTaskForm"}/>
            </div>
        </div>
    );
}

export default Header;
