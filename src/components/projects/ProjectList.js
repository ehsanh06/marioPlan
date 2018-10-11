import React from 'react';
import { Link } from 'react-router-dom';

import ProjectSummary from './ProjectSummary';

const ProjectList = ({projects}) => {
    return (
        <div className="project-list section">
            {
                // If we do have projects, then we'll map
                // If not then there are no projects to map

                projects && projects.map((project) => {
                    return (
                    <Link to={'/project/' + project.id}>
                        <ProjectSummary project={project} key={project.id} />
                    </Link>
                    )
                })
            }
        </div>
    )
};

export default ProjectList;