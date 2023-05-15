const express = require('express');
const router = express.Router();
const XLSX = require('xlsx');

router.get('/', (req, res) => {
    res.send('Hello world');
})


router.get('/income-statement', (req, res) => {
    const workbook = XLSX.readFile(process.env.FILEPATH);
    const sheet = workbook.Sheets['Personal Income Statement'];
    const data = XLSX.utils.sheet_to_json(sheet);
    res.json(data);
});

router.get('/income', (req, res) => {
    const workbook = XLSX.readFile(process.env.FILEPATH);
    const sheet = workbook.Sheets['Income'];
    const data = XLSX.utils.sheet_to_json(sheet);
    res.json(data);
});

router.get('/expenses', (req, res) => {
    const workbook = XLSX.readFile(process.env.FILEPATH);
    const sheet = workbook.Sheets['Expenses'];
    const data = XLSX.utils.sheet_to_json(sheet);
    res.json(data);
});

router.get('/liabilities', (req, res) => {
    const workbook = XLSX.readFile(process.env.FILEPATH);
    const sheet = workbook.Sheets['Liabilities'];
    const data = XLSX.utils.sheet_to_json(sheet);
    res.json(data);
});

router.get('/savings', (req, res) => {
    const workbook = XLSX.readFile(process.env.FILEPATH);
    const sheet = workbook.Sheets['Savings'];
    const data = XLSX.utils.sheet_to_json(sheet);
    res.json(data);
});

router.get('/passive-income', (req, res) => {
    const workbook = XLSX.readFile(process.env.FILEPATH);
    const sheet = workbook.Sheets['Passive Income'];
    const data = XLSX.utils.sheet_to_json(sheet);
    res.json(data);
});

router.get('/assets', (req, res) => {
    const workbook = XLSX.readFile(process.env.FILEPATH);
    const sheet = workbook.Sheets['Assets'];
    const data = XLSX.utils.sheet_to_json(sheet);
    res.json(data);
});

router.get('/recon', (req, res) => {
    const workbook = XLSX.readFile(process.env.FILEPATH);
    const sheet = workbook.Sheets['Bank Check'];
    const data = XLSX.utils.sheet_to_json(sheet);
    res.json(data);
});

router.get('/transactions', (req, res) => {
    const workbook = XLSX.readFile(process.env.FILEPATH);
    const sheet = workbook.Sheets['Transactions'];
    const data = XLSX.utils.sheet_to_json(sheet);
    res.json(data);
});

router.get('/intellectual-property', (req, res) => {
    const workbook = XLSX.readFile(process.env.FILEPATH);
    const sheet = workbook.Sheets['Intellectual Property'];
    const data = XLSX.utils.sheet_to_json(sheet);
    res.json(data);
});




module.exports = router;
