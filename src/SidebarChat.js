import React from 'react'
import { Avatar } from '@material-ui/core';
import './SidebarChat.css'
import { Link } from 'react-router-dom';

function SidebarChat({ item }) {
    return (
        <Link to={`/room/${item.name}`}>
            <div className='sidebar_chat_container'>
                <div><Avatar /></div>
                <div>
                    <h3>{item.name}</h3>
                    <p>{item.type}</p>
                </div>
            </div>
        </Link>
    )
}

export default SidebarChat