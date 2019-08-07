import React from 'react';
import '../style/header.css';
import {Route, Switch} from 'react-router-dom';

import img1 from '../images/header1.jpg';
import img2 from '../images/header2.jpg';
import img3 from '../images/header3.jpg';
import img4 from '../images/header4.jpg';
import img5 from '../images/kwiat4a.jpg';
import img6 from '../images/kwiat5.jpg';

const Header = () => {
    
    return (
        <>
        <Switch>
        <Route path='/' exact render={()=> (
            <img src={img1} alt="flowers"/>
        )} />
        <Route path='/products' render={()=> (
            <img src={img2} alt="flowers"/>
        )} />
        <Route path='/contact' render={()=> (
            <img src={img5} alt="flowers"/>
        )} />
        <Route path='/admin' render={()=> (
            <img src={img4} alt="flowers"/>
        )} />
        <Route path='/login' render={()=> (
            <img src={img6} alt="flowers"/>
        )} />
        <Route path='/product/:id' render={()=> (
            <img src={img3} alt="flowers"/>
        )} />
        
        </Switch>
        </>
    )
}

export default Header;