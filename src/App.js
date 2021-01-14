import React from 'react';
import Timer from "./Timer/Timer.js";

function App() {
    return (
        <div>
            <Timer startTime={3600000} />
        </div>
    );
}

export default App;
