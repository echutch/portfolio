import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        { name: 'Project 1', description: 'description', link: '#'},
        { name: 'Project 2', description: 'description', link: '#'},
        { name: 'Project 3', description: 'description', link: '#'}
    ];

    return (
        <section id="projects" className="projects">
            <h2>Projects</h2>
            <ul>
                {projects.map((project, index) => (
                    <li key={index}>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            View Project
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Projects;