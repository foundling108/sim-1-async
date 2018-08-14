import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './Shelf.css';

class Shelf extends Component {
    constructor(){
        super()

        this.state = {
            bins: []
        }

        this.handleBins = this.handleBins.bind(this);
    }

    componentDidMount() {
        this.handleBins();
    }

    handleBins() {
       axios.get(`/api/shelf/${this.props.match.params.id}`)
       .then( (res) => {
           this.setState({
               bin: res.data
           })
       })
       .catch( (err) =>  {
           console.log(err)
       })
    }

    // display bins by conditional db. Does the bin have stuff in it? dispay "bin #" else display "+ Add to Bin", that will send you to a DIFFERENT route '/add'.

    render() {

        // let binOne = this.state.bins.map( (el, i) => (
            //if statement based off of name = null.
            /* if ( `${el.name} !== null && ${el.price} !== null` ){
                return(
                     <section className='bin-display'>
                        <Link to=`/shelf/${el.shelf_number}/bin/${el.bin_number}`>
                            <button className='bin-buttons'>
                                Bin 1
                            </button>
                        </Link>
                     </section>
                )
            } else { 
                return(
                    <Link to='/add'>
                        <button className='bin-buttons' id='plus-to-bin'>
                            + Add to Bin
                        </button>
                    </Link>
                )
             }*/
        // ))

        return(
            <section>
            <section className='shelfbar'>
            <div className='shelflabel'>
                <Link to='/'><img src="./logo.png" alt="SHELFIE-LOGO"/></Link>
            </div>
            <div className='shelf-letter'>
                <h1 className='shelf-title' >
                    SHELF {this.props.match.params.id}
                </h1>
            </div>
            </section>
            <section className='bin-display'>
               
                    <Link to='/shelf/A/bin/1'><button className='bin-buttons'>Bin 1</button></Link>
                    <Link to='/shelf/A/bin/2'><button className='bin-buttons'>Bin 2</button></Link>
                    <Link to='/shelf/A/bin/3'><button className='bin-buttons'>Bin 3</button></Link>
                    <Link to='/shelf/A/bin/4'><button className='bin-buttons'>Bin 4</button></Link>
                    <Link to='/shelf/A/bin/5'><button className='bin-buttons'>Bin 5</button></Link>
                    <Link to='/add'><button className='bin-buttons' id='plus-to-bin'>+ Add to Bin</button></Link>
                
            </section>
            </section>
        )
    }
}

export default Shelf;