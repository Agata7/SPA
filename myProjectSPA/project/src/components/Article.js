import React from 'react';
const Article = (props) => {
    return (
        <div>
        <h3>{props.title}</h3>
        <h4>Autor: {props.author}</h4>
        <p>{props.text}</p>
        </div>
    )
}

export default Article;