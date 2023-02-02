const express = require('express');
const cors = require("cors");

const app = express();

app.use(cors())

const router = require('./routers/indexRouter');
const companyRouter = require('./routers/companyRouter');

app.use("/", router);
app.use("/company", companyRouter);


const PORT = 5000;
app.listen(PORT, () => {
    console.log(`[+] Server is running on ${PORT} port`);
})