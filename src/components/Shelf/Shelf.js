import React, {Component} from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

import './Shelf.css';

class Shelf extends Component {


    // display bins by conditional db. Does the bin have stuff in it? dispay "bin #" else display "+ Add to Bin", that will send you to a DIFFERENT route '/add'.

    render() {
        return(
            <section>
            <section className='shelfbar'>
            <div className='shelflabel'>
                <Link to='/'><img src="./logo.png" alt="SHELFIE-LOGO"/></Link>
            </div>
            <div className='shelf-letter'>
                <h1 className='shelf-title' >
                    SHELF {this.props.match.params.id}
                </h1>
            </div>
            </section>
            <section className='bin-display'>
               
                    <Link to='/bin'><button className='bin-buttons'>Bin 1</button></Link>
                    <Link to='/bin'><button className='bin-buttons'>Bin 2</button></Link>
                    <Link to='/bin'><button className='bin-buttons'>Bin 3</button></Link>
                    <Link to='/bin'><button className='bin-buttons'>Bin 4</button></Link>
                    <Link to='/bin'><button className='bin-buttons'>Bin 5</button></Link>
                    <Link to='/add'><button className='bin-buttons' id='plus-to-bin'>+ Add to Bin</button></Link>
                
            </section>
            </section>
        )
    }
}

export default Shelf;