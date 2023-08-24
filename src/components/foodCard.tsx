import { type FoodType } from "~/menu"

const FoodCard = (props: FoodType) => {
  const {
    food,
    price,
    options,
    optionsInline,
    description
  } = props;

  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  });

  return (
    <section className="font-serif">
      <div className="flex flex-row items-center">
        <h5 className="font-medium text-lg whitespace-nowrap sm:text-lg text-sm font-semibold">{food}</h5>
        <span className="mx-2 font-black underline font-sans text-deepred text-xs md:text-md">{price && USDollar.format(price)}</span>
        {optionsInline?.map((option, index: number) => {
          return (<div key={`optionInline${index}`}>
            {option.option}
            <span className="mx-2 font-black font-sans text-xs text-deepred underline">{option.price && USDollar.format(option.price)}</span>
          </div>);
        })}
      </div>
      <div>
        {options?.map((option, index: number) => {
          return (<div className="ml-4" key={`option${index}`}>
            <span>{option.option}</span>
            <span className="mx-2 font-black font-sans text-xs text-deepred underline">{option.price && USDollar.format(option.price)}</span>
          </div>);
        })}
      </div>
      <div className="ml-4 max-w-md sm:text-md text-sm">
        {description && description}
      </div>
    </section>
  );
}

export default FoodCard;