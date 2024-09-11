// import DropDragFlow from './components/DropAndDrag';
import DropDragFlow from './components/DropDrag';
import '@xyflow/react/dist/style.css';
import "./App.css"
import { Suspense, useState } from 'react';
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


function App() {
  const initialNodes = [
    {
      id: '1',
      type: 'selector',
      data: { label: 'input node' },
      position: { x: 250, y: 5 },
    },
  ];


  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [showError, setShowError] = useState(false)
  // const [onSave, setOnSave]= useState(true)
  const handleSaveClick = () => {
    let totalNode = nodes?.length;
    const sett = new Set();
    for (let i = 0; i < edges.length; i++)
      sett.add(edges[i].target)
    console.log("uniqueCount", edges, totalNode, sett.size)
    if (totalNode - sett.size > 1 && totalNode > 1) {
      setShowError(true)
      console.log("error")
    }
    else
      {
        setShowError(false)
        console.log("success")
      }

  }
  return (
    <>
      <div className='main-app' >
        <div className='main-app_header'>
          <button
            class="header-button"
            onClick={() => handleSaveClick()}
          >Save Changes</button>

          {
            showError && <button className="error-button" >Cannot Save Flow</button>
          }
        </div>


        <DropDragFlow
          nodes={nodes}
          setNodes={setNodes}
          onNodesChange={onNodesChange}
          edges={edges}
          setEdges={setEdges}
          onEdgesChange={onEdgesChange}


          handleSaveClick={handleSaveClick} />
      </div>
    </>
  );
}

export default App;


