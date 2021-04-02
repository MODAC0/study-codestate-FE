class flightdata{
    constructor(flightIDX, startingpoint, destination, date, seat){
        this.flightIDX = flightIDX;
        this.startingpoint = startingpoint;
        this.destination = destination;
        this.date = date;
        this.seat = seat;
    }

    setflightIDX(data){
        this.flightIDX = data;
    }

    setstartingpoint(data){
        this.startingpoint = data;
    }

    setdestination(data){
        this.destination = data;
    }

    setdate(data){
        this.date = data;
    }

    setseat(data){
        this.seat = data;
    }
}

class reservationdata{
    constructor(reservationIDX, flightIDX, name, phone){
        this.reservationIDX = reservationIDX;
        this.flightIDX = flightIDX;
        this.name = name;
        this.phone = phone;
    }

    setreservationIDX(data){
        this.reservationIDX = data;
    }

    setname(data){
        this.name = data;
    }

    setphone(data){
        this.phone = data
    }
}

function createflightdataIDXkey(date){
    return String(date) + String(Math.floor(Math.random()*10000));
}

function createreservationdataIDXkey(phone){
    return String(phone) + String(Math.floor(Math.random()*10000));
}

const express = require('../node_modules/express');
const cors = require('../node_modules/cors');
const app = express();
const port = 81;


app.use(express.json());
app.use(cors());

// 모든 데이터 저장 리스트
let flightlist = new Array();
let reservationlist = new Array();

// Manager Controller
// WelcomePage
app.get('/', (rep, res)=>{
    console.log(`GET : / `);
    res.send("Hello, States Airline!");
});

// 항공편 생성
app.post('/create/flightdata', (req, res)=>{
    console.log(`POST : /createflightdata`);
    try{
        let data = req.body;
        flightlist.push(new flightdata(createflightdataIDXkey(data.date), data.startingpoint, data.destination, data.date, data.seat));
        res.send(`Success : Create flightdata [${data.flightIDX}]`);
    }catch(error){
        console.error(`[Error] /create/flightdata : ${error}`);
        res.send("Failed : Not Create flightdata");
    }
});

// 전체 항공편 조회
app.get('/get/flightdata/all',(req, res)=>{
    console.log(`GET : /getflightdata/all`);
    try{
        if(flightlist.length != 0){
            res.json(flightlist);
        }else{
            res.send(null);
        }
    }catch(error){
        console.error(`[Error] /get/flightdata/all : ${error}`);
        res.send("Failed : Not found flightdata");
    }
});

// 만석이 아닌 항공편 조회
app.get('/get/flightdata/seat',(req, res)=>{
    console.log(`GET : /getflightdata/seat`);
    try{
        let list;
        for(let i = 0; i < flightlist.length; i++){
            if(flightlist[i].seat < 10){
                list.push(flightlist[i]);
            }
        }
        res.json(list);
    }catch(error){
        console.error(`[Error] /get/flightdata/seat : ${error}`);
        res.send("Failed : Not found flightdata");
    }
});

// 만석인 항공편 조회
app.get('/get/flightdata/seat/all',(req, res)=>{
    console.log(`GET : /getflightdata/seat/all`);
    try{
        let list;
        for(let i = 0; i < flightlist.length; i++){
            if(flightlist[i].seat >= 10){
                list.push(flightlist[i]);
            }
        }
        res.json(list);
    }catch(error){
        console.error(`[Error] /get/flightdata/seat/all : ${error}`);
        res.send("Failed : Not found flightdata");
    }
});

// 특정 항공편 내용 조회 [ body {"flightIDX" : "data"} ]
app.post('/get/flightdata/idx', (req, res)=>{
    console.log(`POST : /get/flightdata/idx`);
    try{
        let data;
        for(let i = 0; i < flightlist.length; i++){
            if(flightlist[i].flightIDX === req.body.flightIDX){
                data = flightlist[i];
            }
        }
        res.json(data);
    }catch(error){
        console.error(`[Error] /get/flightdata/idx : ${error}`);
        res.send("Failed : Not found flightdata");
    }
});

// 항공편 수정
app.post('/update/flightdata', (req, res)=>{
    try{
        console.log(`POST : /update/flightdata`);
        let data = req.body;
        for(let i = 0; i < flightlist.length; i++){
            if(flightlist[i].flightIDX == data.flightIDX){
                flightlist[i].setstartingpoint(data.startingpoint);
                flightlist[i].setdestination(data.destination);
                flightlist[i].setdate(data.date);
                flightlist[i].setseat(data.seat);
            }
        }
        res.send(`Success : Update flightdata [${data.flightIDX}]`);
    }catch(error){
        console.error(`[Error] /update/flightdata : ${error}`);
        res.send(`Failed : Not Update flightdata`);
    }
});

// 항공편 제거 [ body {"flightIDX" : "data"} ]
app.post('/delete/flightdata/idx', (req, res)=>{
    try{
        console.log(`POST : /delete/flightdata/idx`);
        let list;
        for(let i = 0; i < flightlist.length; i++){
            if(flightlist[i].flightIDX !== req.body.flightIDX){
                list.push(flightlist[i]);
            }
        }
        flightlist = list;
        res.send(`Success : delete flightdata [${req.body.flightIDX}]`);
    }catch(error){
        console.error(`[Error] /delete/flightdata : ${error}`);
        res.send(`Failed : Not delete flightdata`);
    }
});

// 특정 항공편 내 모든 예약자 조회 [ body {"flightIDX" : "data"} ]
app.post('/get/flight/reservation/all', (req, res)=>{
    try{
        console.log(`POST : /get/flight/reservation/all`);
        let list; 
        for(let i = 0; i < reservationlist.length; i++){
            if(reservationlist[i].flightIDX === req.body.flightIDX){
                list.push(reservationlist[i]);
            }
        }
        res.json(list);
    }catch(error){
        console.error(`[Error] /get/flight/reservation/all : ${error}`);
        res.send(`Failed : Not Found flightdata`);
    }
});

// 특정 항공편 내 예약자 삭제 [ body { "reservationIDX" : "data"} ]
app.post('/delete/flight/reservation/idx', (req, res)=>{
    try{
        console.log(`POST : /delete/flight/reservation/idx`);
        let list;
        for(let i = 0; i < reservationlist.length; i++){
            if(reservationlist[i].reservationIDX !== req.body.reservationIDX){
                list.push(reservationlist[i]);
            }
        }
        reservationlist = list;
        res.send(`Success : delete flightdata [${req.body.reservationIDX}]`);
    }catch(error){
        console.error(`[Error] /delete/flight/reservation/idx : ${error}`);
        res.send(`Failed : Not delete flightdata`);
    }
});

// User Controller
// 출발 날짜 기준 모든 항공편 조회 [ body {"date" : "data"} ]
app.post('/get/flightdata/user/date',(req, res)=>{
    try{
        console.log(`POST : /get/flightdata/user/date`);
        let list;
        for(let i = 0; i < flightlist.length; i++){
            if(flightlist[i].date === req.body.date){
                list.push(flightlist[i]);
            }
        }
        res.json(list);
    }catch(error){
        console.error(`[Error] /get/flightdata/user/date : ${error}`);
        res.send(`Failed : Not found flightdata`);
    }
});

// 특정 항공편에 대한 예약 내역 생성
app.post('/create/reservationdata/flightIDX',(req, res)=>{
    try{
        console.log(`POST : /create/reservationdata/flightIDX`);
        let data = req.body;
        reservationlist.push(new reservationdata(createreservationdataIDXkey(), data.flightIDX, data.name, data.phone));
        res.send(`Success : Create reservationdata [${data.reservationIDX}]`);
    }catch(error){
        console.error(`[Error] /create/reservationdata/flightIDX : ${error}`);
        res.send(`Failed : Not Create reservationdata`);
    }
});

// phone 데이터에 의한 예약 내역 조회 [ body { "phone" : "data"} ]
app.post('/get/reservationdata/phone',(req, res)=>{
    try{
        console.log(`POST : /get/reservationdata/phone`);
        let data;
        for(let i = 0; i < reservationlist.length; i++){
            if(reservationlist[i].phone === req.body.phone){
                data = reservationlist[i];
            }   
        }
        res.json(data);
    }catch(error){
        console.error(`[Error] /get/reservationdata/phone : ${error}`);
        res.send(`Failed : Not Found reservationdata`);
    }
});

// 예약 내역 업데이트
app.post('/update/reservationdata/idx',(req, res)=>{
    try{
        console.log(`POST : /update/reservationdata/idx`);
        for(let i = 0; i < reservationlist.length; i++){
            if(reservationlist[i].reservationIDX === req.body.reservationIDX){
                reservationlist[i].setname(req.body.name);
                reservationlist[i].setphone(req.body.phone);
            }
        }
    }catch(error){
        console.error(`[Error] /update/reservationdata/idx : ${error}`);
        res.send(`Failed : Not Update reservationdata`);
    }
});

// 예약 내역 삭제 [ body { "reservationIDX" : "data"} ]
app.post('/delete/reservationdata/idx',(req, res)=>{
    try{
        console.log(`POST : /delete/reservationdata/idx`);
        let list;
        for(let i = 0; i < reservationlist.length; i++){
            if(reservationlist[i].reservationIDX !== req.body.reservationIDX){
                list.push(reservationlist[i]);
            }
        }
        reservationlist = list;
        res.send(`Success : delete flightdata [${req.body.reservationIDX}]`);
    }catch(error){
        console.error(`[Error] /delete/reserviontdata/idx : ${error}`);
        res.send(`Failed : Not delete reservationdata`);
    }
});

app.listen(port, () => {console.log(`Start Server "Welcome, StatesAirline!"`)})