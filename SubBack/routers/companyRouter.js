const express = require("express");
const router = express.Router();

const fs = require('fs');
const path = require('path');

const MIN_MAX_FILE_NAME = "minMax.csv";


const ChangeCSVToJson = (rows) => {
    if(rows[rows.length - 1] === '')
    {
        rows.pop();
    }
    
    let columnTitle = []
    let results = []
    for(const i in rows)
    {
        const row = rows[i];
        const data = row.split(',')
        if (i === "0")
        {
            columnTitle = data;
        }
        else
        {
            let rowData = {}
            for (const index in columnTitle)
            {
                const title = columnTitle[index];
                rowData[title] = data[index]
            }
            results.push(rowData)
        }
    }
    return results;
}

router.get('/upjongNumber/:companyName', (req, res) => {
    let statusCode = 502;
    try
    {
        const companyName = req.params.companyName;
        const UPJONG_NUMBERS_DB_PATH = path.join(__dirname, "../../DB", "upjongNumbers", "upjongNumbers.csv");
        
        const csv = fs.readFileSync(UPJONG_NUMBERS_DB_PATH, 'utf-8');
        const rows = csv.split('\r\n');
        const allUpjongNumbers = ChangeCSVToJson(rows);

        let upjongNumber = null;
        for(const index in allUpjongNumbers)
        {
            if(allUpjongNumbers[index].companyName == companyName)
            {
                upjongNumber = allUpjongNumbers[index].upjongNumber;
                statusCode = 200;
            }
        }

        return res.status(200).send({
            "upjongNumber": upjongNumber
        })

    }
    catch(error)
    {
        console.error(error);
        return res.status(statusCode).send();
    }
})

router.get('/yearly/operatingProfits/:upjongNumber/:companyName', (req, res) => {
    try
    {
        const upjongNumber = req.params.upjongNumber;
        const companyName = req.params.companyName;
        const YEARLY_OPERATING_PROFITS_DB_PATH = path.join(__dirname, "../DB", "yearly", "operatingProfits", `operatingProfits${upjongNumber}.csv`);
        const csv = fs.readFileSync(YEARLY_OPERATING_PROFITS_DB_PATH, 'utf-8');
        const rows = csv.split('\r\n');
        const allYearlyOperatingProfits = ChangeCSVToJson(rows);

        let yearlyOperatingProfits = null;
        let statusCode = 502;

        for(const index in allYearlyOperatingProfits)
        {
            if(allYearlyOperatingProfits[index].companyName == companyName)
            {
                yearlyOperatingProfits = allYearlyOperatingProfits[index];
                statusCode = 200;
            }
        }

        return res.status(statusCode).send({
            "yearlyOperatingProfits": yearlyOperatingProfits
        });
    }
    catch(error)
    {
        console.error(error);
        return res.status(502).send();
    }
})

router.get('/yearly/operatingProfits/:upjongNumber', (req, res) => {
    try
    {
        const upjongNumber = req.params.upjongNumber;
        const YEARLY_OPERATING_PROFITS_DB_PATH = path.join(__dirname, "../DB", "yearly", "operatingProfits", `operatingProfits${upjongNumber}.csv`);
        const csv = fs.readFileSync(YEARLY_OPERATING_PROFITS_DB_PATH, 'utf-8');
        const rows = csv.split('\r\n');

        return res.status(200).send({
            "allYearlyOperatingProfits": ChangeCSVToJson(rows)
        });
    }
    catch(error)
    {
        console.error(error);
        return res.status(500).send();
    }
})


router.get('/yearly/sales/:upjongNumber/:companyName', (req, res) => {
    try
    {
        const upjongNumber = req.params.upjongNumber;
        const companyName = req.params.companyName;
        const YEARLY_SALES_DB_PATH = path.join(__dirname, "../DB", "yearly", "sales", `sales${upjongNumber}.csv`);
        const csv = fs.readFileSync(YEARLY_SALES_DB_PATH, 'utf-8');
        const rows = csv.split('\r\n');
        const allYearlySales = ChangeCSVToJson(rows);
        
        let yearlySales = null;
        let statusCode = 502;

        for(const index in allYearlySales)
        {
            if(allYearlySales[index].companyName == companyName)
            {
                yearlySales = allYearlySales[index];
                statusCode = 200;
            }
        }

        return res.status(statusCode).send({
            "yearlySales": yearlySales
        });
    }
    catch(error)
    {
        console.error(error);
        return res.status(500).send()
    }
})

router.get("/yearly/sales/:upjongNumber", (req, res) => {
    try
    {
        const upjongNumber = req.params.upjongNumber;
        const YEARLY_SALES_DB_PATH = path.join(__dirname, "../DB", "yearly", "sales", `sales${upjongNumber}.csv`);
        const csv = fs.readFileSync(YEARLY_SALES_DB_PATH, 'utf-8');
        const rows = csv.split('\r\n');
        
        return res.status(200).send({
            "allYearlySales": ChangeCSVToJson(rows)
        })
    }
    catch(error)
    {
        console.error(error);
        return res.status(500).send();
    }
});

router.get("/min-max/", (req, res) => {
    try
    {
        const MIN_MAX_DB_PATH = path.join(__dirname, "../DB", MIN_MAX_FILE_NAME)
        const csv = fs.readFileSync(MIN_MAX_DB_PATH, 'utf-8');
        const rows = csv.split('\r\n');
        
        return res.status(200).send({
            "allMinMax": ChangeCSVToJson(rows)
        })
    }
    catch(error)
    {
        console.error(error);
        return res.status(500).send()
    }
})

router.get("/min-max/:company", (req, res) => {
    try
    {
        const companyName = req.params.company;
        const MIN_MAX_DB_PATH = path.join(__dirname, "../DB", MIN_MAX_FILE_NAME)
        const csv = fs.readFileSync(MIN_MAX_DB_PATH, 'utf-8');
        const rows = csv.split('\r\n');
        const minMaxObjects = ChangeCSVToJson(rows);
        let minMaxObject = null;
        let statusCode = 502;
    
        for(const index in minMaxObjects)
        {
            if (minMaxObjects[index].companyName == companyName)
            {
                minMaxObject = minMaxObjects[index];
                statusCode = 200;
            }
        }
        return res.status(statusCode).send({
            "minMax": minMaxObject
        })
    }
    catch(error)
    {
        console.error(error);
        return res.status(500).send()
    }
})

module.exports = router;