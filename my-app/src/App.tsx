import React from 'react';
import {Post} from './components/Post';
import {posts} from '../src/data/posts'


function App() {
  return (
    
  //  {posts.map(post => <Post post={posts} key={post.id}/>)}
  <>
   <Post posts={posts[0]}/>
   
   <Post posts={posts[1]}/>
   console.log(fdsfgfre)
  
  </>
  )}

export default App;
