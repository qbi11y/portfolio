import React, { useEffect, Fragment } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import * as projects from '../../data/projects.json'; 
import { motion } from "framer-motion";
import Section from "./Section";
import Image from "./Image";
import Video from "./Video";

const Project = () => {
    let { id } = useParams()

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return(
        <>
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
                        console.log('section', section)

                        return(
                            <div className="content--container">
                                <Section data={section} />
                                {
                                    'media' in section.content[0] &&
                                    <div className="section--images">
                                        {
                                            section.content[0]["media"].map((item, index) => {
                                                return(
                                                    <div>
                                                        {
                                                            item.type == "image" ?
                                                                <Image data={item} /> : <Video data={item} />
                                                        }
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                }
                            </div>
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
        </>
    )
}

export default Project