import React from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";

const Project = () => {
    let { id } = useParams()
    return(
        <div>
            <h1>Project here { id }</h1>
            <p>Project { id } description here</p>
            <p><Link to="/portfolio">Back</Link></p>
        </div>
    )
}

export default Project