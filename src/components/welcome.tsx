import { motion } from "framer-motion";
import AnimatedTextCharacter from "./animatedText";
import Carousel from "./carousel";

const Welcome = () => {
  const imagePaths = [];
  for (let i = 1; i <= 10; i++) {
    imagePaths.push(`/images/food/${i}.jpeg`);
  }

  return (
    <section className="flex flex-col items-center justify-center w-full">
      <h2 className="italic py-1 px-6 font-serif font-semibold">
        <AnimatedTextCharacter
          text={"A Place With Personality"}
          className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
        />
      </h2>
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 100 }}
        transition={{ delay: 1.1 }}
        className="flex flex-col items-center justify-center"
      >
        <div className="font-serif text-lg sm:text-xl md:text-2xl max-w-2xl text-center mx-4">
          Welcome to The Fleetwood Deli and Cafe – a cherished cornerstone of
          Mount Vernon since 1991. For over three decades, we have been serving
          up a symphony of flavors that resonate with the soul, becoming a
          culinary sanctuary for both locals and visitors alike. <br />
          <br />
        </div>
      </motion.div>

      <div className="flex flex-col lg:flex-row relative my-10">
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 100 }}
          transition={{ delay: 1.3 }}
          className="flex flex-col items-center md:m-10"
        >
          <h1 className="font-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:no-underline underline uppercase mb-2">
            Our Hours
          </h1>
          <div className="flex flex-row text-2xl">
            <div className="flex flex-col underline font-semibold text-end mr-2 whitespace-nowrap">
              <span>SUN:</span>
              <span>MON-FRI:</span>
              <span>SAT:</span>
            </div>
            <div className="flex flex-col whitespace-nowrap text-start">
              <span>6:00AM-1:30PM</span>
              <span>5:00AM-4:00PM</span>
              <span>6:00AM- 3:00PM</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 100 }}
          transition={{ delay: 1.5 }}
          className="h-full w-1 bg-black"
        />

        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 100 }}
          transition={{ delay: 1.4 }}
          className="text-center m-10"
        >
          <h1 className="font-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:no-underline underline uppercase mb-2">
            Our Address
          </h1>
          <span className="font-semibold uppercase text-xl">
            525 Gramatan Ave
            <br />
            Mt Vernon, NY 10552
            <br />
          </span>
        </motion.div>
      </div>

      <div className="my-8 hidden lg:block overflow-hidden w-full">
        <Carousel imagePaths={imagePaths} />
      </div>
    </section>
  );
};

export default Welcome;
