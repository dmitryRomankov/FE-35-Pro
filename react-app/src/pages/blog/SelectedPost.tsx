import {useEffect, useState} from "react"
import {useNavigate, useParams} from "react-router-dom"
import {useAppDispatch, useAppSelector} from "../../store"

import Layout from "../../components/layout/Layout"
import Title from "../../components/title/Title"
import Popup from "../../components/popup/popup"

import "../../styles/pages/SelectedPost.scss"
import {getPost} from "../../features/postingSlice";




const SelectedPost = () => {
  const {id} = useParams()
  const [popup, setPopup] = useState(false)
  const dispatch = useAppDispatch()
  const loading = useAppSelector((state) => state.postingReducer.loading)

  useEffect(() => {
    dispatch(
      getPost(Number(id))
    )
  }, [])

  const navigate = useNavigate()
  const post = useAppSelector((state) => state.postingReducer.post)

  const handleBack = () => navigate(-1)

  const handleClick = () => {
    setPopup(!popup)
  }

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
      {Boolean(popup) &&
        <Popup
          title={post.title}
          img={post.image}
          onClick={handleClick}
        />
      }
      {loading &&
        <h2>Loading...</h2>
      }

      {!loading && !post &&
        <h2>Not Found posts</h2>
      }
      <div className={`card__selectedPost`}>
        <img src={post.image} alt={""} className={'card__select-img'} onClick={handleClick}/>
        <time>{post.date}</time>
        <h1>{post.title}</h1>
        <p>{post.text}</p>
      </div>
    </Layout>
  )
}

export default SelectedPost