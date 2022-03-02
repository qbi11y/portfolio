import React from "react";
import projects from 'data/projects.json';   
import { Link } from "react-router-dom";

const Home = () => (
        <div className="container">
            <section>
                <h5>whoami:: jamesqthompson</h5>
                <h1>Design Technologist</h1>
                <p>Statement about design and tech</p>
            </section>
            <section>                
                <ul>
                    {
                        Object.keys(projects).map((project, index) => 
                            (
                                <li key={index}><Link to={"/portfolio/project/"+ project}>{ projects[index + 1]["name"] }</Link></li>
                            )
                        )
                    }
                </ul>
                
                <ul>
                    <li>Projects</li>
                    <li>Resume</li>
                    <li>Certifications</li>
                    <li>Patents</li>
                    <li>Contact</li>
                    <li>Built with...</li>
                </ul>
            </section>        
        </div>
    )

export default Home