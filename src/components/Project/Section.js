import Image from "./Image"
import Video from "./Video"
const Section = ({data, index}) => {
    console.log('section data', data)
    const formatString = (str) => {
        if (str.split('\n').length === str.split(':').length) return str

        let textArray = []
        str.split('\n').forEach(segment => {
            segment.split(':').forEach((elem, index) => {
                if (index == 0) {
                    textArray.push(<b>{elem}:</b>)
                } else {
                    textArray.push(<span>{elem}</span>)
                    textArray.push(<br />)
                }
            })
        });
        return textArray

    }

    return(
        <section className="container--section" key={index}>
            <h1 className="has-text-weight-medium is-size-5">{data.header}</h1>
            {
                data.content?.length !== 0 && data.content?.map((item, index) => { 
                    return(
                    <div key={index}>
                        <p className="mb-1 lh-mobile is-size-6">{formatString(item.text)}</p>
                        {
                            'images' in item &&                            
                                <div>
                                    {                                                                               
                                        item.images?.map((image, index) => {
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
                                                <Image key={index} data={image}/>
                                            )                                            
                                        })
                                    }
                                </div>                                 
                        }
                        {
                            'videos' in item &&
                                <div>
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