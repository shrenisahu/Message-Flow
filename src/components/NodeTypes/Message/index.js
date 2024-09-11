import React from 'react'
import "./index.css"
import logo from "./message-icon.png"
const MessageNode = ({ onDragStart }) => {
    return (
        <div className='message-node_container' onDragStart={(event) => onDragStart(event, 'selector')} draggable>
<div className='message-node_message-container'>
<img src={logo} className='message-node_image'/>
           <span className='message-node_span'> Message</span>
</div>



        </div>
    )
}

export default MessageNode;
