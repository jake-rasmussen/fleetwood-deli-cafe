import { type CateringInfoType } from "~/catering";

const CateringCard = (cateringInfo: CateringInfoType) => {
  const { name, description } = cateringInfo;

  return (
    <div className="flex flex-col items-center mb-10 mx-4">
      <h1 className="font-bold uppercase text-2xl lg:text-3xl my-1 text-center">
        {name}
      </h1>
      <span className="max-w-md text-center font-serif text-lg lg:text-xl">
        {description}
      </span>
    </div>
  );
};

export default CateringCard;
