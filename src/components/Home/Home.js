import React from "react";
import projects from 'data/projects.json'   
import { Link } from "react-router-dom";

const Home = () => (
        <div className="container">
            <div className="column">
                <h1>Design Technologist</h1>
                <p>Statement about design and tech</p>
            </div>
            <div className="column">
                <ul>
                    {
                        Object.keys(projects).map((project, index) => {
                            console.log(project)
                            return(
                                <li key={index}><Link to={"/project/"+ (index+1)}>{ project }</Link></li>
                            )
                        })
                    }
                </ul>
                <ul>
                    <li>Projects</li>
                    <li>Resume</li>
                    <li>Certifications</li>
                    <li>Patents</li>
                </ul>
            </div>        
        </div>
    )

export default Home