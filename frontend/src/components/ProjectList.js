import React, { useEffect, useState } from 'react';

const ProjectList = () => {
    const [projects, setProjects] = useState([]);

    const fetchProjects = async () => {
        // Add logic to fetch projects from the smart contract
        console.log('Fetching projects...');
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    return (
        <div className="project-list">
            <h2>Available Projects</h2>
            <ul>
                {projects.map((project, index) => (
                    <li key={index}>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <a href={project.link}>More Info</a>
                        <p>Target: {project.targetAmount} ETH</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectList;
