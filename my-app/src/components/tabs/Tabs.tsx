import React, { ReactElement, useState } from "react";
import "./tab.css";
import { TabTitle, Props as TabTitleProps } from "./TabTitle";

interface ITabProps {
  children: ReactElement<TabTitleProps>[];
  preSelectedTabIndex?: number;
}

export const Tabs = (props: ITabProps) => {
  const [preSelectedTabIndex, setPreselectedTabIndex] = useState(
    props.preSelectedTabIndex || 0
  );

  const handleSelectedTabIndex = (index: number) =>
    setPreselectedTabIndex(index);

  return (
    <div className="tabs">
      <ul className="tabs__list">
        {props.children.map((item, index) => (
          <TabTitle
            key={item.props.title}
            title={item.props.title}
            index={index}
            isActive={index === preSelectedTabIndex}
            setSelectedTab={handleSelectedTabIndex}
          />
        ))}
      </ul>

      {/* show selcted tab by index*/}
      {props.children[preSelectedTabIndex]}
    </div>
  );
};
