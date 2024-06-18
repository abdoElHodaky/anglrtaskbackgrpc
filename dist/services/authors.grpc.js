"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorGrpcService = void 0;
require("reflect-metadata");
const grpc_js_1 = require("@grpc/grpc-js");
const dist_1 = require("../protos/dist/");
const entity_1 = require("../entity/");
//import { Service } from "../service.decorator"
const _1 = require("./");
class AuthorGrpcService {
    constructor() {
        //public [name: string]:UntypedHandleCall;
        this.SrvImpl = {
            all(call, callback) {
                return __awaiter(this, void 0, void 0, function* () {
                    let base = dist_1._User.createBaseUser();
                    try {
                        let authors = yield AuthorGrpcService.service.all();
                        console.log(authors);
                        if (authors instanceof Array) {
                            let _authors = authors.map(dist_1._User.User.fromJSON);
                            _authors.forEach((author, inx) => {
                                let { id, articles } = author;
                                let _articles = authors[inx].articles;
                                articles.sort((a, b) => b.id - a.id);
                                if (articles.length != 0) {
                                    articles.forEach((a, inx) => {
                                        a.userId = id;
                                    });
                                }
                            });
                            const res = {
                                users: _authors,
                                error: {
                                    Message: "", name: "", type: ""
                                }
                            };
                            callback(null, res);
                        }
                        else {
                            callback(null, { users: [], error: {
                                    Message: "No Records matching request", type: "NotFoundError", name: ""
                                } });
                        }
                    }
                    catch (err) {
                        callback({ code: grpc_js_1.status.INTERNAL }, { users: [], error: {
                                Message: "No Records matching request", type: "NotFoundError", name: ""
                            } });
                        console.error(err);
                    }
                });
            },
            create(call, callback) {
                return __awaiter(this, void 0, void 0, function* () {
                    let { user } = call.request;
                    let res;
                    let base = dist_1._User.createBaseUser();
                    try {
                        let author = yield AuthorGrpcService.service.create(user);
                        if (author instanceof entity_1.Author) {
                            let _author = dist_1._User.User.fromJSON(author);
                            res = {
                                user: _author /*,error:{
                                 Message:"",type:"",name:""
                                }*/
                            };
                            callback({ code: grpc_js_1.status.OK }, res);
                        }
                        else {
                            res = { user: base
                                /*,error:{
                                   Message:"No Records matching request",type:"NotFoundError",name:""
                                 }*/ 
                            };
                            callback({ code: grpc_js_1.status.NOT_FOUND }, { user: base });
                        }
                    }
                    catch (err) {
                        res = { user: base
                            /*,error:{
                           Message:"Some Internal Error",type:"InternalError",name:""
                            }  */ 
                        };
                        callback({ code: grpc_js_1.status.INTERNAL }, { user: base });
                    }
                });
            },
            id(call, callback) {
                return __awaiter(this, void 0, void 0, function* () {
                    let { userId } = call.request;
                    let res;
                    let base = dist_1._User.createBaseUser();
                    try {
                        let author = yield AuthorGrpcService.service.id(userId);
                        if (author instanceof entity_1.Author) {
                            let _author = dist_1._User.User.fromJSON(author);
                            res = {
                                user: _author, error: {
                                    Message: "", type: "", name: ""
                                }
                            };
                            callback({ code: grpc_js_1.status.OK }, res);
                        }
                        else {
                            res = { user: base,
                                error: {
                                    Message: "No Records matching request", type: "NotFoundError", name: ""
                                } };
                            callback({ code: grpc_js_1.status.NOT_FOUND }, { user: base,
                                error: {
                                    Message: "Some Internal Error", type: "InternalError", name: ""
                                } });
                        }
                    }
                    catch (err) {
                        res = { user: base,
                            error: {
                                Message: "Some Internal Error", type: "InternalError", name: ""
                            } };
                        callback({ code: grpc_js_1.status.INTERNAL }, { user: base,
                            error: {
                                Message: "Some Internal Error", type: "InternalError", name: ""
                            } });
                        console.error(err);
                    }
                });
            }
        };
    }
}
exports.AuthorGrpcService = AuthorGrpcService;
// @Service("Author")
AuthorGrpcService.service = new _1.AuthorService();
//console.log(Reflect.getMetadata("service",AuthorGrpcService ))
