import { useEffect, useState } from "react";
import { CateringInfoType } from "~/catering";
import CateringCard from "./cateringCard";

const Catering = ({ catering }: {
  catering: CateringInfoType[]
}) => {
  const [leftCatering, setLeftCatering] = useState<CateringInfoType[]>([]);
  const [rightCatering, setRightCatering] = useState<CateringInfoType[]>([]);

  useEffect(() => {
    if (catering) {
      setLeftCatering(catering.slice(0, catering.length / 2));
      setRightCatering(catering.slice(catering.length / 2));
    }
  }, [catering]);

  return (<>
    <section className="flex flex-col lg:flex-row gap-x-20">
      <div>
        {
          leftCatering.map((item: CateringInfoType, index: number) => {
            return (
              <CateringCard 
                name={item.name} 
                description={item.description} 
                key={`cateringLeft${index}`}
              />
            )
          })
        }
      </div>
      <div>
        {
          rightCatering.map((item: CateringInfoType, index: number) => {
            return (
              <CateringCard
                name={item.name}
                description={item.description}
                key={`cateringRight${index}`}
              />
            )
          })
        }
      </div>
    </section>
  </>)
}

export default Catering;