import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="container">
      <div className="join1">
        <img src="logo.png" alt="logo" className="logo"></img>
        <div className="title">let's chat.</div>
        <div className="subtitle">A <span className="subtitleGreen">REACTJS / NODE / SOCKET.IO</span> CHAT APP</div>
      </div>
      <div className="join2">
        <div className="card">
          <div className="heading">Join a Live Chat Room.</div>
          <div>
            <div className="formHeading">Your Name</div>
            <input className="form" placeholder="Enter Name" type="text" onChange={(event) => setName(event.target.value)} />
          </div>
          <div>
            <div className="formHeading">Chat Room Name</div>
            <input className="form" placeholder="Enter Room" type="text" onChange={(event) => setRoom(event.target.value)} />
          </div>
          {/* onClick = if no name or room, prevent button click; if it does, do nothing */}
          <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
            <button className="button" type="submit">SIGN IN</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
