"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleServiceClient = exports.ArticleServiceService = exports.GetAllRes = exports.GetAllReq = exports.CreateRes = exports.CreateReq = exports.Article = exports.protobufPackage = void 0;
/* eslint-disable */
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const error_1 = require("./error");
const timestamp_1 = require("./google/protobuf/timestamp");
exports.protobufPackage = "";
function createBaseArticle() {
    return { id: 0, imgurl: "", content: "", title: "", userId: 0, createdAt: undefined, updatedAt: undefined };
}
exports.Article = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).int32(message.id);
        }
        if (message.imgurl !== "") {
            writer.uint32(18).string(message.imgurl);
        }
        if (message.content !== "") {
            writer.uint32(26).string(message.content);
        }
        if (message.title !== "") {
            writer.uint32(34).string(message.title);
        }
        if (message.userId !== 0) {
            writer.uint32(40).int32(message.userId);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(50).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseArticle();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.id = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.imgurl = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.content = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.userId = reader.int32();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.updatedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? globalThis.Number(object.id) : 0,
            imgurl: isSet(object.imgurl) ? globalThis.String(object.imgurl) : "",
            content: isSet(object.content) ? globalThis.String(object.content) : "",
            title: isSet(object.title) ? globalThis.String(object.title) : "",
            userId: isSet(object.userId) ? globalThis.Number(object.userId) : 0,
            createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
            updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== 0) {
            obj.id = Math.round(message.id);
        }
        if (message.imgurl !== "") {
            obj.imgurl = message.imgurl;
        }
        if (message.content !== "") {
            obj.content = message.content;
        }
        if (message.title !== "") {
            obj.title = message.title;
        }
        if (message.userId !== 0) {
            obj.userId = Math.round(message.userId);
        }
        if (message.createdAt !== undefined) {
            obj.createdAt = message.createdAt.toISOString();
        }
        if (message.updatedAt !== undefined) {
            obj.updatedAt = message.updatedAt.toISOString();
        }
        return obj;
    },
    create(base) {
        return exports.Article.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseArticle();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        message.imgurl = (_b = object.imgurl) !== null && _b !== void 0 ? _b : "";
        message.content = (_c = object.content) !== null && _c !== void 0 ? _c : "";
        message.title = (_d = object.title) !== null && _d !== void 0 ? _d : "";
        message.userId = (_e = object.userId) !== null && _e !== void 0 ? _e : 0;
        message.createdAt = (_f = object.createdAt) !== null && _f !== void 0 ? _f : undefined;
        message.updatedAt = (_g = object.updatedAt) !== null && _g !== void 0 ? _g : undefined;
        return message;
    },
};
function createBaseCreateReq() {
    return { userId: 0, article: undefined };
}
exports.CreateReq = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== 0) {
            writer.uint32(8).int32(message.userId);
        }
        if (message.article !== undefined) {
            exports.Article.encode(message.article, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateReq();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.userId = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.article = exports.Article.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            userId: isSet(object.userId) ? globalThis.Number(object.userId) : 0,
            article: isSet(object.article) ? exports.Article.fromJSON(object.article) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userId !== 0) {
            obj.userId = Math.round(message.userId);
        }
        if (message.article !== undefined) {
            obj.article = exports.Article.toJSON(message.article);
        }
        return obj;
    },
    create(base) {
        return exports.CreateReq.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCreateReq();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : 0;
        message.article = (object.article !== undefined && object.article !== null)
            ? exports.Article.fromPartial(object.article)
            : undefined;
        return message;
    },
};
function createBaseCreateRes() {
    return { article: undefined };
}
exports.CreateRes = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.article !== undefined) {
            exports.Article.encode(message.article, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateRes();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.article = exports.Article.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { article: isSet(object.article) ? exports.Article.fromJSON(object.article) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.article !== undefined) {
            obj.article = exports.Article.toJSON(message.article);
        }
        return obj;
    },
    create(base) {
        return exports.CreateRes.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseCreateRes();
        message.article = (object.article !== undefined && object.article !== null)
            ? exports.Article.fromPartial(object.article)
            : undefined;
        return message;
    },
};
function createBaseGetAllReq() {
    return { authorId: undefined };
}
exports.GetAllReq = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.authorId !== undefined) {
            writer.uint32(8).int32(message.authorId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetAllReq();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.authorId = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { authorId: isSet(object.authorId) ? globalThis.Number(object.authorId) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.authorId !== undefined) {
            obj.authorId = Math.round(message.authorId);
        }
        return obj;
    },
    create(base) {
        return exports.GetAllReq.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetAllReq();
        message.authorId = (_a = object.authorId) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseGetAllRes() {
    return { articles: [], error: undefined };
}
exports.GetAllRes = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.articles) {
            exports.Article.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.error !== undefined) {
            error_1.Error.encode(message.error, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetAllRes();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.articles.push(exports.Article.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.error = error_1.Error.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            articles: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.articles) ? object.articles.map((e) => exports.Article.fromJSON(e)) : [],
            error: isSet(object.error) ? error_1.Error.fromJSON(object.error) : undefined,
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.articles) === null || _a === void 0 ? void 0 : _a.length) {
            obj.articles = message.articles.map((e) => exports.Article.toJSON(e));
        }
        if (message.error !== undefined) {
            obj.error = error_1.Error.toJSON(message.error);
        }
        return obj;
    },
    create(base) {
        return exports.GetAllRes.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetAllRes();
        message.articles = ((_a = object.articles) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Article.fromPartial(e))) || [];
        message.error = (object.error !== undefined && object.error !== null) ? error_1.Error.fromPartial(object.error) : undefined;
        return message;
    },
};
exports.ArticleServiceService = {
    create: {
        path: "/ArticleService/create",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateReq.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateReq.decode(value),
        responseSerialize: (value) => Buffer.from(exports.CreateRes.encode(value).finish()),
        responseDeserialize: (value) => exports.CreateRes.decode(value),
    },
    all: {
        path: "/ArticleService/all",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetAllReq.encode(value).finish()),
        requestDeserialize: (value) => exports.GetAllReq.decode(value),
        responseSerialize: (value) => Buffer.from(exports.GetAllRes.encode(value).finish()),
        responseDeserialize: (value) => exports.GetAllRes.decode(value),
    },
};
exports.ArticleServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.ArticleServiceService, "ArticleService");
function toTimestamp(date) {
    const seconds = Math.trunc(date.getTime() / 1000);
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = (t.seconds || 0) * 1000;
    millis += (t.nanos || 0) / 1000000;
    return new globalThis.Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof globalThis.Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new globalThis.Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
function isSet(value) {
    return value !== null && value !== undefined;
}
