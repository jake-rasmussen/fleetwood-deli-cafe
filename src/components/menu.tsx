import { type MenuSectionType } from "~/menu";
import MenuSection from "./menuSection";
import { useEffect, useState } from "react";

const Menu = ({ menu }: {
  menu: MenuSectionType[]
}) => {
  const [leftMenu, setLeftMenu] = useState<MenuSectionType[]>([]);
  const [rightMenu, setRightMenu] = useState<MenuSectionType[]>([]);

  useEffect(() => {
    if (menu) {
      setLeftMenu(menu.slice(0, menu.length / 2 + 1));
      setRightMenu(menu.slice(menu.length / 2 + 1));
    }
  }, [menu])

  return (
    <section className="flex flex-col lg:flex-row gap-x-20">
      <div>
        {
          leftMenu.map((item: MenuSectionType, index: number) => {
            return (
              <MenuSection
                name={item.name}
                foods={item.foods}
                key={`menu${index}`}
              />
            )
          })
        }
      </div>
      <div>
        {
          rightMenu.map((item: MenuSectionType, index: number) => {
            return (
              <MenuSection
                name={item.name}
                foods={item.foods}
                universalOptions={item.universalOptions}
                key={`menu${index}`}
              />
            )
          })
        }
        <section className="relative max-w-xl">
          <header className="border-y-4 py-4  border-blue px-20">
            <h3 className="text-4xl font-semibold uppercase text-center">Steam Table</h3>
          </header>
          <div className="flex flex-row my-10 items-center">
            <div className="mx-4 text-center font-serif">
              Featuring Daily Selections from our Italian, Caribbean, Mexican, Chinese, BBQ and Classic American Menus
            </div>
            <div className="mx-4 text-center font-serif sm:min-w-fit font-bold">
              Open <span className="whitespace-nowrap">Monday - Saturday</span>
              <br />
              10AM - 3PM
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Menu;