import React from 'react';
import CreateProject from './components/CreateProject';
import ProjectList from './components/ProjectList';
import './styles/App.css';

function App() {
    return (
        <div className="App">
            <header>
                <h1>FundBase - Decentralized Shark Tank</h1>
            </header>
            <main>
                <CreateProject />
                <ProjectList />
            </main>
        </div>
    );
}

export default App;
