import {motion } from "framer-motion";

function Hero() {
    return (
    <motion.div
        className = "hero"
        initail = {{ opacity: 0, y: 50 }}
        animate = {{ opacity: 1, y: 0 }}
        transition = {{ duration: 1 }}
    >
        <motion.h1
            initial = {{opacity: 0 }}
            animate = {{ opacity: 1 }}
            transition = {{ duration : 1 }}
        >
            Welcome to the College of Industrial Technology
        </motion.h1>

        <p>Building better future, with innovation and excellence.</p>

        <a href="#courses">
            <motion.button
                whilehover = {{ scale: 1.1 }}
                whileTap = {{ scale: 0.9 }}
                >
                view courses
                </motion.button>
        </a>

    </motion.div>
    );
}

export default Hero;