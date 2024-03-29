import { Suspense } from "react";
import { Product } from "../../components/product/Product";
import { useFetchProducts } from "./useFetchProducts";
import { Spinner } from "../../ui";
import "./styles.scss";

export interface IProduct {
  createdAt: string;
  description: string;
  id: number;
  name: string;
  picture: string;
}

export const ProductList = () => {
  const { products, loading } = useFetchProducts();

  return (
    <div className="products-list">
      {loading && <Spinner />}

      {!loading &&
        products.map((product: IProduct) => {
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
