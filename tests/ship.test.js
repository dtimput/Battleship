import Shipgit from "../src/ship";

describe("Ship", () => {
  let ship;

  beforeEach(() => {
    // Create a new instance of the Ship class before each test
    ship = new Ship(3, 0, false);
  });

  test("constructor sets properties correctly", () => {
    expect(ship.length).toBe(3);
    expect(ship.timesHit).toBe(0);
    expect(ship.sunk).toBe(false);
  });

  test("hit method increases timesHit", () => {
    ship.hit();
    expect(ship.timesHit).toBe(1);
  });

  test("isSunk method sets sunk property when ship is sunk", () => {
    ship.hit();
    expect(ship.sunk).toBe(false);
    ship.hit();
    expect(ship.sunk).toBe(false);
    ship.hit();
    expect(ship.sunk).toBe(true);
  });
});
