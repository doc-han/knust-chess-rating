const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8080;
require('dotenv').config();
app.set("view engine", "ejs");

mongoose.connect(process.env.DBURI, {
    useNewUrlParser: true
});
const db = mongoose.connection;
db.on('error', function (err) {
    console.log(err);
})


const Team = require('./team.js');
const Config = require('./config');
let dbFunctions = require('./dbfunctions').init(require('./storeModel'));
let Sort = require('./sort');

// function addBulletPos(hugeObj) {
//     hugeObj = hugeObj.sort(Sort.bulletSorter);
//     hugeObj.forEach((user, index) => {
//         user.bulletPos = index + 1;
//     })
//     return hugeObj;
// }

// function addBlitzPos(hugeObj) {
//     hugeObj = hugeObj.sort(Sort.blitzSorter);
//     hugeObj.forEach((user, index) => {
//         user.blitzPos = index + 1;
//     })
//     return hugeObj;
// }

// function addRapidPos(hugeObj) {
//     hugeObj = hugeObj.sort(Sort.rapidSorter);
//     hugeObj.forEach((user, index) => {
//         user.rapidPos = index + 1;
//     })
//     return hugeObj;
// }

app.get('/generate', (req, res) => {
    let Knust = new Team(process.env.teamId);
    Knust.getTeamData(Knust.getTeamURI).then(data => {

        // let all = Config.formatRatings(data);
        // let rdata = JSON.stringify(all);

        store.findOne({ new: true }).then(resp => {
            store.updateOne({ new: false }, { data: resp.data }, { upsert: true }).then(d => {
                store.updateOne({ new: true }, { data: rdata }, { upsert: true }).then(dd => {
                    res.send("Everything has been update. <a href'/'>Back to rating</a>")
                }).catch(err => res.status(501).send(err))
            }).catch(err => res.status(501).send(err))
        })
        
        // store.find().then(results => {
        //     let ress = {
        //         old: null,
        //         current: null
        //     }
        //     results.forEach(i => {
        //         if (i.new) ress.current = JSON.parse(i.data);
        //         else ress.old = JSON.parse(i.data);
        //     })
        //     let rr = require('./intense-calc').calc(ress);
        //     rr = addBulletPos(rr);
        //     rr = addBlitzPos(rr);
        //     rr = addRapidPos(rr);
        //     // res.send(rr)
            
        // })
        
    })
})

app.get('/', (req, res) => {
    res.render('home');
})

// app.get('/bullet', (req, res) => {
//     let type = "bullet";
//     dbFunctions.getStoredData().then(data => {
//         all = data.sort(Sort.bulletSorter);
//         res.render(type, { data: all, type })
//     }).catch(err => {
//         res.send(err);
//     })
// })

// app.get('/blitz', (req, res) => {
//     let type = "blitz";
//     dbFunctions.getStoredData().then(data => {
//         all = data.sort(Sort.blitzSorter);
//         res.render(type, { data: all, type })
//     }).catch(err => {
//         res.send(err);
//     })
// })

// app.get('/rapid', (req, res) => {
//     let type = "rapid";
//     dbFunctions.getStoredData().then(data => {
//         all = data.sort(Sort.rapidSorter);
//         res.render(type, { data: all, type })
//     }).catch(err => {
//         res.send(err);
//     })
// })

app.get('/:type', (req,res, next)=>{
    let { type } = req.params;
    if(Config.isSupported(type)){
        dbFunctions.getStoredData().then(data => {
            all = data.sort(Sort.rapidSorter);
            res.render('ratings', { data: all, type })
        }).catch(err => {
            res.send(err);
        })
    }else next();
})

app.use((req,res)=>{
    res.send("The page you're looking for can't be found!");
})

app.listen(PORT, (err) => {
    if(err) throw err;
    console.log(`visit localhost:${PORT}`);
})