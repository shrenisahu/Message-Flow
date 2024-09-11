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
            <div class="custom-box">
                <div class="upper-half">
                    <div class="upper-half-container">
                        <img src={logo} class="left-icon"></img>
                        <p class="heading">Send Message</p>
                    </div>
                    <img src={whatsapp} class="right-icon"></img>
                </div>

                <div class="lower-half">
                    <p class="dynamic-data">{data.label}</p>
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