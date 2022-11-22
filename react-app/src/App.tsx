import React from 'react'

import Layout from "./components/Layout/Layout"
import Header from "./components/Header/Header"
import Title from "./components/Title/Title"
import Tabs from "./components/Tabs/Tabs"
import Tab from "./components/Tabs/Tab"
import Posts from "./components/Posts/Posts"

function App() {
  return (
    <>
      <Header/>

      <Layout>
        <Title text='Blog'/>

        <Tabs>
          <Tab label='All'/>
          <Tab label='My favorites'/>
          <Tab label='Popular'/>
        </Tabs>

        <Posts/>
      </Layout>
    </>
  )
}

export default App
