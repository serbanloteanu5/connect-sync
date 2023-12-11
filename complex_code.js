// filename: complex_code.js
// This code demonstrates a complex and sophisticated implementation of a text-based adventure game.

// Part 1: Creating classes for the game entities

class Room {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.exits = {};
    this.items = [];
  }

  addExit(direction, room) {
    this.exits[direction] = room;
  }

  addItem(item) {
    this.items.push(item);
  }
}

class Item {
  constructor(name, description, value) {
    this.name = name;
    this.description = description;
    this.value = value;
  }
}

class Player {
  constructor(name, startingRoom) {
    this.name = name;
    this.currentRoom = startingRoom;
    this.inventory = [];
  }

  move(direction) {
    if (direction in this.currentRoom.exits) {
      this.currentRoom = this.currentRoom.exits[direction];
      console.log(`You moved to the ${this.currentRoom.name}.`);
    } else {
      console.log("Invalid direction!");
    }
  }

  takeItem(item) {
    if (this.currentRoom.items.includes(item)) {
      this.currentRoom.items = this.currentRoom.items.filter((i) => i !== item);
      this.inventory.push(item);
      console.log(`You picked up the ${item.name}.`);
    } else {
      console.log("Item not found in this room.");
    }
  }
}

// Part 2: Creating the game world

// Rooms
const livingRoom = new Room(
  "Living Room",
  "A cozy living room with a fireplace."
);
const kitchen = new Room("Kitchen", "A modern kitchen with stainless steel appliances.");
const bedroom = new Room("Bedroom", "A peaceful bedroom with a comfy bed.");

// Exits
livingRoom.addExit("north", bedroom);
livingRoom.addExit("east", kitchen);
kitchen.addExit("west", livingRoom);
bedroom.addExit("south", livingRoom);

// Items
const matches = new Item("Matches", "A box of matches.", 5);
livingRoom.addItem(matches);

// Part 3: Starting the game

const playerName = prompt("Welcome to the adventure game! Enter your name: ");
const player = new Player(playerName, livingRoom);

console.log(`Welcome, ${player.name}!`);
console.log(`${player.currentRoom.description}`);

// ... (further code and game logic)