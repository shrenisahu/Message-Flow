import React, { useRef, useState, useEffect } from 'react';
import { ReactFlow, addEdge, Controls, useReactFlow, applyNodeChanges, } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import CustomNode from './CustomNode/index.js';
import Sidebar from '../components/Sidebar/index.js';
import { useDnD } from './DnDContext';
import '../index.css';

let id = 0;
const getId = () => `dndnode_${id++}`;

const DnDFlow = ({ nodes, setNodes, edges, setEdges, onEdgesChange, onNodesChange }) => {

    const reactFlowWrapper = useRef(null);
    const { screenToFlowPosition } = useReactFlow();
    const [type] = useDnD();
    const [editId, setEditId] = useState();
    const [editTextValue, setEditTextValue] = useState();
    const [showTextBox, setShowTextBox] = useState(false);

    const handleNodesPanel = (val) => {
        console.log("handleNodesPanel", val)
        setShowTextBox(val)
    }

    const onConnectStart = (_, { nodeId, handleId, handleType }) =>
        console.log('on connect start', { nodeId, handleId, handleType });
    const onConnectEnd = (event) => console.log('on connect end', event);

    const onConnect = (params) => {
        console.log("onConnect", params)
        setEdges((eds) => addEdge(params, eds))
    }

    const onDragOver = (event) => {
        console.log("ondragover", event.target.value)
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }

    const onDrop = (event) => {
        console.log("onDrop", event.target.innerHTML)
        event.preventDefault();
        if (!type) {
            return;
        }
        const position = screenToFlowPosition({
            x: event.clientX,
            y: event.clientY,
        });

        const newNode = {
            id: getId(),
            type,
            position,
            data: { label: `message node${id}` },
        };
        setNodes((nds) => nds.concat(newNode));
    }

    const onNodeClick = (e, val) => {
        setShowTextBox(true)
        console.log("onNodeClick", val)
        setEditId(val.id)
        setEditTextValue(val.data.label)
    }

    const handleEditChange = (e) => {
        e.preventDefault();
        setEditTextValue(e.target.value)
        console.log("editchange", e.target.value)

    }

    const isValidConnection = (props) => {
        let isValid = edges.findIndex((elem) => elem.source === props.source);
        console.log(props.source, isValid)
        if (isValid === -1)
            return true;

        return false;
    }

    const handleUpdateClick = () => {
        const res = nodes?.map((elem) => {
            if (elem.id === editId) {
                elem.data = {
                    ...elem.data,
                    label: editTextValue
                }

            }
            return elem;
        });

        console.log("handleUpdateClick", res)
        // setNodes(res);
        setNodes((nds) => applyNodeChanges(res, nds))
        // setEditId("");
        // setEditTextValue("");
        // setShowTextBox(false)
    }


    useEffect(() => {
        handleUpdateClick()
    }, [editId, editTextValue]);

    const nodeTypes = {
        selector: CustomNode,
    };

    console.log("edges", edges, nodes);

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
                    onConnectStart={onConnectStart}
                    onConnectEnd={onConnectEnd}
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
                handleUpdateClick={handleUpdateClick}
                handleNodesPanel={handleNodesPanel}

            />
        </div>
    );
};

export default DnDFlow;
