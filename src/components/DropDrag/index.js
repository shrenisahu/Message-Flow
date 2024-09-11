import React, { useRef, useCallback, useState, Suspense, useEffect } from 'react';
import {
    ReactFlow,
    ReactFlowProvider,
    addEdge,
    useNodesState,
    useEdgesState,
    Controls,
    useReactFlow,
    applyNodeChanges,
    applyEdgeChanges,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import { DnDProvider, useDnD } from '../DnDContext.js';
import DnDFlow from "../DropAndDrag.js"

// import '../index.css';

const DropDragFlow = ({ nodes, setNodes, edges, setEdges, onEdgesChange, onNodesChange, handleSaveClick }) => {
    return (
        <>

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

        </>
    );
}

export default DropDragFlow;