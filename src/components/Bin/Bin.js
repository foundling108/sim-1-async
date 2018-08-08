import React, {Component} from 'react';
// import axios from 'axios';

import './Bin.css';

class Bin extends Component {


    render() {
        console.log("askjdhgf")
        return(
            <section className='bin-page'>
                <div className='poduct-img' >
                    <img src="" alt="product"/>
                </div>
                <section>
                    <div  className='bin-input' >  
                            Name
                        <input type="text"/>
                            Price
                        <input type="text"/>
                    </div>
                    <div className='bin-buttons'>
                        <button>EDIT</button>
                        <button>DELETE</button>
                    </div>
                </section>
            </section>
        )
    }
}

export default Bin;