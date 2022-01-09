class House {
  name: string;
  bedRoom: Room;
  livingRoom: Room;

  constructor(name: string) {
    this.name = name;
    this.bedRoom = new Room(this);
    this.livingRoom = new Room(this);
  }
}

class Room {
  parentHouse: House;
  mainWindows: HouseWindow;

  constructor(parentHouse: House) {
    this.parentHouse = parentHouse;
    this.mainWindows = new HouseWindow(this);
  }
}

class HouseWindow {
  parentRoom: Room;
  color: String = "WHITE";

  constructor(parentRoom: Room) {
    this.parentRoom = parentRoom;
  }

  getHouseName(): string {
    return this.parentRoom.parentHouse.name;
  }
}

let ronanHouse = new House("ronan house");
let livingRoomWindow = ronanHouse.livingRoom.mainWindows;

console.log(livingRoomWindow.getHouseName());
