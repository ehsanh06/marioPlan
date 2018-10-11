import React from 'react';

const ProjectSummary = ({project}) => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">

                <span className="card-title">{project.title}</span>
                {/* 
                        Information will be dynamically obtained from database
                        Hardcoded until database is setup
                */}
                <p>Posted by Ehsan Hussain</p>
                <p className="grey-text">12th October, 2pm</p>
            </div>
        </div>
    )
};

export default ProjectSummary;