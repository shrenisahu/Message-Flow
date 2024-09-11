import React from 'react';
import { useDnD } from '../hooks/useDndContext';
import NodesPanel from '../NodesPanel/index';
import SettingsPanel from '../SettingsPanel/index';

const Sidebar = ({ showTextBox, editTextValue, handleEditChange, handleNodesPanel }) => {
    const [, setType] = useDnD();

    const onDragStart = (event, nodeType) => {
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
