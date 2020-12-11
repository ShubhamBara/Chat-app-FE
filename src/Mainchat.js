import React, { useEffect, useState } from 'react'
import './Mainchat.css'
import MoreVertRoundedIcon from '@material-ui/icons/MoreVertRounded';
import AttachFileRoundedIcon from '@material-ui/icons/AttachFileRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import { Avatar, IconButton } from '@material-ui/core';

import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import AttachmentIcon from '@material-ui/icons/Attachment';
import MicRoundedIcon from '@material-ui/icons/MicRounded';
import axios from './axios';
import Pusher from 'pusher-js'
import {useParams} from 'react-router-dom'


function Mainchat() {

    const [messages,setMessages]=useState([])
    const [input,setInput]=useState([])
    const {room_name}=useParams()

    const handleClick=(e)=>{
        e.preventDefault()
        
        axios.post('/room/message/new',{
            room_name:room_name,
            Send: true,
            Username: "SHUBHAM",
            Messagesend: input
        })

        setInput('')
    }

    useEffect(()=>{
        if(room_name){
            // console.log(room_name)
      axios.get(`/room/display/${room_name}`)
      .then((response)=>{
        // console.log(response.data)
        setMessages(response.data)
      })
    }
    },[room_name])

    useEffect(()=>{
        const pusher = new Pusher('a08fd4d49733f774e87e', {
          cluster: 'ap2'
        });
    
        const channel = pusher.subscribe('message');
        channel.bind('inserted', (data)=>{
          // alert(JSON.stringify(data));
          setMessages([...messages,data])
        });
    
        return()=>{
          channel.unbind_all()
          channel.unsubscribe()
        }
      },[messages])

    console.log(messages)


    return (
        <div className="mainchat_body">
            {/* this is the Main chat */}
            <div className='mainchat_subhead'>
                <div className='mainchat_subhead_left'>
                    <Avatar />
                </div>
                <div className='mainchat_subhead_center'>
                    <h3>{room_name}</h3>
                    <p>Last seen time</p>
                </div>
                <div className='mainchat_subhead_right'>
                    <IconButton>
                        <SearchRoundedIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileRoundedIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertRoundedIcon />
                    </IconButton>

                </div>
            </div>
            <div className='mainchat_chat'>

                {messages.map((item) => (
                    <p className='mainchat_chat_message'>
                        <span className='mainchat_chat_message_name'>{item.Username}</span>
                        {item.Messagesend}
                        <span className='mainchat_chat_message_time'>{item.Time.toLocaleString()}</span>
                    </p>
                ))}

                <p className='mainchat_chat_message mainchat_send'>
                    <span className='mainchat_chat_message_name'>Shubham</span>
                    This is a message
                    <span className='mainchat_chat_message_time'>{new Date().toLocaleString()}</span>
                </p>
                <p className='mainchat_chat_message'>
                    <span className='mainchat_chat_message_name'>Shubham</span>
                    This is a message
                    <span className='mainchat_chat_message_time'>{new Date().toLocaleString()}</span>
                </p>
            </div>
            <div className='mainchat_footer'>
                <IconButton>
                    <InsertEmoticonIcon />
                </IconButton>
                <form>
                    <input 
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}
                    type='text' 
                    placeholder='Type a message' 
                    />
                    <button onClick={handleClick} type='submit' hidden>Send</button>
                </form>
                <IconButton>
                    <AttachmentIcon />
                </IconButton>
                <IconButton>
                    <MicRoundedIcon style={{ backgroundColor: "#dcf8c6" }} />
                </IconButton>

            </div>
        </div>
    )
}

export default Mainchat