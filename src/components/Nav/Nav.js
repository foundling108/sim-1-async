import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
// import axios from 'axios';

import './Nav.css';

class Nav extends Component {


    render() {
        if (this.props.location.pathname === '/' ) {

            
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

        else if (this.props.location.pathname === '/shelves') {
            return(

                <section className='shelfbar'>
                    <div className='shelflabel'>
                        <Link to='/'><img src="./logo.png" alt="SHELFIE-LOGO"/></Link>
                    </div>
                    <div className='shelf-letter'>
                        <h1 className='shelf-title' >
                            Shelf #
                        </h1>
                    </div>
                </section>
            )
        }

        else if (this.props.location.pathname === '/bin') {
            return (
                <section className='shelfbar'>
                    <div className='binlabel'>
                        <Link to='/'><img src="./logo.png" alt="SHELFIE-LOGO"/></Link>
                    </div>
                    <div className='bin-shelf-letter'>
                        <Link to='/shelves'><h1 className='bin-shelf-title' >Shelf #</h1></Link>
                    </div>
                    <div className='bin-number'>
                        <h1 className='bin-title' > Bin # </h1>
                    </div>
                </section>
            )
        }

        else if (this.props.location.pathname === '/add') {
            return (
                <section className='shelfbar'>
                    <div className='binlabel'>
                        <Link to='/'><img src="./logo.png" alt="SHELFIE-LOGO"/></Link>
                    </div>
                    <div className='bin-shelf-letter'>
                        <Link to='/shelves'><h1 className='bin-shelf-title' >Shelf #</h1></Link>
                    </div>
                    <div className='bin-number'>
                        <h1 className='add-title' > Add to Bin # </h1>
                    </div>
                </section>
            )
        }
    }
}

export default withRouter(Nav);