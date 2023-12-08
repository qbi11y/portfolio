import { motion } from "framer-motion";

const Image = ({columnClass, data}) => (
    <motion.div
        initial={{ opacity: 0.1 }}
        whileInView={{ opacity: 1, y: -25, transition: { duration: 1 } }}
        className={`section--image`}>
            <img src={process.env.PUBLIC_URL + data.url} />
            <section className="is-size-7">{ data.caption }</section>
    </motion.div>
)

export default Image