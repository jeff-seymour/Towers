const terrains = 
[
    { id: 1, name: 'Well Maintained Road', value: 2},
    { id: 2, name: 'Well Maintained Road', value: 2},
    { id: 3, name: 'Degraded Roads', value: 3},
    { id: 4, name: 'Degraded Roads', value: 3},
    { id: 5, name: 'Degraded Roads', value: 3},
    { id: 6, name: 'Degraded Roads', value: 3},
    { id: 7, name: 'Degraded Roads', value: 3},
    { id: 8, name: 'Degraded Roads', value: 3},
    { id: 9, name: 'Dirt roads and trails', value: 4},
    { id: 10, name: 'Dirt roads and trails', value: 4},
    { id: 11, name: 'Dirt roads and trails', value: 4},
    { id: 12, name: 'Dirt roads and trails', value: 4},
    { id: 13, name: 'Fields', value: 5},
    { id: 14, name: 'Fields', value: 5},
    { id: 15, name: 'Fields', value: 5},
    { id: 16, name: 'Fields', value: 5},
    { id: 17, name: 'Rocky Fields', value: 6},
    { id: 18, name: 'Rocky Fields', value: 6},
    { id: 19, name: 'Rocky Fields', value: 6},
    { id: 20, name: 'Rocky Fields', value: 6},
    { id: 21, name: 'Rocky Fields', value: 6},
    { id: 22, name: 'Rocky Fields', value: 6},
    { id: 23, name: 'Rocky Fields', value: 6},
    { id: 24, name: 'Rocky Fields', value: 6},
    { id: 25, name: 'Rocky Fields', value: 6},
    { id: 26, name: 'Hills', value: 7},
    { id: 27, name: 'Hills', value: 7},
    { id: 28, name: 'Hills', value: 7},
    { id: 29, name: 'Hills', value: 7},
    { id: 30, name: 'Hills', value: 7},
    { id: 31, name: 'Forest', value: 8},
    { id: 32, name: 'Forest', value: 8},
    { id: 33, name: 'Forest', value: 8},
    { id: 34, name: 'Forest', value: 8},
    { id: 35, name: 'Forest', value: 8},
    { id: 36, name: 'Forest', value: 8},
    { id: 37, name: 'Forest', value: 8},
    { id: 38, name: 'Forest', value: 8},
    { id: 39, name: 'Fortified Palisades', value: 9},
    { id: 40, name: 'Fortified Palisades', value: 9},
    { id: 41, name: 'Fortified Palisades', value: 9},
    { id: 42, name: 'Fortified Palisades', value: 9},
    { id: 43, name: 'Fortified Palisades', value: 9},
    { id: 44, name: 'Fortified Palisades', value: 9},
    { id: 45, name: 'Fortified Palisades', value: 9},
    { id: 46, name: 'High Walls', value: 10},
    { id: 47, name: 'High Walls', value: 10},
    { id: 48, name: 'High Walls', value: 10},
    { id: 49, name: 'High Walls', value: 10},
    { id: 50, name: 'High Walls', value: 10},
    { id: 51, name: 'Fortress', value: 11},
    { id: 52, name: 'Fortress', value: 11}
]

const shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
}

export const terrainData = shuffle(terrains)