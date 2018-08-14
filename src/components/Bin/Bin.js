import React, {Component} from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

import './Bin.css';

class Bin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            price: 0,
            product_img: ''
        }


    }

    // componentDidMount() {
    //     this.getBin();
    // }

    

    render() {
        return(
            <section>
            <section className='shelfbar'>
            <div className='binlabel'>
                <Link to='/'><img src="./logo.png" alt="SHELFIE-LOGO"/></Link>
            </div>
            <div className='bin-shelf-letter'>
                <h1 className='bin-shelf-title' onClick={ () => this.props.history.goBack()} >SHELF {this.props.match.params.id}</h1>
            </div>
            <div className='bin-number'>
                <h1 className='bin-title' > Bin # </h1>
            </div>
            </section>
            <section className='bin-page'>
                <div className='product-img' >
                    <img src="" alt="product"/>
                </div>
                <section className='add-product'>
                    <div  className='bin-input' >  
                            <p>Name</p>
                        <input type="text"/>
                            <p>Price</p>
                            <input type="text" placeholder="$00.00"/>
                    </div>
                    <div className='edel-container'>
                        <button className='edit-delete'>EDIT</button>
                        <button className='edit-delete'>DELETE</button>
                    </div>
                </section>
            </section>
            </section>
        )
    }
}

export default Bin;