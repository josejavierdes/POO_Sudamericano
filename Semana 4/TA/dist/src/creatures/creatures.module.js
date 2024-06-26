"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreaturesModule = void 0;
const common_1 = require("@nestjs/common");
const creatures_service_1 = require("./creatures.service");
const creatures_controller_1 = require("./creatures.controller");
const prisma_module_1 = require("../prisma/prisma.module");
let CreaturesModule = class CreaturesModule {
};
exports.CreaturesModule = CreaturesModule;
exports.CreaturesModule = CreaturesModule = __decorate([
    (0, common_1.Module)({
        controllers: [creatures_controller_1.CreaturesController],
        providers: [creatures_service_1.CreaturesService],
        imports: [prisma_module_1.PrismaModule]
    })
], CreaturesModule);
//# sourceMappingURL=creatures.module.js.map