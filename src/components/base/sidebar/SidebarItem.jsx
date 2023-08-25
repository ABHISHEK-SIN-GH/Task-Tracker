import React from 'react';
import {Link} from 'react-router-dom';
const SidebarItem = ({name,icon,link}) => {
    return (
        <div className="p-2.5 mt-1 flex items-center">
            {icon}
            <Link className="font-bold text-gray-200 text-[15px] ml-3" to={link}>{name}</Link>
        </div>
    );
}

export default SidebarItem;
