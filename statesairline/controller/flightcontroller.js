const {flightlist} = require('../Repositories/statesRepositories');

module.exports = {
    flightlookup : (req, res)=>{
        try{
            // 조건에 따른 항공편 조회
            // 시간에 따른 필터링
            if(req.query.departure_times !== undefined && req.query.arrival_times !== undefined){
                let list = new Array();
                flightlist.map((item)=>{
                    if(item.departure_times === req.query.departure_times 
                        && item.arrival_times === req.query.arrival_times){
                            list.push(item);
                    }
                });
                console.log(`[GET] Success : /flight?departure_times=${req.query.departure_times}&arrival_times=${req.query.arrival_times}`);
                return res.status(200).json(list);
            }
            // 공항에 따른 필터링
            if(req.query.departure !== undefined && req.query.destination !== undefined){
                let list = new Array();
                flightlist.map((item)=>{
                    if(item.departure === req.query.departure 
                        && item.destination === req.query.destination){
                            list.push(item);
                    }
                });
                console.log(`[GET] Success : /flight?departure=${req.query.departure}&destination=${req.query.destination}`);
                return res.status(200).json(list);
            }   

            // 쿼리가 없으면 전체 데이터 전달
            console.log(`[GET] Success : /flight`);
            res.json(flightlist);

        }catch(error){
            console.error(`[GET] Error : /flight ${error}`);
            return res.status(506).send(`[GET] Failed : Not found flight`);
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
                return res.status(200).send(data);
            }
        }catch(error){
            console.error(`[GET] Error : /flight/:id ${error}`);
            return res.status(506).send(`[GET] Failed : Not found flight`);
        }
    },

    flightupdate : (req, res)=>{
        try{
            flightlist.map((item)=>{
                if(req.params.id === item.uuid){
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
            return res.status(200).send(`[PUT] Success : Update reservationdata`);
        }catch(error){
            console.error(`[PUT] Error : /flight/:id ${error}`);
            return res.status(506).send(`[PUT] Failed : Not Update flight ${req.params.id}`);
        }
    }
}