// src/components/pages/ProjectsPage.js
import React from 'react';
import GitHubProjects from '../github-components/GitHubProjects';


const ProjectsPage = () => {
  return (
    <div className="container">
      <h1>My Projects</h1>
      <GitHubProjects />
    </div>
  );
};

export default ProjectsPage;