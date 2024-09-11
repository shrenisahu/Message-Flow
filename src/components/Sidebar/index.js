import React from 'react';
import { useDnD } from '../DnDContext';
import NodesPanel from '../NodesPanel/index';
import SettingsPanel from '../SettingsPanel/index';
const Sidebar = ({ showTextBox, editTextValue, handleEditChange, handleNodesPanel }) => {

    const [, setType] = useDnD();

    const onDragStart = (event, nodeType) => {
        console.log("onDragStart")
        setType(nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
        <aside>

            {showTextBox ?
                <SettingsPanel
                    editTextValue={editTextValue}
                    handleEditChange={handleEditChange}
                    handleNodesPanel={handleNodesPanel}
                />
                :
                <div>
                    <NodesPanel
                        onDragStart={onDragStart}
                    />
                </div>
            }

        </aside>
    );
};

export default Sidebar;
