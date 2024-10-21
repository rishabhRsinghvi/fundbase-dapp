import React, { useState } from 'react';

const CreateProject = () => {
    const [project, setProject] = useState({
        name: '',
        description: '',
        link: '',
        targetAmount: '',
        equityPercentage: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProject({
            ...project,
            [name]: value
        });
    };

    const createProject = async () => {
        // Add logic to interact with the smart contract
        console.log('Project Created:', project);
    };

    return (
        <div className="create-project">
            <h2>Create a New Project</h2>
            <input
                type="text"
                name="name"
                placeholder="Project Name"
                onChange={handleInputChange}
            />
            <textarea
                name="description"
                placeholder="Project Description"
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="link"
                placeholder="Project Link"
                onChange={handleInputChange}
            />
            <input
                type="number"
                name="targetAmount"
                placeholder="Target Amount (in ETH)"
                onChange={handleInputChange}
            />
            <input
                type="number"
                name="equityPercentage"
                placeholder="Equity Percentage"
                onChange={handleInputChange}
            />
            <button onClick={createProject}>Submit Project</button>
        </div>
    );
};

export default CreateProject;
