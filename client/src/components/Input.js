import React from 'react';

const Input = ({ setMessage, sendMessage, message }) => (
  <form>
    <div className="chatBottom">
      <input
       type="text"
        placeholder="Start Chatting!"
        className="chatInput"
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
        onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
      />
      <button className="grayButton" onClick={e => sendMessage(e)}>SEND</button>
    </div>  
  </form>
)

export default Input;