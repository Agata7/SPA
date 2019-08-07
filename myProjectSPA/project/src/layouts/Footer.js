import React from 'react';
import {Route} from 'react-router-dom';
import '../style/css/style.css'

const Footer = () => {
    return (
        <div>
            <h2>Footer</h2>
            <Route path="/" exact render={()=>{
        return (
        <p>Jesteś na <span>stronie głównej</span></p>
        )
            }}/>
        <Route path="/:page" render={(props)=>{
        return (
        <p>Jesteś na <span>{props.match.params.page}</span></p>
        )
            }}/>    
        </div>
    )
}

export default Footer;