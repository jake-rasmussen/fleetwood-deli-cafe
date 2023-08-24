import { CateringInfoType } from "~/catering";


const CateringCard = (cateringInfo: CateringInfoType) => {
  const { name, description } = cateringInfo;

  return (<div className="flex flex-col items-center mb-10"> 
    <h1 className="font-bold uppercase text-2xl my-1">{name}</h1>
    <span className="max-w-md text-center font-serif">{description}</span>
  </div>);
}

export default CateringCard;