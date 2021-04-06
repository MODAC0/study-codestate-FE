// 모든 데이터 저장 리스트
let flightlist = new Array();
let reservationlist = new Array();

function bookdata(reservationIDX, flightIDX, name, phone) {
    this.reservationIDX = reservationIDX;
    this.flightIDX = flightIDX;
    this.name = name;
    this.phone = phone;
}

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = 81;


function init(){
    fs.readFile('./data/flight.json', (err, data)=>{
        flightlist = JSON.parse(data);
        console.log(flightlist);
    });
}
init();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    console.log(`GET : / `);
    res.send("Hello, States Airline!");
});

app.get("/get/flightlist", (req, res) => {
    console.log("GET : /get/flightlist");
    res.json(flightlist);
});

app.get("/get/reservationlist", (req, res) => {
    console.log("GET : /get/reservationlist");
    res.json(reservationlist);
});

// User Controller
// 출발지, 도착지, 날짜에 맞는 모든 항공편 조회
app.get("/get/flightdata/selected/:start/:end", (req, res) => {
    try {
        console.log(`GET : /get/flightdata/selected/:start/:end/:date`);
        let list = new Array();
        for (let i = 0; i < flightlist.length; i++) {
            if (flightlist[i].startingpoint == req.params.start && flightlist[i].destination == req.params.end) {
                list.push(flightlist[i]);
            }
        }
        res.json(list);
    } catch (error) {
        console.error(`[Error] /get/flightdata/selected/:start/:end/:date : ${error}`);
        res.send(`Failed : Not found flightdata`);
    }
});

// 특정 항공편에 대한 예약 내역 생성
app.post("/create/reservationdata", (req, res) => {
    try {
        console.log(`POST : /create/reservationdata`);
        let data = req.body;
        reservationlist.push(new bookdata(uuidv4(), data.flightIDX, data.name, data.phone));
        res.send(`Success : Create reservationdata`);
    } catch (error) {
        console.error(`[Error] /create/reservationdata : ${error}`);
        res.send(`Failed : Not Create reservationdata`);
    }
});

// phone 데이터에 의한 예약 내역 조회 [ params { "phone" : "data"} ]
app.get("/get/reservationdata/:phone", (req, res) => {
    try {
        console.log(`POST : /get/reservationdata/:phone`);
        let list;
        for (let i = 0; i < reservationlist.length; i++) {
            if (reservationlist[i].phone == req.params.phone) {
                for (let j = 0; j < flightlist.length; j++) {
                    if (flightlist[j].flightIDX == reservationlist[i].flightIDX) {
                        list = {
                            flightIDX: flightlist[j].flightIDX,
                            reservationIDX: reservationlist[i].reservationIDX,
                            startingpoint: flightlist[j].startingpoint,
                            destination: flightlist[j].destination,
                            date: flightlist[j].date,
                            seat: flightlist[j].seat,
                            name: reservationlist[i].name,
                            phone: reservationlist[i].phone,
                        };
                    }
                }
            }
        }
        res.json(list);
    } catch (error) {
        console.error(`[Error] /get/reservationdata/:phone : ${error}`);
        res.send(`Failed : Not Found reservationdata`);
    }
});

// 예약 내역 업데이트
app.post("/update/reservationdata", (req, res) => {
    try {
        console.log(`POST : /update/reservationdata`);
        for (let i = 0; i < reservationlist.length; i++) {
            if (reservationlist[i].reservationIDX === req.body.reservationIDX) {
                reservationlist[i].name = req.body.name;
                reservationlist[i].phone = req.body.phone;
            }
        }
        res.send(`Success : Update reservationdata ${req.body.reservationIDX}`);
    } catch (error) {
        console.error(`[Error] /update/reservationdata : ${error}`);
        res.send(`Failed : Not Update reservationdata`);
    }
});

// 예약 내역 삭제 [ params { "idx" : "data"} ]
app.get("/delete/reservationdata/:idx", (req, res) => {
    try {
        console.log(`POST : /delete/reservationdata/:idx`);
        let list = new Array();
        for (let i = 0; i < reservationlist.length; i++) {
            if (reservationlist[i].reservationIDX !== req.params.idx) {
                list.push(reservationlist[i]);
            }
        }
        reservationlist = list;
        res.send(`Success : delete flightdata [${req.params.idx}]`);
    } catch (error) {
        console.error(`[Error] /delete/reserviontdata/:idx : ${error}`);
        res.send(`Failed : Not delete reservationdata`);
    }
});

app.listen(81, () => {
    console.log(`Start Server "Welcome, StatesAirline!"`);
});
