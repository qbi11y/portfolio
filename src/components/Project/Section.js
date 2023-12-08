import Image from "./Image"
const Section = ({data, index}) => {
    console.log(data)
    return(
        <section className="container--section" key={index}>
            <h1 className="has-text-weight-medium is-size-5">{data.header}</h1>
            {
                data.content.length !== 0 && data.content.map((item, index) => { 
                    return(
                    <div key={index}>
                        <p className="mb-1 lh-mobile is-size-6">{item.text}</p>
                        {
                            'images' in item &&
                            
                                <div>
                                    {
                                                                               
                                        item.images.map((image, index) => {
                                            console.log('section image', image)
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
                    </div>
                    )
                    
                    })
            }
        </section>
    )

}

export default Section