module.exports = {
    createProduct: (req, res ) => {
        const dbInstance = req.app.get('db');
        const { shelf_letter, bin_number } = req.params;
        const { name, price } = req.body;

        dbInstance.create_product_in_bin([  shelf_letter, bin_number, name, price  ])
        .then( (shelf) => {
            res.status(200).send( shelf )} )
        .catch( err => {
            res.status(500).send({errorMessage: "Could not add product"});
            console.log(err)
        } );
    },

    getBin: (req, res) => {
        const dbInstance = req.app.get('db');
        let {shelf_letter, bin_number } = req.params;
        const { name, price, product_img } = req.body;
         
        dbInstance.read_bin([shelf_letter, bin_number, name, price, product_img])
        .then( ( bin ) => res.status(200).send( bin ))
        .catch( err => {
            res.status(500).send({errorMessage: "Could not get bin"});
            console.log(err)
        } );
    },

    editBin: (req, res) => {
        const dbInstance = req.app.get('db');
        let {shelf_letter, bin_number } = req.params;
        const { name, price } = req.body;

        dbInstance.edit_product([ shelf_letter, bin_number, name, price ])
        .then( (shelf) => res.status(200).send(shelf) )
        .catch( err => {
            res.status(500).send({errorMessage: "Could not edit product"});
            console.log(err)
        } );
    },

    deleteBin: (req, res) => {
        const dbInstance = req.app.get('db');
        const { shelf_letter, bin_number } = req.params
        const { name, price, product_img } = req.body;

        dbInstance.shelf.delete_bin([ shelf_letter, bin_number, name, price, product_img])
        .then( (shelf) => res.status(200).send(shelf) )
        .catch( err => {
            res.status(500).send({errorMessage: "Could not delete"});
            console.log(err)
        } );
    }
}

