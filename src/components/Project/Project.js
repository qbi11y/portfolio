import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import * as projects from '../../data/projects.json'; 
import { motion } from "framer-motion";

const Project = () => {
    let { id } = useParams()
    console.log(projects[id]["name"])

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return(
        <div>
            <section className="hero is-info">
                <div className="hero-body container">
                    <p className="title">
                    { projects[id]["name"] }
                    </p>
                    <p className="subtitle">
                    { projects[id]["sub"] }
                    </p>
                </div>
            </section>
            <div className="container section-padding-large">
                <div className="container--section">
                    <Link to="/portfolio">
                        <div className="icon--link">
                            <span className="material-symbols-outlined" aria-label="left arrow back">arrow_circle_left</span> Project list
                        </div>                        
                    </Link>
                </div>
                {
                    projects[id]["sections"].map((section, index) => {                    
                        return(
                            <section className="container--section" key={index}>
                                <h1 className="has-text-weight-medium is-size-5">{section.header}</h1>
                                {
                                    section.text.length !== 0 && Object.keys(section.text).map((p, index) => {
                                        return (
                                        <div key={index}>
                                            <p className="mb-1 lh-mobile is-size-6">{section.text[p].p}</p>
                                            <div className="columns is-multiline is-variable">
                                            {
                                                section.text[p].images && Object.keys(section.text[p].images).map((image, index) => {
                                                    let columnClass = '';

                                                    switch (section.text[p].images.length) {
                                                        case 2:
                                                            columnClass = "is-full-tablet is-half-widescreen";
                                                            break;
                                                        case 3:
                                                            columnClass = "is-full-tablet is-one-third-widescreen";
                                                            break;
                                                        case 6:
                                                            columnClass = "is-full-tablet is-one-third-widescreen";
                                                            break;
                                                        default:
                                                            break;

                                                    }
                                                    return(
                                                    <motion.div
                                                        initial={{ opacity: 0.1 }}
                                                        whileInView={{ opacity: 1, y: -25, transition: { duration: 1 } }}
                                                        className={`section column ${columnClass} column--content`}
                                                        key={index}>
                                                            <img alt={index} src={process.env.PUBLIC_URL + section.text[p].images[image]['url']} />
                                                            <section className="is-size-7">{ section.text[p].images[image]['caption']}</section>
                                                    </motion.div>
                                                )})
                                            }
                                            </div>
                                            {
                                                section.text[p].videos && Object.keys(section.text[p].videos).map((video, index) => (
                                                    <motion.div
                                                        initial={{ opacity: 0.1 }}
                                                        whileInView={{ opacity: 1, y: -25, transition: { duration: 1 } }}
                                                        className="section column" key={index}>
                                                            <video controls>
                                                                <source src={section.text[p].videos[video]['url']} type="video/mp4" />
                                                            </video>
                                                            <section  className="is-size-7">{ section.text[p].videos[video]['caption']}</section>
                                                    </motion.div>
                                                ))
                                            }
                                        </div>)
                                    })
                                }
                            </section>
                        )
                    })
                }
                <div className="section">
                    <Link to="/portfolio">
                        <div className="icon--link">
                            <span className="material-symbols-outlined" aria-label="left arrow back">arrow_circle_left</span> Project list
                        </div>                        
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Project