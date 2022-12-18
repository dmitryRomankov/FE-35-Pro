import React from "react";
import { Link } from "react-router-dom";
import "../posts.css";
import data from "../../response_1668708166439.json";
export let postsData = data.results;

export interface IPost {
  id: number;
  title: string;
  date: string;
  image: string;
  text: string;
}
interface Props {
  itemImgClassName: string;
  imgClassName: string;
  postsItemTitleClassName: string;
  postsItemDateClassName: string;
  data: IPost;
}

export function PostsPreview(props: Props): JSX.Element {
  return (
    <Link to={`/posts/${props.data.id}`}>
      <div>
        <div className={props.itemImgClassName}>
          <img className={props.imgClassName} src={props.data.image} alt="#" />
        </div>
        <div className={props.postsItemTitleClassName}>{props.data.title}</div>
        <div className={props.postsItemDateClassName}>{props.data.date} </div>
      </div>
    </Link>
  );
}
