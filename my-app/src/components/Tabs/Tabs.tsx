import React, { ReactElement, useState } from 'react';

import './tab.css';
import { TabTitle, Props as TabTitleProps } from './TabTitle';

type TabProps = {
  children: ReactElement<TabTitleProps>[];
  preSelectedTabIndex?: number;
};

type TabsState = {
  selectedTabIndex: number;
}

export const Tabs = (props: TabProps) => {
  const [preSelectedTabIndex, setPreselectedTabIndex] = useState(props.preSelectedTabIndex || 0);

  const handleSelectedTabIndex = (index: number) => setPreselectedTabIndex(index);

  return (
    <div className="tabs">
      <ul className='tabs__list'>
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
  )
};

class Tabs1 extends React.Component<TabProps, TabsState> {
  constructor(props: TabProps) {
    super(props);
    this.state = {
      selectedTabIndex: props.preSelectedTabIndex || 0,
    }
  }

  handleSelectedTabIndex = (index: number) => this.setState({ selectedTabIndex: index });

  render() {
    return (
      <div className="tabs">
        <ul className='tabs__list'>
          {this.props.children.map((item, index) => (
            <TabTitle
              key={item.props.title}
              title={item.props.title}
              index={index}
              isActive={index === this.state.selectedTabIndex}
              setSelectedTab={this.handleSelectedTabIndex}
            />
          ))}
        </ul>

        {/* show selected tab by index*/}
        {this.props.children[this.state.selectedTabIndex]}
      </div>
    )
  }
}
