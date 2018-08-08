import React, {Component} from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

import './Shelf.css';

class Shelf extends Component {
    

    render() {
        return(
            <section className='bin-display'>
               
                    <Link to='/bin'><button className='bin-buttons'>Bin 1</button></Link>
                    <Link to='/bin'><button className='bin-buttons'>Bin 2</button></Link>
                    <Link to='/bin'><button className='bin-buttons'>Bin 3</button></Link>
                    <Link to='/bin'><button className='bin-buttons'>Bin 4</button></Link>
                    <Link to='/bin'><button className='bin-buttons'>Bin 5</button></Link>
                
            </section>
        )
    }
}

export default Shelf;