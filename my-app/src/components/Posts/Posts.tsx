import React from "react";
import { PostsPreview } from "../PostPreview/PostPreview";
import { PostsSmall } from "../PostSmall/PostSmall";
import { Post } from "../Post/Post";
import "../Posts/posts.css";
type Props = {
  data: any;
};
export function Posts(props: Props): JSX.Element {
  return (
    <div className="posts-wrapper">
      <ul className="posts-list">
        <Post data={props.data[0]} />
        {props.data.map((i: any, index: any) => {
          return (
            <li className="post-item">
              <div className="posts-wrap">
                <PostsPreview data={i} />
              </div>
            </li>
          );
        })}
      </ul>
      <ul className="posts-small-list">
        {props.data.map((i: any, index: any) => {
          return (
            <li className="post-small-item">
              <div className="posts-small-wrap">
                <PostsSmall data={i} />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
