import Layout from "../components/layout/Layout"
import Title from "../components/title/Title"
import Card from "../components/card/Card"

import {IModels} from "../interfaces"

import "../styles/pages/Home.scss"
import Tabs from "../components/Tabs/Tabs"
import {useEffect, useState} from "react"
import Tab from "../components/Tabs/Tab"
import {useAppDispatch, useAppSelector} from "../store"
import {getPosts} from "../features/postingSlice"



const Home = () => {
  const [tab, setTab] = useState(0)
  const posts = useAppSelector((state) => state.postingReducer.posts)
  const favorites = useAppSelector((state) => state.postingReducer.favorites)
  const popular = useAppSelector((state) => state.postingReducer.popular)
  const loading = useAppSelector((state) => state.postingReducer.loading)

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getPosts(30))
  },[])

  const filteredPosts = [
    posts,
    posts.filter(post => favorites.includes(post.id)),
    posts.filter(post => popular.includes(post.id)),
  ][tab]

  return (
    <Layout>
      <Title text={'Blog'}/>

      <Tabs currentTab={tab} onChangeCurrentTab={setTab}>
        <Tab label={'All'}/>
        <Tab label={'Favorites'}/>
        <Tab label={'Popular'}/>
      </Tabs>

      {loading &&
        <h2>Loading...</h2>
      }

      {!loading && !filteredPosts.length &&
        <h2>Not Found posts</h2>
      }

      {!loading && !!filteredPosts.length &&
        <div className='home'>
          {filteredPosts.map((post: IModels) =>
            <Card key={post.id} {...post}  />
          )}
        </div>
      }
    </Layout>
  )
}

export default Home