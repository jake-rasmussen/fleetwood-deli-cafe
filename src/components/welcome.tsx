import { motion } from "framer-motion";
import AnimatedTextCharacter from "./animatedText";
import Carousel from "./carousel";

const Welcome = () => {
  return (<section className="flex flex-col items-center justify-center">
    <h2 className="italic py-1 px-6 font-serif font-semibold">
      <AnimatedTextCharacter text={"A Place With Personality"} className="text-2xl sm:text-3xl md:text-5xl" />
    </h2>
    <motion.div
      initial={{ x: -40, opacity: 0 }}
      animate={{ x: 0, opacity: 100 }}
      transition={{ delay: 1.1 }}
      className="flex flex-col items-center justify-center"
    >
      <div className="font-serif text-xl max-w-2xl text-center text-sm mx-4">
        Welcome to The Fleetwood Deli and Cafe – a cherished cornerstone of Mount Vernon since 1991.
        For over three decades, we have been serving up a symphony of flavors that resonate with the soul,
        becoming a culinary sanctuary for both locals and visitors alike. <br /><br />
      </div>
    </motion.div>

    <div className="my-8 invisible lg:visible">
      <Carousel />
    </div>
  </section >);
}

export default Welcome;