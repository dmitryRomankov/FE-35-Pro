import {useNavigate, useParams} from "react-router-dom"
import Layout from "../../components/layout/Layout"
import Title from "../../components/title/Title"
import Card from "../../components/card/Card"

import {IModels} from "../../interfaces"
import db from "../../db.json"

import "../../styles/pages/SelectedPost.scss"

const SelectedPost = () => {
  const {id} = useParams()
  const navigate = useNavigate()

  const post = db.results.find((post: IModels) => post.id === Number(id))

  const handleBack = () => navigate(-1)

  if (!post) {
    return (
      <div className={'notFoundPost'}>
        <Title text={'Post not found'}/>
        <button className={'btnDefault'} type='button' onClick={handleBack}>Back</button>
      </div>
    )
  }

  return (
    <Layout>
      <div className={`card__selectedPost`}>
        <img src={post.image} alt={""} className={'card__select-img'}/>
        <time>{post.date}</time>
        <h1>{post.title}</h1>
        <p>{post.text}</p>
      </div>
    </Layout>
  )
}

export  default SelectedPost