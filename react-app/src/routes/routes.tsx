import Blog from "../pages/blog"
import Read from "../pages/blog/read"
import SignIn from "../pages/signIn"

const routes = [
	{ path: '/', element: <Blog/> },
	{ path: '/blog/:id', element: <Read/> },
	{ path: '/signIn', element: <SignIn/> },
]

export {
	routes,
}

