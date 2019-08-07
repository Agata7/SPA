import React from 'react';
import Article from '../components/Article'

const articles=[
    {
        id: 0,
        title: 'Lorem ipsum 1',
        author: "Excepteur Sint",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        id: 1,
        title: 'Lorem ipsum 2',
        author: "Duis Aute",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        id: 2,
        title: 'Lorem ipsum 3',
        author: "Occaecat Cupidatat",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
]
const HomePage = () => {
    const artList = articles.map(artList => (
        <Article key={artList.id} {...artList}/>
    ))
    return (
     <div>{artList}</div>   
    )
}

export default HomePage;