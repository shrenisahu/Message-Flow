import React from 'react';
import NodesPanel from '../NodesPanel/index';
import SettingsPanel from '../SettingsPanel/index';

const Sidebar = ({ showTextBox, editTextValue, handleEditChange = () => { }, handleNodesPanel = () => { } }) => {

    return (
        <aside>
            {
                showTextBox
                    ?
                    <SettingsPanel
                        editTextValue={editTextValue}
                        handleEditChange={handleEditChange}
                        handleNodesPanel={handleNodesPanel}
                    />
                    :
                    <div>
                        <NodesPanel
                        />
                    </div>
            }

        </aside>
    );
};

export default Sidebar;
