import Image from "./Image"
import Video from "./Video"
const Section = ({data}) => {
    const formatString = (str, idx) => {
        if (str.split('\n').length === str.split(':').length) return str
        let textArray = []
        str.split('\n').forEach(segment => {
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
        <section className="container--section">
            <h1 className="has-text-weight-medium is-size-5 is-family-code">{data.header}</h1>
            {
                data.content?.length !== 0 && data.content?.map((item, index) => { 
                    return(
                    <div key={index+10}>
                        <p className="mb-1 lh-mobile is-size-6">{formatString(item.text, index)}</p>
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
                    </div>
                    )                    
                })
            }
        </section>
    )
}

export default Section