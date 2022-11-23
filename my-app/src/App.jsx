import React, { useState, Component, useEffect, useCallback } from "react";
import { Button } from "./components/Button";
import { Welcome } from "./pages/Welcome";
import { Form } from "./components/Form/Form";
import { Input } from "./components/Input/Input";
import { Counter } from "./components/Counter/Counter";
import { Avatar } from "./components/Avatar/Avatar";
import { withTheme } from "./components/Hoc/withTheme";
import ThemeProvider from "./components/Hoc/ThemeProvider"
import { Registration } from "./pages/Registration/Registration";
import { Tabs } from "./components/Tabs/Tabs";
import { Tab } from "./components/Tabs/Tab";
import "./App.css"

const App = () => {
  // const [state, setState] = useState({
  //   posts: [],
  //   loading: false,
  //   name: '',
  // });

  // useEffect(() => {
  //   (async() => {
  //     setState((prevState) => ({
  //       ...prevState,
  //       loading: true
  //     }))
  //     const response = await fetch('response_1668708166439.json');
  //     const posts = await response.json();

  //     setState((prevState) => ({
  //       ...prevState,
  //       posts: posts.results,
  //       loading: false
  //     }))

  //     })();

  //     console.log('Mounted')
  // }, []);


  // const handleAddNewPost = useCallback(() => {
  //   const newpost = {
  //     author: 123,
  //     date: "2021-10-08",
  //     id: 11,
  //     image: "https://tms-studapi-dev.s3.amazonaws.com/media/Niira.jpg",
  //     lesson_num: 50,
  //     text: "my sisters cat",
  //     title: "New post",
  //   }

  //   setState((prevState) => ({
  //     ...prevState,
  //     posts: [...prevState.posts, newpost]
  //   }))
  // }, [id])

  //   const hadleAddNewPost = () => {
  //     const newpost = {
  //       author: 123,
  //       date: "2021-10-08",
  //       id: 11,
  //       image: "https://tms-studapi-dev.s3.amazonaws.com/media/Niira.jpg",
  //       lesson_num: 50,
  //       text: "my sisters cat",
  //       title: "New post",
  //     }
  //   }

  return (
    <div className="App">
      <Tabs>
        <Tab title="All">
          <div>All tab</div>
        </Tab>
        <Tab title="My Favorites">
          <div>My Favorites Tab</div>
        </Tab>
        <Tab title="Popular">
          <div>Popular tab</div>
        </Tab>
      </Tabs>
    </div>
  )

}

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       posts: [],
//       loading: false,
//     };
//   }

//   componentDidMount() {
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log('prevProps', prevProps);
//     console.log('prevState', prevState);
//   }

//   // componentWillUnmount() {
//   //   clearTimeout(timerId)
//   //   api.unsubscribe()
//   //   removeEventListener();
//   // };

//   hadleAddNewPost = () => {
//   const newpost = {
//     author: 123,
//     date: "2021-10-08",
//     id: 11,
//     image: "https://tms-studapi-dev.s3.amazonaws.com/media/Niira.jpg",
//     lesson_num: 50,
//     text: "my sisters cat",
//     title: "New post",
//   }

//   this.setState({ posts: [...this.state.posts, newpost] })
// }

//   render() {
//     return (
//       <div className="App">
//         <div className="container">
//         {!this.state.loading && this.state.posts.map((post) => {
//           return (
//             <div key={post.id} className="post">
//               <div key={post.id}>{post.title}</div>
//               <img className="post__image" src={post.image} />
//             </div>
//               )
//             })}
//             {this.state.loading && <div>Loading...</div>}
//             </div>
//           <button onClick={this.hadleAddNewPost}>Add post</button>
//       </div>
//     )
//   }
// }

export default App;
