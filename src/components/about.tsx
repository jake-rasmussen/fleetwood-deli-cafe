import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 100 }}
    >
      <section className="flex flex-col">
        <div className="font-serif text-lg sm:text-xl md:text-2xl max-w-2xl text-center mx-4">
          At The Fleetwood Deli and Cafe, we take pride in showcasing Mom&apos;s
          Famous Homestyle Cooking, Baking, and BBQ. Our journey began with a
          vision to offer more than just meals – we wanted to craft experiences
          that evoke nostalgia and warmth, just like a home-cooked meal. Every
          dish on our menu is a testament to that vision, prepared with a touch
          of care and an abundance of love.
          {/* <div className="h-1 bg-black my-8 mx-14" /> */}
          <br /><br />
          So, whether you&apos;re seeking a quick bite to satisfy your cravings
          or planning an event that demands amazing food, The Fleetwood Deli and
          Cafe welcomes you with open arms with a menu that&apos;s designed to
          delight. Join us in celebrating the art of food, community, and the
          joy of sharing a meal that warms the heart and feeds the soul.
        </div>
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 100 }}
          transition={{ delay: 0.06 }}
          className="flex flex-col justify-center items-center w-full text-lg text-center border-y-4 border-deepred py-4 mt-8"
        >
          <span className="font-black text-2xl sm:text-3xl md:text-4xl uppercase">
            Our Email
          </span>
          <div className="flex flex-row md:text-xl text-2xl">
            <div className="flex flex-col underline font-semibold text-end mr-2 whitespace-nowrap">
              <span className="font-serif">fdelicafe@gmail.com</span>
            </div>
          </div>
        </motion.div>
        <div className="w-full h-96 relative my-8">
          <Image
            src="/images/logo.png"
            alt="Fleetwood Logo"
            layout="fill"
            className="object-cover"
          />
        </div>
      </section>
    </motion.div>
  );
};

export default About;
