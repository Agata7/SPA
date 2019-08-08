import React from 'react';
import '../style/navigation.css'
import {NavLink} from 'react-router-dom';

const list =[
    {name: "start", path:"/", exact: true},
    {name: "produkty", path:"/products"},
    {name: "kontakt", path:"/contact"},
    {name: "admin", path:"/admin"},

]

const Navigation = () => {
    const menu= list.map(item=> (
        <li key={item.name}>
            <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
        </li>
    ))
    return (
        <nav>
            <ul>
                {menu}
            </ul>
        </nav>
    )
}

export default Navigation;