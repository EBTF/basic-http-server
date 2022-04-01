const express = require('express')
const parser = require('xml2json')
// const bodyParser = require('body-parser')
const xmlparser = require('express-xml-bodyparser')
const app = express()
const port = 4000

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(xmlparser())

app.listen(port, () => {
    console.log("Test API Server Started");
});

app.use((err, req, res, next) => {
    if (err instanceof SyntaxError) {
        return res.status(400).send();
    }
    next();
})

app.post("/xmldata/:ser_num/:date", (req, res) => {
    console.log("POST Request: /xmldata/" + req.params.ser_num + "/" + req.params.date);

    res.status(200).send({
        success: true,
        xmltojson: req.body
    })
})

module.exports = app