import { type MenuSectionType } from "~/menu";
import MenuSection from "./menuSection";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Menu = ({ menu }: { menu: MenuSectionType[] }) => {
  const [leftMenu, setLeftMenu] = useState<MenuSectionType[]>([]);
  const [rightMenu, setRightMenu] = useState<MenuSectionType[]>([]);

  useEffect(() => {
    if (menu) {
      setLeftMenu(menu.slice(0, menu.length / 2));
      setRightMenu(menu.slice(menu.length / 2));
    }
  }, [menu]);

  return (
    <section className="flex flex-col xl:flex-row gap-x-8 xl:gap-x-20 mx-4 w-full justify-center max-w-lg">
      <div>
        {leftMenu.map((item: MenuSectionType, index: number) => {
          return (
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 100 }}
              key={`menuLeft${index}`}
            >
              <MenuSection
                name={item.name}
                foods={item.foods}
                universalOptions={item.universalOptions}
              />
            </motion.div>
          );
        })}
      </div>
      <div>
        {rightMenu.map((item: MenuSectionType, index: number) => {
          return (
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 100 }}
              key={`menuRight${index}`}
            >
              <MenuSection
                name={item.name}
                foods={item.foods}
                universalOptions={item.universalOptions}
              />
            </motion.div>
          );
        })}
        {rightMenu.length !== 0 && leftMenu.length !== 0 ? (
          <section className="relative max-w-xl">
            <header className="border-y-4 py-4  border-deepred px-20">
              <h3 className="text-4xl font-semibold uppercase text-center">
                Steam Table
              </h3>
            </header>
            <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row my-10 items-center">
              <div className="m-4 text-center font-serif sm:text-lg">
                Featuring Daily Selections from our Italian, Caribbean, Mexican,
                Chinese, BBQ and Classic American Menus
              </div>
              <div className="mx-4 text-center font-serif sm:min-w-fit font-bold">
                Open{" "}
                <span className="whitespace-nowrap">Monday - Saturday</span>
                <br />
                10AM - 3PM
              </div>
            </div>
          </section>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default Menu;
