import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './Add.css';

class Add extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            price: '',
            product_img: ''
        }

        this.addName = this.addName.bind(this);
        this.addPrice = this.addPrice.bind(this);
        this.addImage = this.addImage.bind(this);
    }

    addName(value) {
        this.setState({
            name: value
        })
    }

    addPrice(value) {
        this.setState({
            price: value
        })
    }

    addImage(value) {
        this.setState({
            product_img: value
        })
    }

    addToInventory() {
        axios.post(`/api/bin/${this.props.match.params.id}/${this.props.match.params.number}`, 
                  {name: this.state.name, price: this.state.price})
    }

    componentDidMount(){
        axios.get(`/api/bin/${this.props.match.params.id}/${this.props.match.params.number}`)
             .then(res => {
                this.setState({
                    name: res.data[0].name,
                    price: res.data[0].price
                })
                })
             .catch(err => {
                console.log(err)
        })
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
                        <input type="text" onChange={e => {this.addName(e.target.value)}} placeholder={this.state.name}/>
                            <p>Price</p>
                        <input type="text" onChange={e => {this.addPrice(e.target.value)}} placeholder={this.state.price} />
                    </div>
                    <div className='plus-container'>
                        <button className='plus-button' onClick={this.addToInventory}>+ Add Inventory</button>
                    </div>
                </section>
            </section>
            </section>
        )
    }
}

export default Add;