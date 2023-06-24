const express = require('express');
const validUrl = require("valid-url");
const shortid = require("shortid");
const Url = require('../models/url');
const config = require("config");
const baseUrl = config.get("base")
var router = express.Router();


//POST api for saving the long url in the DB
router.post('/url',async function (req, res) {
    const {longurl} = req.body;
    if(validUrl.isUri(longurl)){
      try {
        console.log("inside try block....");
        const urlResult = await Url.findOne({longurl});
        const code = shortid.generate(longurl);
        if(urlResult){
            return res.send(baseUrl + '/api/' +urlResult.code);
        }else{
            const shorturl = baseUrl + '/api' +code;
            const newUrl = new Url({
                longurl,
                shorturl,
                code
            })
           await newUrl.save();
           return res.send(shorturl);
        }


      } catch (ex) {
        console.log("inside catchh block....", ex);
          res.status(500).send({
              error:"server error"
          })
      }
    }
    else{
        return res.send("not a valid url")
    }
})

//GET api for redirecting to long url
router.get('/:code',async function (req, res) {
    const urlCode = req.params.code;
    try {
        const savedUrl = await Url.findOne({code:urlCode});
        if(savedUrl){
           return res.redirect(savedUrl.longurl);
        }
        else{
            return res.status(404).json({
                error:"URL not found!"
            })
        }
    } catch (ex) {
       return res.status(500).json({
           error:"server error"
       })
    }
    
})

module.exports = router
