import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="flex flex-wrap items-start w-full sm:mx-10 md:mx-20 gap-y-10">
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 100 }}
        className="flex flex-col items-center md:items-end w-full md:w-1/2"
      >
        <div className="text-center mx-10">
          <h1 className="font-black text-2xl sm:text-3xl md:text-4xl underline uppercase my-2">
            Email
          </h1>
          <div className="flex flex-row md:text-xl text-2xl">
            <div className="flex flex-col uppercase font-semibold text-end mr-2 whitespace-nowrap">
              <span>fdelicafe@gmail.com</span>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 100 }}
        transition={{ delay: 0.03 }}
        className="flex flex-col justify-center items-center md:items-start w-full md:w-1/2"
      >
        <div className="text-center mx-10">
          <h1 className="uppercase text-2xl sm:text-3xl md:text-4xl underline font-black my-2">
            Phone
          </h1>
          <span className="font-semibold uppercase md:text-xl text-2xl">
            (914) 665-2258
          </span>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 100 }}
        transition={{ delay: 0.06 }}
        className="flex flex-col justify-center items-center w-full text-lg text-center"
      >
        <h1 className="uppercase text-2xl sm:text-3xl md:text-4xl underline font-black my-2">
          Location
        </h1>
        <span className="font-semibold uppercase md:text-xl text-2xl">
          525 Gramatan Ave
          <br />
          Mt Vernon, NY 10552
          <br />
        </span>
      </motion.div>
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 100 }}
        transition={{ delay: 0.06 }}
        className="flex flex-col justify-center items-center w-full text-lg text-center"
      >
        <span className="font-black text-2xl sm:text-3xl md:text-4xl underline uppercase my-2">
          Hours of Operation
        </span>
        <div className="flex flex-row md:text-xl text-2xl">
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
    </section>
  );
};

export default Contact;
