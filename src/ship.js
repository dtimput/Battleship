class Ship {
  constructor(length, timesHit, sunk) {
    this.length = length;
    this.timesHit = timesHit;
    this.sunk = sunk;
  }

  hit() {
    // Runs when a ship is hit
    if (!this.isSunk()) {
      this.timesHit += 1;
      this.isSunk();
    }
  }

  isSunk() {
    // Runs when a ship is sunk
    if (this.length === this.timesHit) {
      this.sunk = true;
    }
  }
}

export default Ship;
