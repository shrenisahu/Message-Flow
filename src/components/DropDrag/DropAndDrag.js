import React, { useRef, useState, useEffect } from 'react';
import { ReactFlow, addEdge, Controls, useReactFlow } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import CustomNode from '../CustomNode/index.js';
import Sidebar from '../Sidebar/index.js';
import { useDnD } from '../hooks/useDndContext.js';
import './index.css';

let id = 0;
const getId = () => `dndnode_${id++}`;

const nodeTypes = {
    selector: CustomNode, // mapping customNode to selector type
};

const DnDFlow = ({ nodes, setNodes, edges, setEdges, onEdgesChange, onNodesChange }) => {

    const reactFlowWrapper = useRef(null);
    const { screenToFlowPosition } = useReactFlow();
    const [type] = useDnD();
    const [editId, setEditId] = useState();
    const [editTextValue, setEditTextValue] = useState();
    const [showTextBox, setShowTextBox] = useState(false);

    const handleNodesPanel = (val) => {
        setShowTextBox(val)
    }

    const onConnect = (params) => {
        setEdges((eds) => addEdge(params, eds))
    }

    const onDragOver = (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }

    const onDrop = (event) => {
        event.preventDefault();
        if (!type) {
            return;
        }
        const position = screenToFlowPosition({
            x: event.clientX,
            y: event.clientY,
        });

        const newNode = { // creating a new node when node is being dropped 
            id: getId(), // setting id using the function
            type,        // setting custom ndoe type
            position,
            data: { label: `text message ${id}` },
        };
        setNodes((nds) => nds.concat(newNode));
    }

    const onNodeClick = (e, val) => {
        setShowTextBox(true) // open the nodes panel
        setEditId(val.id)   // for the selected node
        setEditTextValue(val.data.label) // pre-fill the text are with teh selected node value
    }

    /**
     * 
     * @param {*} e 
     * @description called when teh current node value is being changed
     */
    const handleEditChange = (e) => {
        e.preventDefault();
        setEditTextValue(e.target.value)
    }

    /**
     * 
     * @returns a boolean value indicating whether the connection is allowed to be formed or not
     */
    const isValidConnection = (props) => {

        // only one edge should originate from a particular node's source handle, so checking if the passedNode source node is already a source in the edges array
        let isValid = edges.findIndex((elem) => elem.source === props.source);
        if (isValid === -1)
            return true; // current nodes does not serve as a source for any edge so return true

        return false; // current nodes is already a  source for an edge so return false
    }

    useEffect(() => {
        // this is responsible when a node is clicked and we can edit the value inside that ndoe
        setNodes((nds) =>
            nds.map((node) => {
                if (node.id === editId) {
                    // it's important that you create a new node object
                    // in order to notify react flow about the change
                    return {
                        ...node,
                        data: {
                            ...node.data,
                            label: editTextValue,
                        },
                    };
                }

                return node;
            }),
        );
    }, [editId, editTextValue, setNodes]);


    return (
        <div className="dndflow">
            <div className="reactflow-wrapper" ref={reactFlowWrapper}>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodeClick={onNodeClick}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    onDrop={onDrop}
                    onDragOver={onDragOver}
                    nodeTypes={nodeTypes}
                    isValidConnection={isValidConnection}
                    fitView
                >
                    <Controls />
                </ReactFlow>
            </div>
            <Sidebar
                showTextBox={showTextBox}
                editTextValue={editTextValue}
                handleEditChange={handleEditChange}
                handleNodesPanel={handleNodesPanel}

            />
        </div>
    );
};

export default DnDFlow;
