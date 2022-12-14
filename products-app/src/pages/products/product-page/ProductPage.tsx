import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

import { productsApi } from "../../../constants";
import { IProduct } from "../Products";

export const ProductPage = () => {
  const [product, setProduct] = useState<IProduct>({
    name: "",
    createdAt: "",
    description: "",
    id: 0,
    picture: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`${productsApi}/${id}`);
      const product = await response.json();
      setProduct(product);
    };

    fetchProduct();
  }, [id]);

  const handleGoBack = () => navigate(-1);

  const handleChosePost =  (e) => {
    console.log(e.target.src);
  };

  return (
    <div>
      <button onClick={handleGoBack}>Back</button>
      <div>{product.name}</div>
      <div>{product.id}</div>
      <div>{product.description}</div>
      <img onClick={handleChosePost} src={product.picture} alt="Product" />
    </div>
  );
};
