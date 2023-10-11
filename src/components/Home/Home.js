import React,  { useEffect, useState } from "react";
import projects from '../../data/projects.json';
import content from '../../data/content.json';  
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [ isShort, setIsShort ] = useState(true)
    const navigate = useNavigate()

    const viewProject = (e) => {
        let id = 0
        if (e.target === e.currentTarget) {
            id = e.target.id
        } else {
            id = e.currentTarget.id
        }
        navigate('/portfolio/project/'+id)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [isShort])

    return(
        
        <div className="container">
            <section className="section">
                <h5 className="header-tag">{content.personal.tag}</h5>
                <h1 className="is-size-1-widescreen is-size-1-mobile header">{content.personal.title}</h1>
                <div className="is-hidden-desktop text">{isShort ? content.personal.shortStatement : content.personal.longStatement}
                    <div onClick={() => setIsShort(!isShort)}>{isShort ? "Show more" : "Show less"}</div>
                </div>
                <div className="is-hidden-touch text">{content.personal.longStatement}</div>
            </section>
            <section className="section">
                <div className="projects">
                {
                        Object.keys(projects).map((project, index) => 
                            (
                                // <li className="project-item project-item--list" onClick={(e)=> {viewProject(e)}} key={index}>
                                //     <motion.div
                                //         className="project"
                                //         id={index + 1}
                                //         whileHover={{
                                //             x: -10,
                                //             transition: { duration: .5 },
                                //         }}>
                                //             { projects[index + 1]["name"] }
                                //     </motion.div>
                                // </li>
                                <div className="project" id={index + 1} onClick={(e)=> {viewProject(e)}} key={index}>
                                    <div className="project--icon">
                                        <img alt={projects[index + 1]["iconAlt"]} src={process.env.PUBLIC_URL + projects[index + 1]["icon"]} />
                                    </div>
                                    <div className="is-size-6">
                                        { projects[index + 1]["name"] }
                                    </div>
                                </div>
                            )
                        )
                    }
                    {/* <div className="project">
                        <div className="project--icon">
                            <img alt='image' src={process.env.PUBLIC_URL + "/icons/cloud.png"} />
                        </div>
                        <div>Cloud Brokerage Platform</div>
                    </div>
                    <div className="project">
                        <div className="project--icon">
                            <img alt='image' src={process.env.PUBLIC_URL + "/icons/predictive-analytics.png"} />
                        </div>
                        <div>Data Pipeline</div>
                    </div>
                    <div className="project">
                        <div className="project--icon">
                            <img alt='image' src={process.env.PUBLIC_URL + "/icons/photography.png"} />
                        </div>
                        <div>Photography Utility</div>
                    </div>
                    <div className="project">
                        <div className="project--icon">
                            <img alt='image' src={process.env.PUBLIC_URL + "/icons/automation.png"} />
                        </div>
                        <div>Auto AI Utility</div>
                    </div>
                    <div className="project">
                        <div className="project--icon">
                            <img alt='image' src={process.env.PUBLIC_URL + "/icons/svg.png"} />
                        </div>
                        <div>SVG Animation</div>
                    </div>
                    <div className="project">
                        <div className="project--icon">
                            <img alt='image' src={process.env.PUBLIC_URL + "/icons/chatbot.png"} />
                        </div>
                        <div>Watson Assistant</div>
                    </div> */}
                </div>

                {/* <div className="projects">
                    <div className="project">
                        <div className="image is-square">
                            <img alt='image' src={process.env.PUBLIC_URL + "/icons/automation.png"} />
                        </div>
                        <p className="caption">project name</p>
                    </div>
                    <div className="project">
                        <div className="image is-square">
                            <img alt='image' src={process.env.PUBLIC_URL + "/icons/chatbot.png"} />
                        </div>
                        <p className="caption">project name</p>
                    </div>
                    <div className="project">
                        <div className="image is-square">
                            <img alt='image' src={process.env.PUBLIC_URL + "/icons/cloud.png"} />
                        </div>
                        <p className="caption">project name</p>
                    </div>
                    <div className="project">
                        <div className="image is-square">
                            <img alt='image' src={process.env.PUBLIC_URL + "/icons/photography.png"} />
                        </div>
                        <p className="caption">project name</p>
                    </div>
                    <div className="project">
                        <div className="image is-square">
                            <img alt='image' src={process.env.PUBLIC_URL + "/icons/predictive-analytics.png"} />
                        </div>
                        <p className="caption">project name</p>
                    </div>
                    <div className="project">
                        <div className="image is-square">
                            <img alt='image' src={process.env.PUBLIC_URL + "/icons/svg.png"} />
                        </div>
                        <p className="caption">project name</p>
                    </div>
                </div> */}
                {/* <ul className="projects--cards">
                    {
                        Object.keys(projects).map((project, index) => 
                            (
                                <li className="project-item project-item--list" onClick={(e)=> {viewProject(e)}} key={index}>
                                    <motion.div
                                        className="project"
                                        id={index + 1}
                                        whileHover={{
                                            x: -10,
                                            transition: { duration: .5 },
                                        }}>
                                            { projects[index + 1]["name"] }
                                    </motion.div>
                                </li>
                            )
                        )
                    }
                </ul> */}
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
                            <li>v0.2</li>
                            <li className="has-text-weight-medium">Built using:</li>
                            <li>AWS s3</li>
                            <li>Bulma</li>
                            <li>Framer Motion</li>
                            <li>GitHub Actions (CI/CD)</li>
                            <li>Google Analytics</li>
                            <li>React</li>
                            
                        </ul>
                    </div>
                    <div className="column">
                        
                        <p className="is-italic">
                            I am using this portfolio as a code sandbox to continue to grow my dev skills. If something is broken, I am probably experimenting!
                        </p>
                    </div>
                </footer>
            </section>     
        </div>
    )}

export default Home