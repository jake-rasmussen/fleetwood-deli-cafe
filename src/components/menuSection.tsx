import { type FoodType, type MenuSectionType } from "~/menu";
import FoodCard from "./foodCard";
import { motion } from "framer-motion";

const MenuSection = (props: MenuSectionType) => {
  const { name, foods, universalOptions } = props;

  return (
    <section className="relative max-w-lg m-2">
      <header
        className={`border-y-4 py-4  border-deepred ${
          universalOptions ? "px-10" : "px-20"
        }`}
      >
        <h3 className="text-3xl lg:text-4xl xl:text-5xl font-semibold uppercase text-center">
          {name}
        </h3>
      </header>
      <div
        className={`${
          universalOptions && "flex flex-row items-center"
        } my-10 mx-auto overflow-x-scroll`}
      >
        <div className="mx-auto w-fit mx-4">
          {foods.map((food: FoodType, index: number) => {
            return (
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 100 }}
                transition={{ delay: index / 50 }}
                className="w-fit"
                key={`food${index}`}
              >
                <FoodCard
                  food={food.food}
                  price={food.price}
                  options={food.options}
                  optionsInline={food.optionsInline}
                  description={food.description}
                />
              </motion.div>
            );
          })}
        </div>
        <div className="absolute right-0 -translate-y-4 sm:-translate-x-4">
          {universalOptions?.map((food: FoodType, index: number) => {
            return (
              <div
                className="flex flex-row items-center"
                key={`universalOption${index}`}
              >
                <h5 className="font-serif font-medium text-sm sm:text-md whitespace-nowrap font-semibold">
                  {food.food}
                </h5>
                <span className="mx-2 font-black font-sans text-deepred text-xs sm:text-sm">
                  {food.price?.toFixed(2)}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
