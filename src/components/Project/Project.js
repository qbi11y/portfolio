import React from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import * as projects from '../../data/projects.json'; 

const Project = () => {
    let { id } = useParams()
    console.log(projects[id]["name"])
    return(
        <div>
            <section className="hero is-primary">
                <div className="hero-body container--hero">
                    <p className="title">
                    { projects[id]["name"] }
                    </p>
                    <p className="subtitle">
                    { projects[id]["sub"] }
                    </p>
                </div>
            </section>
            <div className="container section-padding-large">
                <p className="container--section"><Link to="/portfolio">Back</Link></p>
                {
                    projects[id]["sections"].map((section, index) => {                    
                        return(
                            <section className="container--section" key={index}>
                                <h1 className="has-text-weight-medium is-size-5">{section.header}</h1>
                                {
                                    section.text.length !== 0 && Object.keys(section.text).map((p, index) => {
                                        return (
                                        <div key={index}>
                                            <p className="mb-1 lh-mobile">{section.text[p].p}</p>
                                            <div className="columns is-multiline is-variable">
                                            {
                                                section.text[p].images && Object.keys(section.text[p].images).map((image, index) => {
                                                    console.log('test', section.text[p].images.length)
                                                    let columnClass = '';

                                                    switch (section.text[p].images.length) {
                                                        case 2:
                                                            columnClass = "is-full-tablet is-half-widescreen";
                                                            break;
                                                        case 3:
                                                            columnClass = "is-full-tablet is-one-third-widescreen";
                                                            break;
                                                        case 6:
                                                            columnClass = "is-full-tablet is-one-third-widescreen";
                                                            break;
                                                        default:
                                                            break;

                                                    }
                                                    return(
                                                    <div className={`section column ${columnClass} column--content`} key={index}>
                                                        <img alt={index} src={process.env.PUBLIC_URL + section.text[p].images[image]['url']} />
                                                        <section className="is-size-7">{ section.text[p].images[image]['caption']}</section>
                                                    </div>
                                                )})
                                            }
                                            </div>
                                            {
                                                section.text[p].videos && Object.keys(section.text[p].videos).map((video, index) => (
                                                    <div className="section column" key={index}>
                                                        <video controls>
                                                            <source src={section.text[p].videos[video]['url']} type="video/mp4" />
                                                        </video>
                                                        <section  class="is-size-7">{ section.text[p].videos[video]['caption']}</section>
                                                    </div>
                                                ))
                                            }
                                        </div>)
                                    })
                                }
                                
                                <div className="columns is-desktop is-half-tablet">
                                {/* {
                                    section.images.length !== 0 && Object.keys(section.images).map((image, index) => (
                                        <div className="section column">
                                            <img alt={index} key={index} src={process.env.PUBLIC_URL + section.images[image]['url']} />
                                            <section>{ section.images[image]['caption']}</section>
                                        </div>
                                        )
                                    )
                                }
                                {
                                    section.videos && section.videos.length !== 0 && Object.keys(section.videos).map((video, index) => (
                                        <div className="section column" key={index}>
                                            <video controls>
                                                <source src={section.videos[video]['url']} type="video/mp4" />
                                            </video>
                                            <section>{ section.videos[video]['caption']}</section>
                                        </div>
                                        )
                                    )
                                } */}
                                </div>
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