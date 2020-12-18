import React, { useState, useEffect } from "react"; //useEffect hook for lifestyle
import queryString from 'query-string'; //helps with retrieving data from URL
import io from "socket.io-client";

import TextContainer from './TextContainer';
import Messages from './Messages';
import Input from './Input';
import { Link } from "react-router-dom";

const ENDPOINT = 'https://lets-chat-reactjs.herokuapp.com/';

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState(''); //define hook
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState(''); //storage all messages
  const [messages, setMessages] = useState([]);

  //get data from when users enter
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT); //set endpoint

    setRoom(room);
    setName(name)

    //emit events from client-side; when string is passed in, then something happens on backend
		//on 'join', we pass an object with name and room 
    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);
  
  //handling messages
  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]); //send all messages and add a new one to it
    });
    
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
}, []);

//function for sending messages
  const sendMessage = (event) => {
    event.preventDefault(); //prevent default behavior of a key press or button, so it doesn't refresh

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    } //if message, emit that message
  }

  return (
    <div>
      <Link to="/" className="noTextDecoration">
        <div className="chatLogoContainer">
          <img src="logo.png" alt="logo" className="chatLogo"></img>
          <div className="chatTitle">let's chat.</div>
        </div>
      </Link>
        <div className="chatArea">
          <TextContainer users={users} room={room}/>
          <div className="chatContainer">
              <Messages messages={messages} name={name} />
              <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
          </div>
      </div>
    </div>
  );
}

export default Chat;
