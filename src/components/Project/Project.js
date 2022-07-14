import React from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import * as projects from '../../data/projects.json'; 

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
                    { projects[id]["sub"] }
                    </p>
                </div>
            </section>
            <div className="section--container">
                <p className="section"><Link to="/portfolio">Back</Link></p>
                {
                    projects[id]["sections"].map((section, index) => {                    
                        return(
                            <section className="section text" key={index}>
                                <h1 className="has-text-weight-bold">{section.header}</h1>
                                <p className="mb-6 text">{section.text}</p>
                                {
                                    section.images.length !== 0 && Object.keys(section.images).map((image, index) => (
                                        <div>
                                            <img alt={index} key={index} src={process.env.PUBLIC_URL + section.images[image]['url']} />
                                            <section>{ section.images[image]['caption']}</section>
                                        </div>
                                        )
                                    )
                                }
                            </section>
                        )
                    })
                }
                <p className="section"><Link to="/portfolio">Back</Link></p>
            </div>
        </div>
    )
}

export default Project