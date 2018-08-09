import React, {Component} from 'react';

import './Add.css';

class Add extends Component {


    render() {
        return(
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
        )
    }
}

export default Add;