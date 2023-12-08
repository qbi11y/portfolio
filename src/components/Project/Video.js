import { motion } from "framer-motion";

const Video = ({data}) => (    
    <motion.div
        initial={{ opacity: 0.1 }}
        whileInView={{ opacity: 1, y: -25, transition: { duration: 1 } }}
        className="">
            <video controls>
                <source src={data.url} type="video/mp4" />
            </video>
            <section  className="is-size-7">{ data.caption }</section>
    </motion.div>
)
export default Video