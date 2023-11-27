import { motion } from "framer-motion";
import { type CateringInfoListType } from "~/catering";


const CateringListSection = (cateringListInfo: CateringInfoListType) => {
  const { name, foods, disclaimer } = cateringListInfo;

  console.log(name, foods, disclaimer)

  return (
    <section className="relative max-w-lg font-serif">
      <header className="border-y-4 py-4  border-black px-20">
        <h3 className="text-4xl font-semibold uppercase text-center">{name}</h3>
      </header>
      <div className="my-10 mx-auto w-fit">
        <div className="flex flex-col mx-4">
          {foods.map((food: string, index: number) => {
            return (
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 100 }}
                transition={{ delay: index / 50 }}
                key={`food${index}`}
              >
                <h5 className="whitespace-normal  font-medium text-lg sm:text-lg text-sm font-semibold">{food}</h5>
              </motion.div>
            )
          })}
        </div>
        {
          disclaimer && <div className="mt-2">
            <span className="text-red-500 font-sans uppercase font-black">{disclaimer}</span>
          </div>
        }
      </div>
    </section>);
}

export default CateringListSection;