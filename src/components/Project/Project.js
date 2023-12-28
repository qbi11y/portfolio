import React, { useEffect, Fragment, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import * as projects from '../../data/projects.json';
import Section from "./Section";
import Image from "./Image";
import Video from "./Video";

const Project = () => {
    const [ showOverlay, setShowOverlay ] = useState(false)
    const [ overlayImage, setOverlayImage ] = useState({})
    let { id } = useParams()
    let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth

    const handleOverlay = (e, img) => {
        console.log(e)
        
        if (w < 1200) {
            return null
        }

        if (img) {
            console.log('the image', img)
            setOverlayImage(img)
        }        
        setShowOverlay(prev => !prev)
        
    }
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return(
            <div className="container">
                <div className={`overlay ${showOverlay ? "show" : "hidden"}`}>                    
                    <div className="overlay--content">
                        <div className="overlay--close" onClick={handleOverlay}><button className="button is-light is-small"><ion-icon name="close-outline"></ion-icon></button></div>
                        <img className="image" alt={overlayImage.alt} src={process.env.PUBLIC_URL + overlayImage.url} />
                    </div>
                </div>
                <div className="container--section">
                    <Link to="/portfolio">
                        <button className="button is-link icon--link">
                            <span className="material-symbols-outlined" aria-label="left arrow back">arrow_circle_left</span> Project list
                        </button>                                              
                    </Link>
                </div>

                {
                    projects[id]["sections"].map((section, index) => {
                        return(
                            <>
                                <Section key={index} data={{section:section, index:index}} />
                                {
                                    'media' in section.content[0] &&
                                    <div className="section--media columns is-multiline">
                                        {
                                            section.content[0]["media"].map((item, index) => {
                                                let columnClass = ""
                                                
                                                if (section.content[0]["media"]?.length === 1) {
                                                    //full
                                                    columnClass = "is-full"
                                                }

                                                if (section.content[0]["media"]?.length % 2 === 0) {
                                                    //half
                                                    columnClass = "is-half"
                                                }

                                                if (section.content[0]["media"]?.length % 3 === 0 || section.content[0]["media"]?.length >= 5) {
                                                    //third
                                                    columnClass = "is-one-third"
                                                }
                                                return(
                                                    <>
                                                        
                                                        {
                                                            item.type === "image" ?
                                                                <Image handleOverlay={handleOverlay} columnClass={columnClass} data={{"index": index, "item": item, "media": section.content[0]["media"]}} /> : <Video columnClass={columnClass} data={{"index": index, "item": item, "media": section.content[0]["media"]}} />
                                                        }
                                                    </>
                                                )
                                            })
                                        }
                                    </div>
                                }
                            </>
                        )
                    })
                }

                <div className="container--section">
                    <Link to="/portfolio">
                        <button className="button is-link icon--link">
                            <span className="material-symbols-outlined" aria-label="left arrow back">arrow_circle_left</span> Project list
                        </button>                                              
                    </Link>
                </div>
            </div>
    )
}

export default Project