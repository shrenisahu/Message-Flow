import React from 'react'
import logo from "./arrow.png"
import "./index.css"
const SettingsPanel = ({ editTextValue, handleEditChange, handleUpdateClick, handleNodesPanel }) => {
    return (
        <div className='settings-panel_container'>

            <div className='settings-panel_header'>
                <img className='settings-panel_img' src={logo} onClick={() => handleNodesPanel(false)} />
                <span className='settings-panel_span'>Message</span>
            </div>

            <div className='settings-panel_input-container' >
                <label className='settings-panel_input-container-label'> Text</label>

                <textarea
                    rows="5"
                    placeholder="Enter text here..."
                    value={editTextValue}
                    onChange={handleEditChange}
                    className='settings-panel_input'

                    type='text '

                ></textarea>




            </div>


        </div>
    )
}

export default SettingsPanel;
