import React, { useState, Component, useEffect, useCallback, useMemo, useContext, useRef, createRef } from "react";
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
import { ThemeContext } from "./components/Context/Context";
import "./App.css"

const App = () => {
  const theme = useContext(ThemeContext);

  const ref = useRef();
  const ref1 = createRef();

  // Rules of hooks
  // 1. Call only on the top level
  // 2. Only in function components
  // 3. Out of conditions and cycles

  useEffect(() => {
    if(ref.current) {
      ref.current.focus();
    }
  }, [])

  return (
    <div style={{ background: theme.dark.background, color: theme.dark.textColor}}>
      <input ref={ref} />
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
