SELECT *
FROM shelfie
WHERE bin_number = $1


-- This displays the bin list, the controller will determine whether the bin has content to display. 