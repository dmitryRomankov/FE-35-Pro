import React from "react";
import { PostsList } from "../Posts/PostsList";
import "../Posts/posts.css";
type Props = {
  data: any;
};
export function Posts(props: Props): JSX.Element {
  return (
    <div className="container">
      <ul className="posts-list">
        {props.data.map((i: any, index: any) => {
          return (
            <li className="post-item">
              <PostsList data={i} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
