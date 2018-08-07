import React, { Component } from 'react';
// import axios from 'axios';

import './Nav.css';

class Nav extends Component {


    render() {
        return(
            <section className='navbar'>
                <div className='navlabel' >
                    <img src="./logo.png" alt="SHELFIE-LOGO"/>
                    <h1 className='navshelfie'>
                        SHELFIE
                    </h1>
                </div>
            </section>
        )
    }
}

export default Nav;