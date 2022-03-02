import React from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import projects from 'data/projects.json'; 

const Project = () => {
    let { id } = useParams()
    return(
        <div>
            <h1>Project here { projects[id]["name"] }</h1>
            <p>Project { projects[id]["name"] } description here</p>
            <p><Link to="/portfolio">Back</Link></p>
        </div>
    )
}

export default Project