const {bookdata, flightlist, reservationlist} = require('../Repositories/statesRepositories');
const { v4: uuidv4 } = require('uuid');

module.exports = {
    userlookup : (req, res)=>{
        try{
            if(req.query.flightid !== undefined){
                let list = new Array();
                reservationlist.map((item)=>{
                    if(item.flight_guid === req.query.flightid){
                        list.push(item);
                    }
                })
                console.log(`[GET] Success : /book?flight=${req.query.flightid}`);
                return res.status(200).json(list);
            }
            if(req.query.phone !== undefined){
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
                return res.status(200).json(data);
            }
            console.log(`[GET] Success : /book`);
            return res.status(200).json(reservationlist);
        }catch(error){
            console.error(`[GET] Error : /book ${error}`);
            return res.status(506).send(`[GET] Failed : Not found reservationdata`);
        }
    },

    usercreate : (req, res) => {
        try {
            let data = req.body;
            reservationlist.push(new bookdata(uuidv4(), data.flight_guid, data.name, data.phone));
            console.log(`[POST] Success : /book`);
            return res.status(200).send(`[POST] Success : Create reservationdata`);
        } catch (error) {
            console.error(`[POST] Error : /book ${error}`);
            return res.status(506).send(`[POST] Failed : Not Create reservationdata`);
        }
    },

    userdelete : (req, res) => {
        try {
            reservationlist.map((item, index)=>{
                reservationlist.splice(index, 1)
            });
            console.log(`[delete] Success : /delete/reservationdata/:idx`);
            return res.status(200).send(`[delete] Success : delete flightdata [${req.params.id}]`);
        } catch (error) {
            console.error(`[delete] Error /delete/reserviontdata/:idx : ${error}`);
            return res.status(506).send(`[delete] Failed : Not delete reservationdata`);
        }
    }

}