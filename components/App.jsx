import React from 'react';
import Topics from "./Topics.jsx";
import {topics} from "../data/topics.js";
import ProblemStatus from "./ProblemStatus.jsx";
import {getRandomProblem} from "../services/problemSelector.js";
import {extractProblems} from "../services/problemExtractor.js";

// import "../entrypoints/style.css";

function App() {
    const [selectedTopics, setSelectedTopics] = useState([]);
    const [selectedStatuses, setSelectedStatuses] = useState(['Unsolved', 'Solved']);

    const launchRandomProblem = () => {
        const problems = extractProblems();

        // console.log('launchRandomProblem called with:', selectedTopics, selectedStatuses);


        const problem = getRandomProblem(
            problems,
            selectedTopics,
            selectedStatuses
        );

        if (!problem) {
            alert('No problems match your selected filters.');
            return;
        }

        window.open(problem.url, '_blank');
    };

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
                    <Topics
                        selectedTopics={selectedTopics}
                        setSelectedTopics={setSelectedTopics}/>
                </div>

                <div className="cr-filter-group">
                    <ProblemStatus
                        selectedStatuses={selectedStatuses}
                        setSelectedStatuses={setSelectedStatuses}/>
                </div>
            </div>

            <div className="cr-actions">
                <button className="cr-random-btn" onClick={launchRandomProblem}>
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