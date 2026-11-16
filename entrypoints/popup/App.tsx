import icon from '../../public/icon/128.png';

function App() {
    return (
        <div className="popup">

            {/* Header */}
            <header className="popup-header">
                <img src={icon} alt="CSES Randomizer" />

                <div>
                    <h1>CSES Randomizer</h1>
                    <span className="version">VERSION 1.0</span>
                </div>
            </header>

            {/* Main description */}
            <main>
                <div className="status">
                    <span className="status-dot"></span>
                    READY TO PRACTICE
                </div>

                <h2>Less choosing.<br />More solving.</h2>

                <p className="description">
                    Break away from predictable practice.
                    Let randomness decide what you solve next.
                </p>

                {/* How it works */}
                <div className="info-card">
                    <div className="info-icon">🎲</div>

                    <div>
                        <h3>How randomness works</h3>
                        <p>
                            Select your preferred topics and problem
                            statuses. The extension randomly picks
                            an eligible topic and then a problem
                            within it.
                        </p>
                    </div>
                </div>

                <div className="popup-note">
                    Open the CSES Problem Set to start practising.
                </div>
            </main>

            {/* Footer */}
            <footer>
                <span>Made by</span>
                <a
                    href="https://github.com/shubh4122"
                    target="_blank"
                    rel="noreferrer"
                >
                    shubh4122 ↗
                </a>
            </footer>

        </div>
    );
}

export default App;
