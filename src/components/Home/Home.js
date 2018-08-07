import React, {Component} from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

import './Home.css';

class Home extends Component {
    

    render() {
        return(
            <section className='shelf-display'>
               
                    <Link to='/shelves'><button className='shelf-buttons'>Shelf A</button></Link>
                    <Link to='/shelves'><button className='shelf-buttons'>Shelf B</button></Link>
                    <Link to='/shelves'><button className='shelf-buttons'>Shelf C</button></Link>
                    <Link to='/shelves'><button className='shelf-buttons'>Shelf D</button></Link>
                
            </section>
        )
    }
}

export default Home;