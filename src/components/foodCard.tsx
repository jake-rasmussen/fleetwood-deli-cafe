import { type FoodType } from "~/menu";

const FoodCard = (props: FoodType) => {
  const { food, price, options, optionsInline, description } = props;

  return (
    <section className="font-serif">
      <div className="flex flex-row items-center">
        <h5 className="font-medium whitespace-nowrap sm:text-xl text-md font-semibold">
          {food}
        </h5>
        <span className="mx-2 font-black font-sans text-deepred text-xs md:text-lg">
          {price?.toFixed(2)}
        </span>
        {optionsInline?.map((option, index: number) => {
          return (
            <div className="text-xs md:text-lg" key={`optionInline${index}`}>
              {option.option}
              <span className="mx-2 font-black font-sans text-deepred">
                {option.price?.toFixed(2)}
              </span>
            </div>
          );
        })}
      </div>
      <div>
        {options?.map((option, index: number) => {
          return (
            <div className="ml-4" key={`option${index}`}>
              <span className="text-xs md:text-lg">{option.option}</span>
              <span className="mx-2 font-black font-sans text-xs sm:text-sm text-deepred">
                {option.price?.toFixed(2)}
              </span>
            </div>
          );
        })}
      </div>
      <div className="ml-4 max-w-md sm:text-lg text-sm">
        {description && description}
      </div>
    </section>
  );
};

export default FoodCard;
