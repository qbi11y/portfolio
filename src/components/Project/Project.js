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
                                    <div className="section--media columns is-desktop is-multiline">
                                        {
                                            section.content[0]["media"].map((item, index) => {
                                                let columnClass = ""
                                                if (section.content[0]["media"]?.length == 1) {
                                                    //full
                                                    columnClass = "is-full"
                                                }

                                                if (section.content[0]["media"]?.length % 2 == 0) {
                                                    //half
                                                    columnClass = "is-half"
                                                }

                                                if (section.content[0]["media"]?.length % 3 == 0 || section.content[0]["media"]?.length >= 5) {
                                                    //third
                                                    columnClass = "is-one-third"
                                                }
                                                return(
                                                    <>
                                                        {
                                                            item.type == "image" ?
                                                                <Image columnClass={columnClass} data={{"index": index, "item": item, "media": section.content[0]["media"]}} /> : <Video columnClass={columnClass} data={{"index": index, "item": item, "media": section.content[0]["media"]}} />
                                                        }
                                                    </>
                                                )
                                            })
                                        }
                                    </div>
                                }
                            </div>
                        )
                    })
                }

                <div className="container--section">
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