import React from 'react';
import { ReactFlowProvider } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { DnDProvider } from '../DnDContext.js';
import DnDFlow from "../DropAndDrag.js"

const DropDragFlow = ({ nodes, setNodes, edges, setEdges, onEdgesChange, onNodesChange, handleSaveClick }) => {
    return (
        <ReactFlowProvider>
            <DnDProvider>
                <DnDFlow
                    nodes={nodes}
                    setNodes={setNodes}
                    onNodesChange={onNodesChange}
                    edges={edges}
                    setEdges={setEdges}
                    onEdgesChange={onEdgesChange}
                    handleSaveClick={handleSaveClick} />
            </DnDProvider>
        </ReactFlowProvider>


    );
}

export default DropDragFlow;