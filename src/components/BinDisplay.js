// not sure what i can do with this, I kind of want to cry.
function binDisplay(props) {
    for( let i=0; i<=5; i++ ) {
            if( bin[number].name && bin[number].price === null) {
                return(
                    <Link to={`/add/${shelf_letter}/bin/${bin_number}`}>
                    <button className='bin-buttons' id='plus-to-bin'>
                        + Add to Bin
                    </button>
                </Link>
            )
        } else {
            return(
                <section className='bin-display'>
                    <Link to={`/shelf/${shelf_letter}/bin/${bin_number}`}>
                        <button className='bin-buttons'>
                            Bin {this.props.match.params.number}
                        </button>
                    </Link>
                </section>
            )
        }
    }
}

function binDisplay(props) {
    let showWhichBin = props.showWhichBin;
    if ( `${props.name} !== null && ${props.price} !== null` ){
        return(
            <section>
                <section className='bin-display'>
                    <Link to='/shelf/A/bin/1'>
                        <button className='bin-buttons'>
                            Bin 1
                        </button>
                    </Link>
                </section>
                <section className='bin-display'>
                    <Link to='/shelf/A/bin/2'>
                        <button className='bin-buttons'>
                            Bin 2
                        </button>
                    </Link>
                </section>
                <section className='bin-display'>
                    <Link to='/shelf/A/bin/3'>
                        <button className='bin-buttons'>
                            Bin 3
                        </button>
                    </Link>
                </section>
                <section className='bin-display'>
                    <Link to='/shelf/A/bin/4'>
                        <button className='bin-buttons'>
                            Bin 4
                        </button>
                    </Link>
                </section>
                <section className='bin-display'>
                    <Link to='/shelf/A/bin/5'>
                        <button className='bin-buttons'>
                            Bin 5
                        </button>
                    </Link>
                </section>
            </section>
        )
    } else { 
        return(
            <Link to='/add/A/bin/#'>
                <button className='bin-buttons' id='plus-to-bin'>
                    + Add to Bin
                </button>
            </Link>
        )
    }
}   


