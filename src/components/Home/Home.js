import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars -- kept ready for when the case study archive below is uncommented
import projects from '../../data/projects.json';
import content from '../../data/content.json';
import narrative from '../../data/narrative.json';
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
    const [ isShort, setIsShort ] = useState(true)
    const navigate = useNavigate()

    // eslint-disable-next-line no-unused-vars -- kept ready for when the case study archive below is uncommented
    const viewProject = (e) => {
        let id = 0
        if (e.target === e.currentTarget) {
            id = e.target.id
        } else {
            id = e.currentTarget.id
        }
        navigate('/portfolio/project/'+id)
    }

    const viewCaseStudy = (id) => {
        navigate('/portfolio/case-study/'+id)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [isShort])

    return(

        <div className="container">
            <motion.section
                className="narrative"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0, transition: { duration: .6 } }}>
                <p className="narrative--eyebrow is-size-7">{narrative.eyebrow}</p>
                <h1 className="narrative--headline is-size-3-widescreen is-size-4-mobile">{narrative.headline}</h1>
                <p className="narrative--subhead is-size-6">{narrative.subhead}</p>
                <p className="narrative--how is-size-6">{narrative.howIWork}</p>
            </motion.section>

            <div className="is-hidden-desktop text">{isShort ? content.personal.shortStatement : content.personal.longStatement}
                <div onClick={() => setIsShort(!isShort)}>{isShort ? "Show more" : "Show less"}</div>
            </div>
            <div className="is-hidden-touch text">{content.personal.longStatement}</div>

            <section className="proof-strip">
                {narrative.proofPoints.map((point) => (
                    <div className="proof-card" onClick={() => viewCaseStudy(point.projectId)} key={point.projectId}>
                        <p className="proof-card--stat-value">{point.stat}</p>
                        <p className="proof-card--stat-label">{point.statLabel}</p>
                        <h4 className="proof-card--headline is-size-5">{point.headline}</h4>
                        <p className="proof-card--blurb is-size-6">{point.blurb}</p>
                    </div>
                ))}
            </section>

            {/* <p className="narrative--close is-size-6">{narrative.close}</p> */}

            {/* Full case study archive temporarily hidden — only the 4 featured proof-strip projects are shown for now.
            <h3 className="all-work-header is-size-4">All Case Studies</h3>
            <div className="projects">
            {
                    Object.keys(projects).map((_, index) =>
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
            */}

            <section className="is-size-7">
                <footer className="footer">
                    <ul>
                        <li><a href="https://www.linkedin.com/in/jamesqthompson/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                        <li>
                            <p><a href="mailto:thompsonjamesquillan@gmail.com">thompsonjamesquillan@gmail.com</a></p>
                            <p>Austin, TX</p>
                        </li>

                    </ul>
                </footer>
            </section>
        </div>
    )}

export default Home
