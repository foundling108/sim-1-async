module.exports = {
    createProduct: (req, res ) => {
        const dbInstance = req.app.get('db');
        
       
        dbInstance.create_product_in_bin([  /*What goes here?*/ ])
        .then( (shelf) => {
            res.status(200).send( shelf )} )
        .catch( err => {
            res.status(500).send({errorMessage: "Could not add product"});
            console.log(err)
        } );
    },

    getBin: (req, res) => {
        const dbInstance = req.app.get('db');
        
         
        dbInstance.get_bin([req.params.bin_number])
        .then( ( shelf ) => res.status(200).send( shelf ))
        .catch( err => {
            res.status(500).send({errorMessage: "Could not get bin"});
            console.log(err)
        } );
    },

    editBin: (req, res) => {
        const dbInstance = req.app.get('db');
        const { name, price, product_img } = req.body;

        dbInstance.edit_bin([ req.params.bin_number, name, price, product_img ])
        .then( (shelf) => res.status(200).send(shelf) )
        .catch( err => {
            res.status(500).send({errorMessage: "Could not edit product"});
            console.log(err)
        } );
    },

    deleteBin: (req, res) => {
        const dbInstance = req.app.get('db');
        const { params } = req;

        dbInstance.shelf.delete_bin([params.bin_number])
        .then( (shelf) => res.status(200).send(shelf) )
        .catch( err => {
            res.status(500).send({errorMessage: "Could not delete"});
            console.log(err)
        } );
    }
}

