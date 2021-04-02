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

module.export = flightdata;