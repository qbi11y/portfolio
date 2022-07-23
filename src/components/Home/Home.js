import React from "react";
import projects from '../../data/projects.json';
import content from '../../data/content.json';  
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()

    const viewProject = (e) => {
        navigate('/portfolio/project/'+e.target.id)
    }

    return(
        <div className="container">
            <section className="section">
                <h5 className="header-tag">{content.personal.tag}</h5>
                <h1 className="is-size-1-widescreen is-size-1-mobile header">{content.personal.title}</h1>
                <p className="is-hidden-desktop text">{content.personal.shortStatement}</p>
                <p className="is-hidden-touch text">{content.personal.longStatement}</p>
            </section>
            {/* <section className="section">
                <h1 className="is-size-3">{content.process.title}</h1>
                <p>{content.process.text}</p>
            </section> */}
            <section className="section">                
                <ul>
                    {
                        Object.keys(projects).map((project, index) => 
                            (
                                <li className="project" id={index + 1} onClick={(e)=> {viewProject(e)}}key={index}>{ projects[index + 1]["name"] }</li>
                            )
                        )
                    }
                </ul>
            </section>
            <section className="section is-size-7">
                <footer className="footer columns">                
                    <ul className="column">
                        <li><a href="https://www.linkedin.com/in/jamesqthompson/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                        <li>
                            <p><a href="mailto:thompsonjamesquillan@gmail.com">thompsonjamesquillan@gmail.com</a></p>
                            <p>Austin, TX</p>
                        </li>
                        
                    </ul>
                    <div className="column">
                        <ul>
                            <li>v0.1</li>
                            <li className="has-text-weight-medium">Built using:</li>
                            <li>AWS s3</li>
                            <li>Bulma</li>
                            <li>GitHub Actions (CI/CD)</li>
                            <li>React</li>
                            
                        </ul>
                    </div>
                    <div className="column">
                        
                        <p className="is-italic">
                            I am using this portfolio as a code sandbox to continue to grow my dev skills. If something is broken, I am probaly experimenting!
                        </p>
                    </div>
                </footer>
            </section>     
        </div>
    )}

export default Home