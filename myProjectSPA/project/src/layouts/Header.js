import React from 'react';
import '../style/header.css';
import {Route, Switch} from 'react-router-dom';

import img1 from '../images/header1.jpg';
import img2 from '../images/header2.jpg';
import img3 from '../images/header3.jpg';
import img4 from '../images/header4.jpg';
import img5 from '../images/kwiat4a.jpg';
import img6 from '../images/kwiat5.jpg';
import logo from '../images/logo.png'

const Header = () => {
    
    return (
        <>
        <Switch>
        <Route path='/' exact render={()=> (
           <><div className="logo"><img src={logo} alt='logo'/></div>
           <h1><span className="top">FLOWERS</span><span className='bottom'> close to nature</span></h1>
           <img className="picture" src={img6} alt="flowers"/></>
        )} />
        <Route path='/products' render={()=> (
         <><div className="logo"><img src={logo} alt='logo'/></div>
         <h1><span className="top">FLOWERS</span><span className='bottom'> close to nature</span></h1> 
         <img className="picture" src={img2} alt="flowers"/></>
        )} />
        <Route path='/contact' render={()=> (
           <><div className="logo"><img src={logo} alt='logo'/></div>
           <h1><span className="top">FLOWERS</span><span className='bottom'> close to nature</span></h1>
           <img className="picture" src={img5} alt="flowers"/></>
        )} />
        <Route path='/admin' render={()=> (
          <><div className="logo"><img src={logo} alt='logo'/></div>
          <h1><span className="top">FLOWERS</span><span className='bottom'> close to nature</span></h1>
          <img className="picture" src={img4} alt="flowers"/></>
        )} />
        <Route path='/login' render={()=> (
          <><div className="logo"><img src={logo} alt='logo'/></div>
          <h1><span className="top">FLOWERS</span><span className='bottom'> close to nature</span></h1>
          <img className="picture" src={img1} alt="flowers"/></>
        )} />
        <Route path='/product/:id' render={()=> (
           <><div className="logo"><img src={logo} alt='logo'/></div>
           <h1><span className="top">FLOWERS</span><span className='bottom'> close to nature</span></h1>
           <img className="picture" src={img3} alt="flowers"/></>
        )} />
        
        </Switch>
        </>
    )
}

export default Header;