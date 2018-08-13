SELECT *
FROM shelfie
WHERE shelf_letter = $1;
ORDER BY bin_number DESC;