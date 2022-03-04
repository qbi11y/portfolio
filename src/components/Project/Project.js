import React from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import projects from 'data/projects.json'; 

const Project = () => {
    let { id } = useParams()
    console.log(projects[id]["name"])
    return(
        <div className="container">
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">
                    { projects[id]["name"] }
                    </p>
                    <p className="subtitle">
                    Hero subtitle
                    </p>
                </div>
            </section>

            {
                projects[id]["sections"].map((section, index) => {
                    
                    return(
                        <section className="section text" key={index}>
                            <h1 className="has-text-weight-bold">{section.header}</h1>
                            <p>{section.text}</p>
                            <img src={section.images[0].url} />
                        </section>
                    )
                })
            }
            <p className="section"><Link to="/portfolio">Back</Link></p>
        </div>
    )
}

export default Project