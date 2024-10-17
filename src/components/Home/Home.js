import React,  { useEffect, useState } from "react";
import projects from '../../data/projects.json';
import content from '../../data/content.json';  
import { useNavigate } from "react-router-dom";
import { Odometer } from "../Odometer";
import { motion } from "framer-motion";

const Home = () => {
    const [ isShort, setIsShort ] = useState(true)
    const [value, setValue] = useState(100);
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
            <h5 className="header-tag">{content.personal.tag}</h5>
            <motion.h1
                initial={{opacity: 0}}
                animate={{opacity: 1,transition: { duration: 5 }}}
                className="is-size-1-widescreen is-size-1-mobile header"><Odometer value={value} />
            </motion.h1>
            {/* <h1 className="is-size-1-widescreen is-size-1-mobile header">{content.personal.title}</h1> */}
            <h2 className="is-size-2 is-size-4-mobile sub-header" >Infusing life into designs through code</h2>
            <div className="is-hidden-desktop text">{isShort ? content.personal.shortStatement : content.personal.longStatement}
                <div onClick={() => setIsShort(!isShort)}>{isShort ? "Show more" : "Show less"}</div>
            </div>
            <div className="is-hidden-touch text">{content.personal.longStatement}</div>
        
        
            <div className="projects">
            {
                    Object.keys(projects).map((project, index) => 
                        (
                            projects[index+1]["active"] === true &&
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
            <div className="project spacer"></div>
            </div>

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