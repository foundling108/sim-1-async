UPDATE shelfie
SET name = $3,
    price = $4,
    product_img = $5
WHERE shelf_letter = $1
AND bin_number = $2

RETURNING *

-- DELETE FROM shelfie
-- WHERE shelf_letter = $1
-- AND bin_number = $2;

-- Effect the bin # ONLY on its shelf(letter). Use the AND keyword.

-- can use update to set things to null to 'delete' them.