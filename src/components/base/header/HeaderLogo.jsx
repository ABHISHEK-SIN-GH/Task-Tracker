import React from 'react';
import viteLogo from '/vite.svg'
const HeaderLogo = ({openSidebar}) => {
    return (
        <>
            <div className='basis-2/12 md:basis-1/12'>
                <img className='mx-auto py-5 px-2 md:p-5' src={viteLogo} alt='Logo' onClick={()=>{openSidebar()}}/>
            </div>
        </>
    );
}

export default HeaderLogo;
