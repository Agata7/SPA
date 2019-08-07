import React from 'react';

const Product = (props) => {
    return (
        <article className='product'>
             <h1>{props.id}</h1> 
             <h2>Nasza oferta</h2>  
            </article>
    )
}

export default Product;