import React from 'react';

function App() {
    return (
        <div className="cses-randomizer">
            <div className="cr-header">
                <div>
                    <h2>CSES Randomizer</h2>
                    <p>Practice problems. Build intuition. Master algorithms.</p>
                </div>

                <span className="cr-version">v1.0</span>
            </div>

            <div className="cr-filters">
                <div className="cr-filter-group">
                    <label>Topics</label>
                    <select>
                        <option value="all">All Topics</option>
                        <option value="sorting">Sorting and Searching</option>
                        <option value="dp">Dynamic Programming</option>
                        <option value="graphs">Graph Algorithms</option>
                        <option value="trees">Tree Algorithms</option>
                    </select>
                </div>

                <div className="cr-filter-group">
                    <label>Difficulty</label>
                    <select>
                        <option value="all">All Difficulties</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>

                <div className="cr-filter-group">
                    <label>Problem Status</label>
                    <select>
                        <option value="unsolved">Unsolved</option>
                        <option value="attempted">Attempted</option>
                        <option value="all">All Problems</option>
                    </select>
                </div>
            </div>

            <div className="cr-actions">
                <button className="cr-random-btn">
                    Get Random Problem
                </button>

                <button className="cr-dashboard-btn">
                    Dashboard ↗
                </button>
            </div>
        </div>
    );
}

export default App;