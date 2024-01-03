import { motion } from "framer-motion";
import { type CateringFoodType, type CateringInfoListType } from "~/catering";

const CateringListSection = (cateringListInfo: CateringInfoListType) => {
  const { name, foods, disclaimer } = cateringListInfo;

  return (
    <section className="relative max-w-lg m-2 font-serif">
      <header className="border-y-4 py-4 border-deepred font-sans">
        <h3 className="text-3xl lg:text-4xl xl:text-5xl font-semibold uppercase text-center">
          {name}
        </h3>
      </header>
      <div className="my-10 mx-auto overflow-x-scroll">
        <div className="mx-auto w-fit mx-4">
          {foods.map((food: string | CateringFoodType, index: number) => {
            return (
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 100 }}
                transition={{ delay: index / 50 }}
                key={`food${index}`}
              >
                {typeof food === "string" ? (
                  <h5 className="whitespace-nowrap font-sans text-lg sm:text-xl md:text-2xl font-semibold uppercase underline mb-2">
                    {food}
                  </h5>
                ) : (
                  <>
                    {

                    }
                    <div className="flex flex-row items-center ">
                      <h5 className="whitespace-nowrap font-medium sm:text-xl text-md font-semibold">
                        {food.name}
                      </h5>
                      <span className="mx-2 font-black font-sans text-sm sm:text-md text-deepred">
                        {food.info}
                      </span>
                    </div>
                    {food.options?.map((option, index: number) => {
                      return (
                        <div className="ml-4" key={`option${index}`}>
                          <span>{option.option}</span>
                          <span className="mx-2 font-black font-sans text-xs text-deepred">
                            {option.price?.toFixed(2)}
                          </span>
                        </div>
                      );
                    })}
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
        <div className="m-4">
          {disclaimer?.map((text: string, index: number) => (
              <div
                key={`${name}${disclaimer}${index}`}
                className="mx-8 lg:mx-20 text-center"
              >
                <span className="text-deepred font-sans uppercase font-black">
                  {text}
                </span>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default CateringListSection;
