import React, { useEffect, useState } from 'react'
import './Sidebar.css'
// import HeaderContainer from './HeaderContainer'
// import SearchContainer from './SearchContainer'

import DonutLargeSharpIcon from '@material-ui/icons/DonutLargeSharp';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import MoreVertRoundedIcon from '@material-ui/icons/MoreVertRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import { Avatar, IconButton } from '@material-ui/core';

import SidebarChat from './SidebarChat'
import axios from './axios'

function Sidebar() {

    const [room,setRoom]=useState([])

    useEffect(()=>{
      axios.get('/room/display')
      .then((response)=>{
        setRoom(response.data)
      })

    //   return ()=>{
    //       unsubscribe.unsubscribe()
    //   }
      
    },[])

    const handleRoom=()=>{
        const roomNaam=prompt('Enter the room name')
        
        if(!(roomNaam==='')){
        axios.post('/room/new',{
            roomName:roomNaam,
            Username:'ShubhamXD',
            Messagesend:'Shubham created the group',
            Send:true
        })
        }
    }

    console.log(room)

    return (
        <div className="sidebar_body">
            <div className='sidebar_subhead'>
                <div className="sidebar_subhead_left">
                    <div id='profilepic'>
                        {/* <img src='' alt='logo'></img> */}
                        <Avatar />
                    </div>
                </div>
                <div className="sidebar_subhead_right">
                    <div>
                        <IconButton>
                            <DonutLargeSharpIcon />
                        </IconButton>
                    </div>
                    <div>
                        <IconButton>
                            <ChatRoundedIcon />
                        </IconButton>
                    </div>
                    <div>
                        <IconButton>
                            <MoreVertRoundedIcon />
                        </IconButton>
                    </div>
                </div>
            </div>
            {/* <SearchContainer/> */}
            <div id="sidebar_search">
                <SearchRoundedIcon />
                <input type='text' id="sidebar_search_people" placeholder='Search' ></input>
            </div>
            {/* <People2Chat/>  */}
            <div id='sidebar_chat'>
                <h2 onClick={handleRoom}>+ Add Room</h2>
                {room.map((item) => {
                    return (<SidebarChat item={item} />
                )})}
                {/* <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/> */}
            </div>
        </div>
    )
}

export default Sidebar