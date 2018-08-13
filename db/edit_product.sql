UPDATE shelfie
SET name = $3, price = $3
WHERE shelf_letter = $1
AND bin_number = $2

-- multiple conditionals use the AND keyword
-- only the name and the price coumns are affected by the input boxes