SELECT * FROM shelfie
WHERE shelf_letter = $1
AND bin_number = $2;




-- This should look like the delete db, effect the bin # ONLY on its shelf(letter).