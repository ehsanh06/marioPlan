import React from 'react';

const ProjectList = () => {
    return (
        <div className="project-list section">

            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">

                    {/* 
                        Information will be dynamically obtained from database
                        Hardcoded until database is setup
                    */}
                    <span className="card-title">Project Title</span>
                    <p>Posted by Ehsan Hussain</p>
                    <p className="grey-text">12th October, 2pm</p>
                </div>
            </div>

            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">

                    {/* 
                        Information will be dynamically obtained from database
                        Hardcoded until database is setup
                    */}
                    <span className="card-title">Project Title</span>
                    <p>Posted by Ehsan Hussain</p>
                    <p className="grey-text">12th October, 2pm</p>
                </div>
            </div>

            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">

                    {/* 
                        Information will be dynamically obtained from database
                        Hardcoded until database is setup
                    */}
                    <span className="card-title">Project Title</span>
                    <p>Posted by Ehsan Hussain</p>
                    <p className="grey-text">12th October, 2pm</p>
                </div>
            </div>
        </div>
    )
};

export default ProjectList;