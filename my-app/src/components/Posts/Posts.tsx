import React from "react";
import { PostsPreview } from "../PostPreview/PostPreview";
import { PostsSmall } from "../PostSmall/PostSmall";
import "../Posts/posts.css";
import { Link } from "react-router-dom";
import { Post } from "../Post/Post";

type Props = {
  data: any;
};
export function Posts(props: Props): JSX.Element {
  return (
    <Link to={"/"}>
      <div className="posts-wrapper">
        <ul className="posts-list">
          {props.data.map((i: any, index: any) => {
            return (
              <li className="post-item" key={index}>
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
              <li className="post-small-item" key={index}>
                <div className="posts-small-wrap">
                  <PostsSmall data={i} />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Link>
  );
}
