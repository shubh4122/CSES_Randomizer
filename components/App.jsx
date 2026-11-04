import React from 'react';
import Topics from "./Topics.jsx";
import {topics} from "../data/topics.js";
import ProblemStatus from "./ProblemStatus.jsx";

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
                    <Topics/>
                </div>

                <div className="cr-filter-group">
                    <ProblemStatus/>
                </div>
            </div>

            <div className="cr-actions">
                <button className="cr-random-btn">
                    Get Random Problem
                </button>

                {/*<button className="cr-dashboard-btn">*/}
                {/*    Dashboard ↗*/}
                {/*</button>*/}
            </div>
        </div>
    );
}

export default App;