import React from 'react';
import HeaderLogo from './HeaderLogo';
import HeaderText from './HeaderText';
import PrimaryButton from '../../buttons/PrimaryButton';
const Header = ({openSidebar}) => {
    return (
        <div className='flex flex-row text-center bg-secondary'>
            <HeaderLogo openSidebar={openSidebar}/>
            <HeaderText/>
            <div className='grow my-auto text-right pe-4'>
                <PrimaryButton name={"Add Task"} size={"text-lg"}/>
            </div>
        </div>
    );
}

export default Header;
