import { type CateringInfoType } from "~/catering";

const CateringCard = (cateringInfo: CateringInfoType) => {
  const { name, description, pricing } = cateringInfo;

  return (
    <div className="flex flex-col items-center mb-10 mx-4">
      <h1 className="font-bold uppercase text-2xl lg:text-3xl my-1 text-center">
        {name}
      </h1>

      <span className="max-w-md text-center font-serif text-lg lg:text-xl">
        {description}
      </span>

      <div className="flex flex-wrap justify-center items-center gap-4 mt-2">
        {
          pricing.map((price: string, index: number) => (
            <div
              className=""
              key={`${name}price${index}`}
            >
              <span className="text-deepred font-sans uppercase font-semibold">
                {price}
              </span>
            </div>
          ))
        }
      </div>

    </div>
  );
};

export default CateringCard;
