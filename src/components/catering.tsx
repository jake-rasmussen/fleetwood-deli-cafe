import { useEffect, useState } from "react";
import { type CateringInfoListType, type CateringInfoType } from "~/catering";
import CateringCard from "./cateringCard";
import { motion } from "framer-motion";
import CateringListSection from "./cateringListSection";
import CateringCarousel from "./cateringCarousel";

const Catering = ({
  catering,
  cateringList,
}: {
  catering: CateringInfoType[];
  cateringList: CateringInfoListType[];
}) => {
  const [leftCatering, setLeftCatering] = useState<CateringInfoType[]>([]);
  const [rightCatering, setRightCatering] = useState<CateringInfoType[]>([]);

  const [leftCateringList, setLeftCateringList] = useState<
    CateringInfoListType[]
  >([]);
  const [rightCateringList, setRightCateringList] = useState<
    CateringInfoListType[]
  >([]);

  useEffect(() => {
    if (catering) {
      setLeftCatering(catering.slice(0, catering.length / 2));
      setRightCatering(catering.slice(catering.length / 2));
    }
    if (cateringList) {
      setLeftCateringList(cateringList.slice(0, cateringList.length / 2));
      setRightCateringList(cateringList.slice(cateringList.length / 2));
    }
  }, [catering, cateringList]);

  const imagePaths: string[] = [];
  for (let i = 1; i <= 4; i++) {
    imagePaths.push("/images/catering/" + i + ".jpeg");
  }

  return (
    <div className="flex flex-col items-center">
      <section className="flex flex-col lg:flex-row gap-x-20">
        <div>
          {leftCatering.map((item: CateringInfoType, index: number) => {
            return (
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 100 }}
                transition={{ delay: index / 50 }}
                key={`cateringLeft${index}`}
              >
                <CateringCard name={item.name} description={item.description} />
              </motion.div>
            );
          })}
        </div>
        <div>
          {rightCatering.map((item: CateringInfoType, index: number) => {
            return (
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 100 }}
                transition={{ delay: index / 50 }}
                key={`cateringRight${index}`}
              >
                <CateringCard name={item.name} description={item.description} />
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 mt-10">
        {leftCateringList.length > 0 && leftCateringList[0] && (
          <div>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 100 }}
              key={`cateringListLeft${0}`}
            >
              <CateringListSection
                name={leftCateringList[0].name}
                foods={leftCateringList[0].foods}
                disclaimer={leftCateringList[0].disclaimer}
              />
            </motion.div>
          </div>
        )}

        {rightCateringList.length > 0 && rightCateringList[0] && (
          <div>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 100 }}
              key={`cateringListLeft${0}`}
            >
              <CateringListSection
                name={rightCateringList[0].name}
                foods={rightCateringList[0].foods}
                disclaimer={rightCateringList[0].disclaimer}
              />
            </motion.div>
          </div>
        )}
      </section>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        key={`cateringListLeft${0}`}
        className="my-8 hidden lg:block overflow-hidden w-full"
      >
        <CateringCarousel imagePaths={imagePaths} />
      </motion.div>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 mt-10">
        <div>
          {leftCateringList.map((item: CateringInfoListType, index: number) => {
            if (index !== 0) {
              return (
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 100 }}
                  transition={{ delay: index / 50 }}
                  key={`cateringListLeft${index}`}
                >
                  <CateringListSection
                    name={item.name}
                    foods={item.foods}
                    disclaimer={item.disclaimer}
                  />
                </motion.div>
              );
            }
          })}
        </div>
        <div>
          {rightCateringList.map(
            (item: CateringInfoListType, index: number) => {
              if (index !== 0) {
                return (
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 100 }}
                    transition={{ delay: index / 50 }}
                    key={`cateringListRight${index}`}
                  >
                    <CateringListSection
                      name={item.name}
                      foods={item.foods}
                      disclaimer={item.disclaimer}
                    />
                  </motion.div>
                );
              }
            },
          )}
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        className="relative flex items-center  my-4 w-full text-center justify-center"
      >
        <div className="absolute w-1/4 h-1 bg-black z-0 left-0 lg:visible invisible" />
        <span className="bg-transparent px-8 z-10 font-bold uppercase text-md md:text-xl">
          Mexican, Chinese, and Caribbean menus{" "}
          <br className="hidden sm:block" />
          also available upon request
        </span>
        <div className="absolute w-1/4 h-1 bg-black z-0 right-0 lg:visible invisible" />
      </motion.div>
    </div>
  );
};

export default Catering;
