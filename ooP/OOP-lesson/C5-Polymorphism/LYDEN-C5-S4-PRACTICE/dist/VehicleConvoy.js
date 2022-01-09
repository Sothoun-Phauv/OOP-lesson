"use strict";
exports.__esModule = true;
exports.VehicleConvoy = void 0;
var VehicleConvoy = /** @class */ (function () {
    function VehicleConvoy() {
        this.vehicles = [];
    }
    VehicleConvoy.prototype.addVehicle = function (vehicle) {
        this.vehicles.push(vehicle);
    };
    VehicleConvoy.prototype.getMaxSpeed = function () {
        var maxSpeed = this.vehicles[0].getSpeed();
        for (var _i = 0, _a = this.vehicles; _i < _a.length; _i++) {
            var vehicle = _a[_i];
            if (maxSpeed > vehicle.getSpeed()) {
                maxSpeed = vehicle.getSpeed();
            }
        }
        return maxSpeed;
    };
    return VehicleConvoy;
}());
exports.VehicleConvoy = VehicleConvoy;
