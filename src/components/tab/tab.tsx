import React, { useState } from "react";

type PropType = {
  children: JSX.Element[];
};

const Tab = ({ children }: PropType) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const childrenWithProps = React.Children.map(
    children,
    (child, index: number) => {
      if (index === 0) {
        // If so, its the Tab List (the list of tab headers)
        return React.cloneElement(child, {
          activeTabIndex,
          setActiveTabIndex,
        });
      } else {
        // If not, then it is one of the Tab Content nodes
        return React.cloneElement(child, {
          isActive: index - 1 === activeTabIndex,
        });
      }
    },
  );

  return (
    <>
      <div className="w-full pb-10">{childrenWithProps}</div>
    </>
  );
};

export default Tab;
