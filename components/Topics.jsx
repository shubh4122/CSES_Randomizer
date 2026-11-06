import React, {useState} from 'react';
import {topics} from '../data/topics';

function Topics({ selectedTopics, setSelectedTopics }) {

    //toggle topics -> from the list.
    const handleTopicChange = (topic) => {
        setSelectedTopics((prev) =>
            prev.includes(topic) ? prev.filter((t) => t !== topic)
                : [...prev, topic]);
        //The ... is the spread operator. It expands the elements of prev into a new array and then adds topic at the end.
    };
    const selectAll = () => setSelectedTopics([...topics]);
    const clearAll = () => setSelectedTopics([]);

    return (
        <div className="topics-container">
            <label>Topics (<span>{selectedTopics.length} / {topics.length} selected</span>)</label>
            <div className="topics-actions">
                <button className="topics-actions-button" onClick={selectAll}>Select All</button>
                <button className="topics-actions-button" onClick={clearAll}>Clear All</button>
            </div>
            <div className="topics-list"> {topics.map((topic) => (
                <label key={topic} className="topic-item"> <input type="checkbox"
                                                                  checked={selectedTopics.includes(topic)}
                                                                  onChange={() => handleTopicChange(topic)}/>
                    <span>{topic}</span> </label>))} </div>
            </div>);
}

export default Topics;