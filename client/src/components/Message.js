import React from 'react';

import ReactEmoji from 'react-emoji';

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if(user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    //if it is sent by current user, then we render this
    isSentByCurrentUser
      ? (
        <div className="userMessageContainer">
          <div className="message userMessage">{ReactEmoji.emojify(text)}</div>
        </div>
        )
        //if it is not, then we will render this
        : (
          <div>
            <div className="message otherMessage">{ReactEmoji.emojify(text)}</div>
            <div className="otherUser">{user}</div>
          </div>
        )
  );
}

export default Message;