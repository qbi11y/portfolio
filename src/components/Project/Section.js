const Section = ({data}) => {
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

    return(
        <section className="section--container">
            <h1 className={`has-text-weight-medium ${data.index === 0 ? "is-size-1-desktop is-size-1-tablet is-size-1" : "is-size-3-desktop is-size-3-tablet is-size-3"} section--header`}>{data.section.header}</h1>
            <p className={`is-size-6 section--content ${'media' in data.section.content[0] && "has-media"}`}>{formatString(data.section.index, data.section.content[0].text)}</p>
        </section>
    )
}

export default Section