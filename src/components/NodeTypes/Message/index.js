import React from 'react'
import "./index.css"
import message from "./message-icon.png"
import { useDnD } from '../../hooks/useDndContext'

const MessageNode = () => {

    /**
     * @description destructuring the custom hook which we created using Context API.
     */
    const [, setType] = useDnD();

    const onDragStart1 = (event, nodeType) => {
        setType(nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
        <div className='message-node_container' onDragStart={(event) => onDragStart1(event, 'selector')} draggable>
            <div className='message-node_message-container'>
                <img src={message} className='message-node_image' alt='message' />
                <span className='message-node_span'> Message</span>
            </div>
        </div>
    )
}

export default MessageNode;
