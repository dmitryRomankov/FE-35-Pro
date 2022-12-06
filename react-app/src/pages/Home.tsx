import Layout from "../components/layout/Layout"
import Title from "../components/title/Title"
import Card from "../components/card/Card"

import {IModels} from "../interfaces"
import db from '../db.json'

import "../styles/pages/Home.scss"

const Home = () => {
  return (
    <Layout>
      <Title text={'Blog'}/>

      <div className='home'>
        {db.results.map((post: IModels) =>
          <Card key={post.id} {...post}  />
        )}
      </div>
    </Layout>
  )
}

export default Home