const express = require('express');
const router = express.Router();
const XLSX = require('xlsx');

router.get('/data', (req, res) => {
    const workbook = XLSX.readFile(process.env.FILEPATH);
    const sheet = workbook.Sheets['Biel'];
    const data = XLSX.utils.sheet_to_json(sheet);
    res.json(data);
});

module.exports = router;
