import React from 'react';
import './styles.scss'

interface IProduct {
	productName: string;
	productImage: string;
	id: number;
}

export const Product = ({
	productName,
	productImage,
	id
}: IProduct) => {
	return (
		<div className="product-card">
			<img src={productImage} className="product-card__image" />
			<div className="product-card__title">{productName}</div>
		</div>
	)
};
