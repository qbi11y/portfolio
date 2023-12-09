import Image from "./Image"
import Video from "./Video"
const Section = ({data}) => {
    console.log('section comp', data)
    const formatString = (str, idx) => {
        if (str.split('\\').length === str.split(':').length) return str
        let textArray = []
        str.split('\\').forEach(segment => {
            segment.split(':').forEach((elem, index) => {
                if (index == 0) {
                    textArray.push(<b key={Math.round((Math.random() *100) + index)}>{elem}:</b>)
                } else {
                    textArray.push(<span key={Math.round((Math.random() * 200) + index)}>{elem}</span>)
                    textArray.push(<br key={Math.round((Math.random() * 300) + index)} />)
                }
            })
        });
        return textArray
    }

    return(
        <section className="section--container">
            <h1 className="has-text-weight-medium is-size-5 is-family-code section--header"><span className="header--text">{data.header}</span></h1>
            <p className="is-size-6 is-size-6-mobile section--content">{formatString(data.content[0].text)}</p>
            {/* <h1 className="has-text-weight-medium is-size-5 is-family-code section--header">{data.header}</h1>
            {
                data.content?.length !== 0 && data.content?.map((item, index) => { 
                    return(
                    <>
                        <p className="is-size-6 is-size-6-mobile section--content">{formatString(item.text, index)}</p>
                        {
                            'images' in item &&                            
                                <div className="section--images">
                                    {                                                                               
                                        item.images?.map((image, indx) => {
                                            let columnClass = '';
                                            switch (item.images.length) {
                                                case 2:
                                                    columnClass = "is-full-tablet is-half";
                                                    break;
                                                case 3:
                                                    columnClass = "is-full-tablet is-one-third";
                                                    break;
                                                case 6:
                                                    columnClass = "is-full-tablet is-one-third";
                                                    break;
                                                default:
                                                    break;
                                            }
                                            return (
                                                <Image key={indx + 300} data={image}/>
                                            )                                            
                                        })
                                    }
                                </div>                                 
                        }
                        {
                            'videos' in item &&
                                <div className="section--images">
                                    {
                                        item.videos?.map((video, index) => (                                            
                                            <Video key={index} data={video} />                                            
                                        ))
                                    }
                                </div>                             
                        }                        
                    </>
                    )                    
                })
            } */}
        </section>
    )
}

export default Section