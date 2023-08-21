import { FoodType } from "~/menu"

const FoodCard = (props: FoodType) => {
  const {
    food,
    price,
    options,
    optionsInline,
    description
  } = props;

  return (
    <section className="font-serif">
      <div className="flex flex-row items-center">
        <h5 className="font-medium text-lg">{food}</h5>
        <span className="mx-2 font-black font-sans">{price && "$"}{price}</span>
        {optionsInline && optionsInline.map((option) => {
          return (<>
            {option.option}
            <span className="mx-2 font-black font-sans text-xs">{option.price && "$"}{option.price}</span>
          </>);
        })}
      </div>
      <div>
        {options && options.map((option) => {
          return (<div className="ml-4">
            <span>{option.option}</span>
            <span className="mx-2 font-black font-sans text-xs">{option.price && "$"}{option.price}</span>
          </div>);
        })}
      </div>
      <div className="ml-4 max-w-md">
        {description && description}
      </div>
    </section>
  );
}

export default FoodCard;