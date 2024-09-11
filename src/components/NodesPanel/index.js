import React from 'react'
import "./index.css"
import MessageNode from '../NodeTypes/Message/index';

const NodesPanel = ({ onDragStart }) => {
  
  return (
    <div className='nodes_panel-container'>
      <MessageNode onDragStart={onDragStart} />
      <MessageNode onDragStart={onDragStart} />
      <MessageNode onDragStart={onDragStart} />
      <MessageNode onDragStart={onDragStart} />
    </div>
  )
}

export default NodesPanel;
