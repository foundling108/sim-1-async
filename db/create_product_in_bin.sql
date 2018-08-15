UPDATE shelfie
SET name = $3, 
    price = $4,
    product_img = $5
WHERE shelf_letter = $1
AND bin_number = $2

RETURNING *

--^^^^^^^^^^^^^^^^ all columns set to null ^^^^^^^^^^^^^^^^^^^--

-- INSERT INTO shelfie ( name, price, product_img, shelf_letter, bin_number )
-- VALUES ($1, $2, $3, $4, $5)


-- SELECT *
-- FROM shelfie
-- WHERE bin_number = $1;