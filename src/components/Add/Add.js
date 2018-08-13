import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import './Add.css';

class Add extends Component {


    render() {
        return(
            <section>
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
            <section>
                <section className='plus-product'>
                    <div className='bin-input'>
                            <p>Name</p>
                        <input type="text"/>
                            <p>Price</p>
                        <input type="text" datatype='currency' pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"/>
                    </div>
                    <div className='plus-container'>
                        <button className='plus-button'>+ Add Inventory</button>
                    </div>
                </section>
            </section>
            </section>
        )
    }
}

export default Add;