const express = require('../node_modules/express');
const app = express()
const port = 3000;


airplanedata = {
    id : "",
    airplaneidx : "",
    StartPoint : "",
    EndPoint : "",
    StartDate : "",
    EndDate : "",
    AirplaneSeat : ""
}

userdata = {
    id : "",
    idx : "",
    airplaneidx : "",
    name : "",
    phone : "",
}

let airplanelist = new Array();
let userdatalist = new Array();

for(let i = 0; i <= 10; i++){
    airplanelist.push({
        id : "aaaa",
        airplaneidx : "bbbbb",
        StartPoint : "ccccc",
        EndPoint : "ddddd",
        StartDate : "fffffff",
        EndDate : "gggggg",
        AirplaneSeat : "hhhhhh"
    });
}

for(let i in airplanelist){
    console.log(airplanelist[i].id);
    console.log(airplanelist[i].airplaneidx);
}

app.get('/page', (req, res)=>{
    res.send("Hello world!");
});

app.listen(port, () => {
    console.log(`Code`)
})

// 라우터를 써야합니다. 음.... 