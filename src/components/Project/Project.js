import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import * as projects from '../../data/projects.json'; 
import { motion } from "framer-motion";
import Section from "./Section";

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
                    projects[id]["sections"].map((section, index) => (                        
                        <Section key={index+500} data={section}/>                        
                    ))
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