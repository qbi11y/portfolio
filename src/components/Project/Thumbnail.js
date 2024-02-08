const Thumbnail = ({data, index}) => {
    console.log('thumb', data)
    
    return(
        <div className="thumbnail" key={index}><img  alt={data.alt} src={process.env.PUBLIC_URL + data.url} /></div>
    )}

export default Thumbnail