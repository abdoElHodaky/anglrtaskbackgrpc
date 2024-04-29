/* eslint-disable */
import {
  type CallOptions,
  ChannelCredentials,
  Client,
  type ClientOptions,
  type ClientUnaryCall,
  type handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  type ServiceError,
  type UntypedServiceImplementation,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Error } from "./error";
import { Timestamp } from "./google/protobuf/timestamp";

export const protobufPackage = "";

export interface Article {
  id: number;
  imgurl: string;
  content: string;
  title: string;
  userId: number;
  createdAt?: Date | undefined;
  updatedAt?: Date | undefined;
}

export interface CreateReq {
  userId: number;
  article: Article | undefined;
}

export interface CreateRes {
  article: Article | undefined;
}

export interface GetAllReq {
  authorId?: number | undefined;
}

export interface GetAllRes {
  articles: Article[];
  error?: Error | undefined;
}

function createBaseArticle(): Article {
  return { id: 0, imgurl: "", content: "", title: "", userId: 0, createdAt: undefined, updatedAt: undefined };
}

export const Article = {
  encode(message: Article, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(50).fork()).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Article {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Article {
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

  toJSON(message: Article): unknown {
    const obj: any = {};
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

  create<I extends Exact<DeepPartial<Article>, I>>(base?: I): Article {
    return Article.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Article>, I>>(object: I): Article {
    const message = createBaseArticle();
    message.id = object.id ?? 0;
    message.imgurl = object.imgurl ?? "";
    message.content = object.content ?? "";
    message.title = object.title ?? "";
    message.userId = object.userId ?? 0;
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    return message;
  },
};

function createBaseCreateReq(): CreateReq {
  return { userId: 0, article: undefined };
}

export const CreateReq = {
  encode(message: CreateReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== 0) {
      writer.uint32(8).int32(message.userId);
    }
    if (message.article !== undefined) {
      Article.encode(message.article, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

          message.article = Article.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateReq {
    return {
      userId: isSet(object.userId) ? globalThis.Number(object.userId) : 0,
      article: isSet(object.article) ? Article.fromJSON(object.article) : undefined,
    };
  },

  toJSON(message: CreateReq): unknown {
    const obj: any = {};
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    if (message.article !== undefined) {
      obj.article = Article.toJSON(message.article);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateReq>, I>>(base?: I): CreateReq {
    return CreateReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateReq>, I>>(object: I): CreateReq {
    const message = createBaseCreateReq();
    message.userId = object.userId ?? 0;
    message.article = (object.article !== undefined && object.article !== null)
      ? Article.fromPartial(object.article)
      : undefined;
    return message;
  },
};

function createBaseCreateRes(): CreateRes {
  return { article: undefined };
}

export const CreateRes = {
  encode(message: CreateRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.article !== undefined) {
      Article.encode(message.article, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.article = Article.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateRes {
    return { article: isSet(object.article) ? Article.fromJSON(object.article) : undefined };
  },

  toJSON(message: CreateRes): unknown {
    const obj: any = {};
    if (message.article !== undefined) {
      obj.article = Article.toJSON(message.article);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateRes>, I>>(base?: I): CreateRes {
    return CreateRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateRes>, I>>(object: I): CreateRes {
    const message = createBaseCreateRes();
    message.article = (object.article !== undefined && object.article !== null)
      ? Article.fromPartial(object.article)
      : undefined;
    return message;
  },
};

function createBaseGetAllReq(): GetAllReq {
  return { authorId: undefined };
}

export const GetAllReq = {
  encode(message: GetAllReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authorId !== undefined) {
      writer.uint32(8).int32(message.authorId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAllReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

  fromJSON(object: any): GetAllReq {
    return { authorId: isSet(object.authorId) ? globalThis.Number(object.authorId) : undefined };
  },

  toJSON(message: GetAllReq): unknown {
    const obj: any = {};
    if (message.authorId !== undefined) {
      obj.authorId = Math.round(message.authorId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAllReq>, I>>(base?: I): GetAllReq {
    return GetAllReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetAllReq>, I>>(object: I): GetAllReq {
    const message = createBaseGetAllReq();
    message.authorId = object.authorId ?? undefined;
    return message;
  },
};

function createBaseGetAllRes(): GetAllRes {
  return { articles: [], error: undefined };
}

export const GetAllRes = {
  encode(message: GetAllRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.articles) {
      Article.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      Error.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAllRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAllRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.articles.push(Article.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.error = Error.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetAllRes {
    return {
      articles: globalThis.Array.isArray(object?.articles) ? object.articles.map((e: any) => Article.fromJSON(e)) : [],
      error: isSet(object.error) ? Error.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: GetAllRes): unknown {
    const obj: any = {};
    if (message.articles?.length) {
      obj.articles = message.articles.map((e) => Article.toJSON(e));
    }
    if (message.error !== undefined) {
      obj.error = Error.toJSON(message.error);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAllRes>, I>>(base?: I): GetAllRes {
    return GetAllRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetAllRes>, I>>(object: I): GetAllRes {
    const message = createBaseGetAllRes();
    message.articles = object.articles?.map((e) => Article.fromPartial(e)) || [];
    message.error = (object.error !== undefined && object.error !== null) ? Error.fromPartial(object.error) : undefined;
    return message;
  },
};

export type ArticleServiceService = typeof ArticleServiceService;
export const ArticleServiceService = {
  create: {
    path: "/ArticleService/create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateReq) => Buffer.from(CreateReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateReq.decode(value),
    responseSerialize: (value: CreateRes) => Buffer.from(CreateRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateRes.decode(value),
  },
  all: {
    path: "/ArticleService/all",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetAllReq) => Buffer.from(GetAllReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetAllReq.decode(value),
    responseSerialize: (value: GetAllRes) => Buffer.from(GetAllRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetAllRes.decode(value),
  },
} as const;

export interface ArticleServiceServer extends UntypedServiceImplementation {
  create: handleUnaryCall<CreateReq, CreateRes>;
  all: handleUnaryCall<GetAllReq, GetAllRes>;
}

export interface ArticleServiceClient extends Client {
  create(request: CreateReq, callback: (error: ServiceError | null, response: CreateRes) => void): ClientUnaryCall;
  create(
    request: CreateReq,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreateRes) => void,
  ): ClientUnaryCall;
  create(
    request: CreateReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreateRes) => void,
  ): ClientUnaryCall;
  all(request: GetAllReq, callback: (error: ServiceError | null, response: GetAllRes) => void): ClientUnaryCall;
  all(
    request: GetAllReq,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetAllRes) => void,
  ): ClientUnaryCall;
  all(
    request: GetAllReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetAllRes) => void,
  ): ClientUnaryCall;
}

export const ArticleServiceClient = makeGenericClientConstructor(
  ArticleServiceService,
  "ArticleService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ArticleServiceClient;
  service: typeof ArticleServiceService;
  serviceName: string;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function toTimestamp(date: Date): Timestamp {
  const seconds = Math.trunc(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
