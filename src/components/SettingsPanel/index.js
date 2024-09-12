import React from 'react';
import arrow from './arrow.png';
import './index.css';

const SettingsPanel = ({ editTextValue, handleEditChange, handleNodesPanel }) => (
    <div className='settings-panel_container'>
        <div className='settings-panel_header'>
            <img 
                className='settings-panel_img' 
                src={arrow} 
                onClick={() => handleNodesPanel(false)} 
                alt='arrow' 
            />
            <span className='settings-panel_span'>Message</span>
        </div>

        <div className='settings-panel_input-container'>
            <label className='settings-panel_input-container-label'>Text</label>
            <textarea
                rows="5"
                placeholder="Enter text here..."
                value={editTextValue}
                onChange={handleEditChange}
                className='settings-panel_input'
            />
        </div>
    </div>
);

export default SettingsPanel;
