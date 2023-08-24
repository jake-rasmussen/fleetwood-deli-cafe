import { type FoodType, type MenuSectionType } from "~/menu";
import FoodCard from "./foodCard";

const MenuSection = (props: MenuSectionType) => {
  const { name, foods, universalOptions } = props;

  const USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  });

  return (
    <section className="relative max-w-xl">
      <header className={`border-y-4 py-4  border-blue ${universalOptions ? "px-10" : "px-20"}`}>
        <h3 className="text-4xl font-semibold uppercase text-center">{name}</h3>
      </header>
      <div className={`${universalOptions && "flex flex-row items-center"} my-10 mx-auto w-fit`}>
        <div className="flex flex-col mx-4">
          {foods.map((food: FoodType, index: number) => {
            return (
              <FoodCard
                food={food.food}
                price={food.price}
                options={food.options}
                optionsInline={food.optionsInline}
                description={food.description}
                key={`food${index}`}
              />
            )
          })}
        </div>
        <div className="absolute right-0 -translate-y-4 -translate-x-10">
          {universalOptions?.map((food: FoodType, index: number) => {
            return (
              <div className="flex flex-row items-center" key={`universalOption${index}`}>
                <h5 className="font-serif font-medium text-xs sm:text-sm whitespace-nowrap font-semibold">{food.food}</h5>
                <span className="mx-2 font-black underline font-sans text-deepred text-xs sm:text-md">{food.price && USDollar.format(food.price)}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );

}

export default MenuSection;