// import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar'
import Mainchat from './Mainchat'
// import { useEffect, useState } from 'react';
// import axios from './axios'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {

  // const [room,setRoom]=useState([])

  // useEffect(()=>{
  //   axios.get('/room/display')
  //   .then((response)=>{
  //     setRoom(response.data)
  //   })
  // },[])

  // useEffect(()=>{
  //   axios.get('/room/message/display')
  //   .then((response)=>{
  //     // console.log(response.data)
  //     setMessage(response.data)
  //   })
  // },[])

  // useEffect(()=>{
  //   const pusher = new Pusher('a08fd4d49733f774e87e', {
  //     cluster: 'ap2'
  //   });

  //   const channel = pusher.subscribe('message');
  //   channel.bind('inserted', (data)=>{
  //     // alert(JSON.stringify(data));
  //     setMessage([...message,data])
  //   });

  //   return()=>{
  //     channel.unbind_all()
  //     channel.unsubscribe()
  //   }
  // },[message])

  // console.log(message)
  // console.log(room)

  return (
    <div className="App">
      <div className='app_body'>
        <Router>
          <Sidebar />
          <Switch>
            <Route path='/room/:room_name'>
              <Mainchat />
            </Route>
            <Route path='/'>
              <h1>HOME PAGE</h1>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
