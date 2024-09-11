import React from 'react';
import { Handle, Position } from '@xyflow/react';
import logo from "../NodeTypes/Message/message-icon.png";
import whatsapp from "../CustomNode/whatsapp.png";
import "./index.css";

function CustomNode({ data = { label: "text message" }, isConnectable = true }) {
    return (
        <>
            <Handle
                type="target"
                position={Position.Left}
                style={{ background: 'rgb(186 183 183)', height: '5px', width: '5px' }}
                onConnect={(params) => console.log('handle onConnect', params)}
                isConnectable={isConnectable}
            />
            <div className="custom-box">
                <div className="upper-half">
                    <div className="upper-half-container">
                        <img src={logo} className="left-icon" alt="logo" />
                        <p className="heading">Send Message</p>
                    </div>
                    <img src={whatsapp} className="right-icon" alt="whatsapp" />
                </div>

                <div className="lower-half">
                    <p className="dynamic-data">{data.label}</p>
                </div>
            </div>
            <Handle
                type="source"
                position={Position.Right}
                id="a"
                style={{ top: 10, background: 'rgb(186 183 183)', height: '5px', width: '5px' }}
                isConnectable={isConnectable}
            />
        </>
    );
}

export default React.memo(CustomNode);
