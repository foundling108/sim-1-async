import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './Bin.css';

class Bin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            edit: false,
            name: '',
            price: '',
            product_img: ''
        }
        // price must be string because db is set to varchar(50)
        this.updateBin = this.updateBin.bind(this);
        this.deleteBin = this.deleteBin.bind(this);
        this.editName = this.editName.bind(this);
        this.editPrice = this.editPrice.bind(this);
        this.editAndSave = this.editAndSave.bind(this);

    }

    componentDidMount() {
            axios.get(`/api/bin/${this.props.match.params.id}/${this.props.match.params.number}`)
                 .then(res => {
                    console.log(res.data)
                    this.setState({
                        name: res.data[0].name,
                        price: res.data[0].price,
                        product_img: res.data[0].product_img
                    });
                    })
                 .catch(err => {
                    console.log(err)
            })
        }

    editAndSave() {
        axios.put(`/api/bin/${this.props.match.params.id}/${this.props.match.params.number}`,
                 { name: this.state.name, price: this.state.price })
                 
                 this.setState({
                    edit: !this.state.edit
                 })
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
        axios.put(`/api/bin/${this.props.match.params.id}/${this.props.match.params.number}`)
        .then(() => {
            this.setState({
                name: null, 
                price: null,
                product_img: null
            })
            this.props.history.goBack()
            //Thanks Andy
        }).catch((err) => {console.log(err)})
    }

    editName(value) {
        this.setState({
            name: value
        })
    }

    editPrice(value) {
        this.setState({
            price: value
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
                <h1 className='bin-shelf-title' onClick={ () => this.props.history.goBack()} >SHELF {this.props.match.params.id}</h1>
            </div>
            <div className='bin-number'>
                <h1 className='bin-title' > Bin {this.props.match.params.number} </h1>
            </div>
            </section>
            <section className='bin-page'>
                <div className='product-img' >
                    <img src={this.state.product_img} alt="product"/>
                </div>
                <section className='add-product'>
                    <div  className='bin-input' >  
                            <p>Name</p>
                        <input type="text" onChange={e => {this.editName(e.target.value)}} placeholder={this.state.name} disabled={!this.state.edit}/>
                            <p>Price</p>
                            <input type="text"  onChange={e => {this.editPrice(e.target.value)}} placeholder={this.state.price} disabled={!this.state.edit}/>
                    </div>
                    <div className='edel-container'>

                    { this.state.edit === false
                        ?
                        <button className='edit-delete' onClick={this.editAndSave}>EDIT</button>
                        :
                        <button className='edit-delete' id='save-button' onClick={this.editAndSave} >SAVE</button>
                    }

                        <button className='edit-delete' onClick={this.deleteBin} >DELETE</button>
                    </div>
                </section>
            </section>
            </section>
        )
    }
}

export default Bin;

