import { useState, useCallback } from 'react';
import { useNodesState, useEdgesState } from '@xyflow/react';
import DropDragFlow from './components/DropDrag';
import '@xyflow/react/dist/style.css';
import "./App.css";

const initialNodes = [
  {
    id: '1',
    type: 'selector',
    data: { label: 'text message 0' },
    position: { x: 250, y: 5 },
  },
];

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [showError, setShowError] = useState(false);

  const handleSaveClick = useCallback(() => {
    // onSave button click need to check if there exists more than one node which have empty target handles
    // storing all targets in edges array into a Set, because set stores unique values
    const connectedNodes = new Set(edges.map(edge => edge.target));
    const hasDisconnectedNodes = nodes.length - connectedNodes.size > 1;

    setShowError(hasDisconnectedNodes && nodes.length > 1);
    console.log(hasDisconnectedNodes ? "error" : "success");
  }, [nodes, edges]);

  return (
    <div className='main-app scrollable-div'>
      <div className='main-app_header'>
        <button className="header-button" onClick={handleSaveClick}>
          Save Changes
        </button>
        {showError && <button className="error-button">Cannot Save Flow</button>}
      </div>

      <DropDragFlow
        nodes={nodes}
        setNodes={setNodes}
        onNodesChange={onNodesChange}
        edges={edges}
        setEdges={setEdges}
        onEdgesChange={onEdgesChange}
        handleSaveClick={handleSaveClick}
      />
    </div>
  );
}
