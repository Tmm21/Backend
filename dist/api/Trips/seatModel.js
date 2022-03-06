"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Seats = void 0;
var typeorm_plus_1 = require("typeorm-plus");
var enums_1 = require("../../enums");
var tripModel_1 = require("./tripModel");
var Seats = /** @class */ (function (_super) {
    __extends(Seats, _super);
    function Seats() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_plus_1.PrimaryGeneratedColumn)('uuid'),
        __metadata("design:type", String)
    ], Seats.prototype, "id", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)(),
        __metadata("design:type", Number)
    ], Seats.prototype, "seatNumber", void 0);
    __decorate([
        (0, typeorm_plus_1.Column)({ type: "enum", enum: enums_1.SeatStatus, default: enums_1.SeatStatus.AVAILABLE }),
        __metadata("design:type", String)
    ], Seats.prototype, "seatStatus", void 0);
    __decorate([
        (0, typeorm_plus_1.ManyToOne)(function (type) { return tripModel_1.Trips; }, function (trip) { return trip.seat; }),
        __metadata("design:type", tripModel_1.Trips)
    ], Seats.prototype, "trip", void 0);
    __decorate([
        (0, typeorm_plus_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], Seats.prototype, "createdAt", void 0);
    __decorate([
        (0, typeorm_plus_1.UpdateDateColumn)(),
        __metadata("design:type", Date)
    ], Seats.prototype, "updatedAt", void 0);
    Seats = __decorate([
        (0, typeorm_plus_1.Entity)()
    ], Seats);
    return Seats;
}(typeorm_plus_1.BaseEntity));
exports.Seats = Seats;
