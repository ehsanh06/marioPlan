import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;

    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    {/* 
                        Information will be dynamically obtained from database
                        Hardcoded until database is setup
                    */}
                    <span className="card-title">Project Title - {id}</span>

                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus ratione quasi mollitia cumque, nisi, animi, voluptatibus alias aut quo ad voluptatum possimus doloremque impedit hic inventore quas voluptas sit molestiae.</p>
                </div>

                <div className="card-action grey lighten-4 grey-text">
                    <div>
                        Posted by Ehsan Hussain
                    </div>
                    <div>
                        2nd October, 6pm
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;