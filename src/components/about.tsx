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
          <div className="h-1 bg-black my-8 mx-14" />
          So, whether you&apos;re seeking a quick bite to satisfy your cravings
          or planning an event that demands amazing food, The Fleetwood Deli and
          Cafe welcomes you with open arms with a menu that&apos;s designed to
          delight. Join us in celebrating the art of food, community, and the
          joy of sharing a meal that warms the heart and feeds the soul.
        </div>

        <div className="flex flex-col md:flex-row gap-4 mx-4 items-center my-8">
          <div className="w-80 sm:w-96 h-96 md:w-full md:h-96 relative">
            <Image
              src="/images/about/1.jpeg"
              alt="Fleetwood Logo"
              layout="fill"
              className="object-cover border border-deepred border-4 rounded-xl"
            />
          </div>
          <div className="h-96 w-80 sm:w-96 md:w-full relative">
            <Image
              src="/images/about/2.jpeg"
              alt="Fleetwood Logo"
              layout="fill"
              className="object-cover border border-deepred border-4 rounded-xl"
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
