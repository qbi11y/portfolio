import React from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import projects from 'data/projects.json'; 

const Project = () => {
    let { id } = useParams()
    console.log(projects[id]["name"])
    return(
        <div>
            <h1>{ projects[id]["name"] }</h1>
            {
                projects[id]["sections"].map((section, index) => {
                    return(
                        <section key={index}>
                            <h1>{section.header}</h1>
                            <p>{section.text}</p>
                        </section>
                    )
                })
            }
            <p>{ projects[id]["name"] } description here</p>
            <p><Link to="/portfolio">Back</Link></p>
        </div>
    )
}

export default Project