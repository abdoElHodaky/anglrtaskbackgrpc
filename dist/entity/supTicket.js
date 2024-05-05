"use strict";
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
exports.supTicket = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
let supTicket = class supTicket {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("increment"),
    __metadata("design:type", Number)
], supTicket.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], supTicket.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], supTicket.prototype, "subject", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], supTicket.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, user => user.tickets),
    __metadata("design:type", User_1.User)
], supTicket.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)( /*{type:"timestamp"}*/),
    __metadata("design:type", Date)
], supTicket.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)( /*{type:"timestamp"}*/),
    __metadata("design:type", Date)
], supTicket.prototype, "updated_at", void 0);
supTicket = __decorate([
    (0, typeorm_1.Entity)()
], supTicket);
exports.supTicket = supTicket;
