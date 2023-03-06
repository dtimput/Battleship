class Ship {
  constructor(length, timesHit, sunk) {
    this.length = length;
    this.timesHit = timesHit;
    this.sunk = sunk;
  }

  hit() {
    // Runs when a ship is hit
  }

  isSunk() {
    if (length === timesHit) {
      // Ship is Sunk
    }
  }
}
