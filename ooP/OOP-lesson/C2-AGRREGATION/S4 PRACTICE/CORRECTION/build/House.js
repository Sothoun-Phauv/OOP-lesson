"use strict";
var House = /** @class */ (function () {
    function House(name) {
        this.name = name;
        this.bedRoom = new Room(this);
        this.livingRoom = new Room(this);
    }
    return House;
}());
var Room = /** @class */ (function () {
    function Room(parentHouse) {
        this.parentHouse = parentHouse;
        this.mainWindows = new HouseWindow(this);
    }
    return Room;
}());
var HouseWindow = /** @class */ (function () {
    function HouseWindow(parentRoom) {
        this.color = "WHITE";
        this.parentRoom = parentRoom;
    }
    HouseWindow.prototype.getHouseName = function () {
        return this.parentRoom.parentHouse.name;
    };
    return HouseWindow;
}());
var ronanHouse = new House("ronan house");
var livingRoomWindow = ronanHouse.livingRoom.mainWindows;
console.log(livingRoomWindow.getHouseName());
