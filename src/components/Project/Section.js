import { Suspense } from 'react';
import Thumbnail from './Thumbnail';

const Section = ({data}) => {
    console.log(data)
    const formatString = (idx, str) => {
        if (str.split('\\').length === str.split(':').length) return str
        let textArray = []
        str.split('\\').forEach(segment => {
            segment.split(':').forEach((elem, index) => {
                if (index === 0) {
                    textArray.push(<b key={Math.round((Math.random() *100) + index)}>{elem}:</b>)
                } else {
                    textArray.push(<span key={Math.round((Math.random() * 200) + index)}>{elem}</span>)
                    textArray.push(<br key={Math.round((Math.random() * 300) + index)} />)
                }
            })
        });
        return textArray
    }

    console.log('data', data)
    return(
        <section className="section--container">
            <div className="section--header">
                <h1 className={`has-text-weight-medium ${data.index === 0 ? "is-size-2-widescreen is-size-3-desktop is-size-3-tablet is-size-3" : "is-size-4-widescreen is-size-4-desktop is-size-4-tablet is-size-4"}`}>{data.section.header}</h1>
                {
                    'callout' in data.section.content[0] && <p className="callout">{data.section.content[0].callout}</p>
                }
            </div>
            <div className="section--content">
                <p className={`is-size-6 ${'media' in data.section.content[0] && "has-media"}`}>{formatString(data.section.index, data.section.content[0].text)}</p>
                <div className="thumbnails">
                {
                    'thumbnails' in data.section.content[0] && data.section.content[0].thumbnails.map((thumbnail, index) => (
                        <Suspense>
                            <Thumbnail data={thumbnail} index={index}/>
                        </Suspense>                        
                    ))
                }
                </div>
                
            </div>
        </section>
    )
}

export default Section