import { useEffect, useState } from "react";
import { CateringInfoType } from "~/catering";
import CateringCard from "./cateringCard";
import { motion } from "framer-motion";

const Catering = ({ catering }: {
  catering: CateringInfoType[]
}) => {
  const [leftCatering, setLeftCatering] = useState<CateringInfoType[]>([]);
  const [rightCatering, setRightCatering] = useState<CateringInfoType[]>([]);

  useEffect(() => {
    if (catering) {
      setLeftCatering(catering.slice(0, catering.length / 2));
      setRightCatering(catering.slice(catering.length / 2));
    }
  }, [catering]);

  return (<div className="flex flex-col items-center">
    <section className="flex flex-col lg:flex-row gap-x-20">
      <div>
        {
          leftCatering.map((item: CateringInfoType, index: number) => {
            return (
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 100 }}
                transition={{ delay: index / 50 }}
              >
                <CateringCard
                  name={item.name}
                  description={item.description}
                  key={`cateringLeft${index}`}
                />
              </motion.div>
            )
          })
        }
      </div>
      <div>
        {
          rightCatering.map((item: CateringInfoType, index: number) => {
            return (
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 100 }}
                transition={{ delay: index / 50 }}
              >
                <CateringCard
                  name={item.name}
                  description={item.description}
                  key={`cateringRight${index}`}
                />
              </motion.div>
            )
          })
        }
      </div>
    </section>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      className="relative flex items-center  my-4 w-full text-center justify-center"
    >
      <span className="bg-tan px-8 z-10 font-bold uppercase text-xl">Mexican, Chinese, and Caribbean menus <br />also available upon request</span>
      <div className="absolute w-full h-1 bg-deepred z-0" />
    </motion.div>
  </div>)
}

export default Catering;