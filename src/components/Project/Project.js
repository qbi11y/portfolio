import React from "react"
import { useParams } from "react-router-dom"

const Project = () => {
    let { id } = useParams()
    return(
        <div>Project here { id }</div>
    )
}

export default Project