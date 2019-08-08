import React from 'react';
// import logo from '../images/logo.png';

const Article = (props) => {
    return (
        <div>
        {/* <img className='logoNav' src={logo} alt="logo"/> */}
        <h3>{props.title}</h3>
        <h4>Autor: {props.author}</h4>
        <p>{props.text}</p>
        </div>
    )
}

export default Article;