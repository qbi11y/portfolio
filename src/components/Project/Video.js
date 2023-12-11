import { motion } from "framer-motion";

const Video = ({columnClass, data}) => { 
    //ensure that vertical images are show in thirds
    if (data.index < data.media.length) {
        if (data?.media[data.index]?.orient !== "vertical" && data?.media[data.index+1]?.orient === "vertical") {
            columnClass = "is-full"
        }

        if (data?.media[data.index]?.orient === "vertical") {
            columnClass = "is-third"
        }
    }
    return(
    <motion.div
        initial={{ opacity: 0.1 }}
        whileInView={{ opacity: 1, y: -25, transition: { duration: 1 } }}
        className={`media--item column is-full`}>
            <video controls>
                <source src={data.item.url} type="video/mp4" />
            </video>
            <section  className="is-size-7">{ data.item.caption }</section>
    </motion.div>
)}
export default Video