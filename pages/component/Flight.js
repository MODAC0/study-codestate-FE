function Flight({ departure, destination, departureTimes, arrivalTimes }) {
  return <div className="row">
    <div className="col">
      🛫 {departure}
    </div>
    <div className="col">
      🛬 {destination}
    </div>
    <div className="col">
      {departureTimes}
    </div>
    <div className="col">
      {arrivalTimes}
    </div>
    <div className="col">
      <button>
        예약하기
      </button>
    </div>
  </div>
}

export default Flight