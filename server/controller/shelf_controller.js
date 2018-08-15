module.exports = {
    readShelf: ( req, res ) => {
        const dbInstance = req.app.get( 'db' );

    dbInstance.read_shelf([req.params.id])
        .then( (shelf) => {
            res.status(200).send(shelf)})
        .catch( err => {
            res.status(500).send({errorMessage: "Could not get shelf"});
            console.log(err)
        } );
    }
}

// This will allow the user to click the shelf (A-D) and see the bins on the shelf. 
