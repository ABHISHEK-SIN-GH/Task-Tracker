import React from 'react';
import viteLogo from '/vite.svg'
import logo from '../../../assets/logo.gif'
const HeaderLogo = ({openSidebar}) => {
    return (
        <>
            <div className='basis-2/12 md:basis-1/12' >
                <img id='Menu' className='mx-auto py-3 px-2 md:p-5 h-16 md:h-24 hover:opacity-60 hover:cursor-pointer' src={logo} alt='Logo' onClick={()=>{openSidebar()}}/>
            </div>
        </>
    );
}

export default HeaderLogo;
