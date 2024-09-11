import React from 'react';
import { Handle, Position } from '@xyflow/react';
import logo from "../NodeTypes/Message/message-icon.png"
import whatsapp from "../CustomNode/whatsapp.png"
import "./index.css"

function CustomNode({ data = { label: "custom node" }, isConnectable = "true", }) {
    console.log(data)
    return (
        <>
            <Handle
                type="target"
                position={Position.Left}
                style={{ background: '#555' }}
                onConnect={(params) => console.log('handle onConnect2', params)}
                isConnectable={isConnectable}
            />
            <div className="custom-box">
                <div className="upper-half">
                    <div className="upper-half-container">
                        <img src={logo} className="left-icon" alt='logo'/>
                        <p className="heading">Send Message</p>
                    </div>
                    <img src={whatsapp} className="right-icon" alt='logo'/>
                </div>

                <div className="lower-half">
                    <p className="dynamic-data">{data.label}</p>
                </div>
            </div>
            <Handle
                type="source"
                position={Position.Right}
                id="a"
                style={{ top: 10, background: '#555' }}
                isConnectable={isConnectable}
            />
        </>
    );
};

export default CustomNode;