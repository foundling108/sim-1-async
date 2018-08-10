INSERT INTO shelfie
VALUES ($1)
SELECT *
FROM shelfie
WHERE bin_number = $1;