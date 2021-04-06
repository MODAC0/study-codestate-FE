const {flightlist} = require('../data/statesdata');

module.exports = {
    flightlookup : (req, res)=>{
        try{
            if(req.query){
                // 조건에 따른 항공편 조회
                // 시간에 따른 필터링
                if(req.query.departure_times && req.query.arrival_times){
                    let list = new Array();
                    flightlist.map((item)=>{
                        if(flightlist.departure_times === req.query.departure_times 
                            && flightlist.arrival_times === req.query.arrival_times){
                                list.push(item);
                        }
                    });
                    console.log(`[GET] Success : /flight?departure_times=${req.query.departure_times}&arrival_times=${req.query.arrival_times}`);
                    res.json(list);
                }
                // 공항에 따른 필터링
                if(req.query.departure && req.query.destination){
                    let list = new Array();
                    flightlist.map((item)=>{
                        if(flightlist.departure === req.query.departure 
                            && flightlist.destination === req){
                                list.push(item);
                        }
                    });
                    console.log(`[GET] Success : /flight?departure=${req.query.departure}&destination=${req.query.destination}`);
                    res.json(list);
                }
                res.status(404).send('Error : Not Found data')
            }else{
                // 쿼리가 없으면 전체 데이터 전달
                console.log(`[GET] Success : /flight`);
                res.json(flightlist);
            }
        }catch(error){
            console.error(`[GET] Error : /flight ${error}`);
            res.status(506).send(`[GET] Failed : Not found flight`);
        }
    },

    flightlookupid : (req, res)=>{
        try{
            if(true){
                let data;
                flightlist.map((item)=>{
                    if(req.params.id == item.uuid){
                        data = item;
                    }
                });
                console.log(`[GET] Success : /flight/:id`);
                res.send(data);
            }
        }catch(error){
            console.error(`[GET] Error : /flight/:id ${error}`);
            res.status(506).send(`[GET] Failed : Not found flight`);
        }
    },

    flightupdate : (req, res)=>{
        try{
            flightlist.map((item)=>{
                if(req.params.id == item.uuid){
                    if(!req.params.departure){
                        item.departure = req.body.departure; 
                    }
                    if(!req.params.destination){
                        item.destination = req.body.destination;
                    }
                    if(!req.params.departure_times){
                        item.departure_times = req.body.departure_times;
                    }
                    if(!req.params.arrival_times){
                        item.arrival_times = req.body.arrival_times;
                    }
                }
            });
            console.log(`[PUT] Success : /flight/:id`);
            res.send(`[PUT] Success : Update reservationdata`);
        }catch(error){
            console.error(`[PUT] Error : /flight/:id ${error}`);
            res.status(506).send(`[PUT] Failed : Not Update flight ${req.params.id}`);
        }
    }
}