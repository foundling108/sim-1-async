import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './Bin.css';

class Bin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            price: '',
            product_img: ''
        }
        // price must be string because db is set to varchar(50)
        this.getBin = this .getBin.bind(this);
        this.updateBin = this.updateBin.bind(this);
        this.deleteBin = this.deleteBin.bind(this);


    }

    componentDidMount() {
        this.getBin();
    }

    getBin() {
        axios.get(`/api/bin/${this.props.match.params.id}${this.props.match.params.number}`)
        .then( (res) => {
            this.setState({
                name: res.data.name,
                price: res.data.price,
                product_img: res.data.product_img
            })
        })
        .catch((err) => {console.log(err)})
    }

    updateBin() {
        axios.put(`/api/bin/${this.props.match.params.id}${this.props.match.params.number}`, 
                 { name: this.state.name, price: this.state.price }
                 ).then( () => {
                     this.setState({
                         name: this.state.name,
                         price: this.state.price
                     })
                 } )
                 .catch((err) => {console.log(err)})
    }

    deleteBin() {
        axios.delete(`/api/bin/${this.props.match.params.id}${this.props.match.params.number}`)
        .then(() => {
            this.setState({
                name: '', 
                price: ''
            })
            this.props.history.goBack()
            //Thanks Andy
        }).catch((err) => {console.log(err)})
    }

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
                <h1 className='bin-title' > Bin {this.props.match.params.number} </h1>
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