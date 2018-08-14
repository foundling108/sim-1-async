import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import './Add.css';

class Add extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            price: 0,
            product_img: ''
        }
    }


    render() {
        return(
            <section>
            <section className='shelfbar'>
            <div className='binlabel'>
                <Link to='/'><img src="./logo.png" alt="SHELFIE-LOGO"/></Link>
            </div>
            <div className='bin-shelf-letter'>
                <h1 className='bin-shelf-title' onClick={ () => this.props.history.goBack()}>SHELF {this.props.match.params.id}</h1>
            </div>
            <div className='bin-number'>
                <h1 className='add-title' > Add to Bin {this.props.match.params.number} </h1>
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