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
           console.log(res.data)
           this.setState({
               bins: res.data
           })
       })
       .catch( (err) =>  {
           console.log(err)
       })
    }
    
    render() {
        let binDisplay = this.state.bins.map( (el, i) =>{
            if(el.name === null && el.price === null){
                return(
                    <Link to={`/add/${el.shelf_letter}/bin/${el.bin_number}`} key={i}>
                        <button className='bin-buttons' id='plus-to-bin'>
                            + Add to Bin
                        </button>
                    </Link>
                )
            }
            else {
                return(
                    <Link to={`/shelf/${el.shelf_letter}/bin/${el.bin_number}`} key={i}>
                        <button className='bin-buttons'>
                            Bin {el.bin_number}
                        </button>
                    </Link>
                    )
                }
        })

    

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
               
                { binDisplay }
 
            </section>
            </section>
        )
    }
}

export default Shelf;




// <Link to='/shelf/A/bin/1'><button className='bin-buttons'>Bin 1</button></Link>
// <Link to='/shelf/A/bin/2'><button className='bin-buttons'>Bin 2</button></Link>
// <Link to='/shelf/A/bin/3'><button className='bin-buttons'>Bin 3</button></Link>
// <Link to='/shelf/A/bin/4'><button className='bin-buttons'>Bin 4</button></Link>
// <Link to='/shelf/A/bin/5'><button className='bin-buttons'>Bin 5</button></Link>
// <Link to='/add'><button className='bin-buttons' id='plus-to-bin'>+ Add to Bin</button></Link>