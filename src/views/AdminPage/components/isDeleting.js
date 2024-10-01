import React from 'react';
import '../styles/isDeleting.css';

function IsDeleting({ officer, onDeleteConfirm, onCancel }) {
    return (
        <div className="IsDeleting">
            <div className="IsDeleting-content">
                <h2>Delete Officer</h2>
                <p>Are you sure you want to delete <strong>{officer.name}</strong>?</p>
                <div className="IsDeleting-buttons">
                    <button className="DeleteConfirm" onClick={()=>onDeleteConfirm(
                        officer,
                        )}>Yes, Delete</button>
                    <button className="DeleteCancel" onClick={()=> onCancel(null)}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default IsDeleting;
