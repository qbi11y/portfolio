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
                <h5>{content.personal.tag}</h5>
                <h1 className="is-size-1 is-size-3-mobile has-text-weight-medium header">{content.personal.title}</h1>
                <p className="is-hidden-desktop">{content.personal.shortStatement}</p>
                <p className="is-hidden-touch">{content.personal.longStatement}</p>
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
                
                <footer className="footer">

                
                <ul>
                    <li>Resume</li>
                    <li>
                        <p><a href="mailto:thompsonjamesquillan@gmail.com">thompsonjamesquillan@gmail.com</a></p>
                        <p>Austin, TX</p>
                    </li>
                    <li>Built with...</li>
                    <li>AWS s3</li>
                    <li>React</li>
                    <li>GitHub Actions (CI/CD)</li>
                </ul>
                </footer>
            </section>        
        </div>
    )}

export default Home