import React, {useState} from 'react';

function Status() {
    const problemStatuses = ['Unsolved', 'Solved'];

    const [selectedStatuses, setSelectedStatuses] = useState([]);

    const handleStatusChange = (status) => {
        setSelectedStatuses((prev) =>
            prev.includes(status)
                ? prev.filter((s) => s !== status)
                : [...prev, status]
        );
    };

    return (
        <div className="topics-container">
            <label>Problem Status</label>
            <div className="status-list">
                {problemStatuses.map((status) => (
                    <label key={status} className="status-item">
                        <input
                            type="checkbox"
                            checked={selectedStatuses.includes(status)}
                            onChange={() => handleStatusChange(status)}
                        />

                        <span>{status}</span>
                    </label>
                ))}
            </div>
        </div>);
}

export default Status;