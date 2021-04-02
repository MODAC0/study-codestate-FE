module.export = class reservationdata{
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
