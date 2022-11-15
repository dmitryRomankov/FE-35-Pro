import React from 'react'

import Header from "./components/Header/Header"
import Title from "./components/Title/Title"
import TabList from "./components/TabList/TabList"
import Tab from "./components/TabList/Tab"

function App() {
  return (
    <>
      <Header/>
      <Title text='This is Title'/>

      <TabList>
        <Tab label='All'/>
        <Tab label='My favorites'/>
        <Tab label='Popular'/>
      </TabList>
    </>
  )
}

export default App
