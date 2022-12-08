import React, { useEffect, useState } from "react";
import { Product } from "../../components/product/Product";
import { productsApi } from "../../constants";
import "./styles.scss";

export interface IProduct {
  createdAt: string;
  description: string;
  id: number;
  name: string;
  picture: string;
}

export const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(productsApi);
      const products = await response.json();

      setProducts(products);
    };

    fetchProducts();
  }, []);

  return (
    <div className="products-list">
      {products.map((product: IProduct) => {
        return (
          <Product
            key={product.id}
            productName={product.name}
            productImage={product.picture}
            id={product.id}
          />
        );
      })}
    </div>
  );
};
