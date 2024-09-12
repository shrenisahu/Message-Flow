import React from 'react'
import "./index.css"
import MessageNode from '../NodeTypes/Message/index';

const NodesPanel = () => {

  return (
    <div className='nodes_panel-container'>
      <MessageNode />
      {/*  can introduce multiple types of nodes here */}
    </div>
  )
}

export default NodesPanel;
