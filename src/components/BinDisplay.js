// not sure what i can do with this, I kind of want to cry.

function binDisplay(props) {
    let showWhichBin = props.showWhichBin;
    if ( `${el.name} !== null && ${el.price} !== null` ){
        return(
            <section className='bin-display'>
                <Link to='/shelf/A/bin/1'>
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
    }

}   


