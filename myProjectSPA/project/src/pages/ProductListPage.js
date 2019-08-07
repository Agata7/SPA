import React from 'react';
import {Link} from 'react-router-dom'

const products =["Flowers to your home ", "Flowers to your garden","The most popular flowers" ]

const ProductListPage = () => {
    const list = products.map(product => (
        <li key={product}>
            <Link to={`/product/${product}`}>{product}</Link>
        </li>
    ))
    return (
        <div className="productsList">
        <h2>Products list</h2>
        <div>
            <ul>{list}</ul>
        </div>
        </div>
    )
}

export default ProductListPage;