import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message';

//loop through messages
const Messages = ({ messages, name }) => (
  <ScrollToBottom className="messages">
  {/* for each message, create a div; Message is a separate component */}
    {messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div>)}
  </ScrollToBottom>
);

export default Messages;