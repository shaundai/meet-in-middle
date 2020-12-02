const pi = 3.14159

const calcLatLong = (latitude, longitude, weight) => {
 const weightedLat = latitude * (pi/180)
return weightedLat
}

export default calcLatLong