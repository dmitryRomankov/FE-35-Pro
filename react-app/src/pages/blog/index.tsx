import React from "react"

import Layout from "../../components/Layout/Layout"
import Title from "../../components/Title/Title"
import Tabs from "../../components/Tabs/Tabs"
import Tab from "../../components/Tabs/Tab"
import Posts from "../../components/Posts/Posts"
import Pagination from "../../components/Pagination/Pagination"

const Blog = () => {
	return (
		<Layout>
			<Title text='Blog'/>

			<Tabs>
				<Tab label='All'/>
				<Tab label='My favorites'/>
				<Tab label='Popular'/>
			</Tabs>

			<Posts/>
			<Pagination/>
		</Layout>
	)
}

export default Blog