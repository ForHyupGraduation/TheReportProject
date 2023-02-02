const express = require("express");
const path = require('path');

const fs = require('fs');
const FILE_NAME = "minMax.csv";
const csvPath = path.join(__dirname, "DB", FILE_NAME);
const csv = fs.readFileSync(csvPath, 'utf-8');
const rows = csv.split('\r\n');

if(rows[rows.length - 1] === '')
{
    console.log("'' has been found");
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
        let row_data = {}
        for (const index in columnTitle)
        {
            const title = columnTitle[index];
            row_data[title] = data[index]
        }
        results.push(row_data)
    }
}

console.log(results)
