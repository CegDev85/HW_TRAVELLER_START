const Traveller = function(journeys) {
  this.journeys = journeys;
};

// Traveller.prototype.getJourneyStartLocations = function() {
//   const startLocations = []
//   for(journey of this.journeys){
//     startLocations.push(journey.startLocation)
//   }
//   return startLocations
// };  // this one was just to get my brain going

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
    return journey.startLocation
  })

};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation
  })

};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport === transport
  })
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => {
    return journey.distance > minDistance
  })
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => {
    return total += journey.distance
  },0) //think this sets the start at 0
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const uniqueTransport = {};
  const actualTransport = [];

  for(journey of this.journeys) {
    if(uniqueTransport[journey.transport]) {
      uniqueTransport[journey.transport] += 1;
    }
    else {
      uniqueTransport[journey.transport] = 1;
    }
  }
  for(key in uniqueTransport) {
    actualTransport.push(key)
  }
  return actualTransport
}

// Traveller.prototype.getUniqueModesOfTransport = function () {
//   let transport = this.journeys.map((journey) => { //this is allowing me to assign a variable to the return
//         return journey.transport 
//   })
//   const uniqueTransport = new Set(transport);
//   transport = [uniqueTransport];
//   return transport
// };


module.exports = Traveller;
