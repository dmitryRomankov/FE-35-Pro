import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

interface IProduct {
  productName: string;
  productImage: string;
  id: number;
}

export const Product = ({ productName, productImage, id }: IProduct) => {
  return (
    <Link to={`/products/${id}`}>
      <div className="product-card">
        <img
          alt={productName}
          src={productImage}
          className="product-card__image"
        />
        <div className="product-card__title">{productName}</div>
      </div>
    </Link>
  );
};
