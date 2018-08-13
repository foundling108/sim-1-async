DELETE FROM shelfie
WHERE shelf_letter = $1
AND bin_number = $2;

-- Effect the bin # ONLY on its shelf(letter). Use the AND keyword.