import React from 'react';

import ProjectSummary from './ProjectSummary';

const ProjectList = () => {
    return (
        <div className="project-list section">

        {/* 
            Once hooked up to the database, we'll loop around the database data
            and only really need to append one <ProjectSummary />. For now this
            is just placeholding.
        */}
            <ProjectSummary />
            <ProjectSummary />
            <ProjectSummary />
            <ProjectSummary />
        </div>
    )
};

export default ProjectList;