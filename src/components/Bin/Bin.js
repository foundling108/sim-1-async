import React, {Component} from 'react';
// import axios from 'axios';

import './Bin.css';

class Bin extends Component {


    render() {
        return(
            <section className='bin-page'>
                <div className='product-img' >
                    <img src="" alt="product"/>
                </div>
                <section className='add-product'>
                    <div  className='bin-input' >  
                            <p>Name</p>
                        <input type="text"/>
                            <p>Price</p>
                            <input type="text" name="currency-field" id="currency-field" pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$" value="" data-type="currency" placeholder="$00.00"/>
                    </div>
                    <div className='edel-container'>
                        <button className='edit-delete'>EDIT</button>
                        <button className='edit-delete'>DELETE</button>
                    </div>
                </section>
            </section>
        )
    }
}

export default Bin;