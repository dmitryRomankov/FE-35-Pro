import Layout from "../../components/Layout/Layout"
import Title from "../../components/Title/Title"
import Posts from "../../components/Posts/Posts"

const Blog = () => {
	return (
		<Layout>
			<Title text='Blog'/>
			<Posts/>
		</Layout>
	)
}

export default Blog