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
                            {
                                section.images.length && Object.keys(section.images).map((image, index) => {
                                    console.log('image', section.images[image]['url'])
                                    return(
                                    <img alt={index} src={process.env.PUBLIC_URL + section.images[image]['url']} />
                                    )
                                })
                            }
                        </section>
                    )
                })
            }
            <p className="section"><Link to="/portfolio">Back</Link></p>
        </div>
    )
}

export default Project