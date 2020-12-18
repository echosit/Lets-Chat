import React from 'react';
import { Link } from 'react-router-dom';

const TextContainer = ({ users, room }) => (
  <div className="groupContainer">
    <div className="groupHeading hide">
      {room}
    </div>
    {
      users
        ? (
              <div className="groupNames">
                {users.map(({name}) => (
                  <div key={name}>
                    <img className="dot" alt="Online Icon" src="onlineIcon.png"/>
                    {name}
                  </div>
                ))}
                <Link className="noTextDecoration" to={"/"}>
                  <button className="leaveButton grayButton">
                    LEAVE
                  </button> {/* leave the chat */}
                </Link>
              </div>
        )
        : null
    }
  </div>
);

export default TextContainer;