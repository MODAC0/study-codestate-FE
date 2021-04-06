const {bookdata, flightlist, reservationlist} = require('../Repositories/statesRepositories');
const { v4: uuidv4 } = require('uuid');

module.exports = {
    userlookup : (req, res)=>{
        try{
            if(req.query){
                if(req.query.flightid){
                    let list = new Array();
                    reservationlist.map((item)=>{
                        if(item.flight_guid === req.query.flightid){
                            list.push(item);
                        }
                    })
                    console.log(`[GET] Success : /book?flight=${req.query.flightid}`);
                    res.json(list);
                }
                if(req.query.phone){
                    let data;
                    reservationlist.map((userdata)=>{
                        if(userdata.phone === req.query.phone){
                            flightlist.map((flightdata)=>{
                                if(flightdata.uuid === userdata.flight_guid){
                                    data = {
                                        departure : flightdata.departure,
                                        destination : flightdata.destination,
                                        departure_times : flightdata.departure_times,
                                        arrival_times : flightdata.arrival_times,
                                        name : userdata.name,
                                        phone : userdata.phone
                                    }
                                }
                            });
                        }
                    });
                    console.log(`[GET] Success : /book?phone=${req.query.phone}`);
                    res.json(data);
                }
                res.status(404).send('Error : Not Found data')
            }else{
                console.log(`[GET] Success : /book`);
                res.json(reservationlist);
            }
        }catch(error){
            console.error(`[GET] Error : /book ${error}`);
            res.send(`[GET] Failed : Not found reservationdata`);
        }
    },

    usercreate : (req, res) => {
        try {
            let data = req.body;
            reservationlist.push(new bookdata(uuidv4(), data.flight_guid, data.name, data.phone));
            console.log(`[POST] Success : /book`);
            res.send(`[POST] Success : Create reservationdata`);
        } catch (error) {
            console.error(`[POST] Error : /book ${error}`);
            res.send(`[POST] Failed : Not Create reservationdata`);
        }
    },

    userdelete : (req, res) => {
        try {
            let list = new Array();
            reservationlist.map((item)=>{
                if (item.uuid !== req.params.id) {
                    list.push(reservationlist[i]);
                }
            });
            reservationlist = list;
            console.log(`[delete] Success : /delete/reservationdata/:idx`);
            res.send(`[delete] Success : delete flightdata [${req.params.id}]`);
        } catch (error) {
            console.error(`[delete] Error /delete/reserviontdata/:idx : ${error}`);
            res.send(`[delete] Failed : Not delete reservationdata`);
        }
    }

}