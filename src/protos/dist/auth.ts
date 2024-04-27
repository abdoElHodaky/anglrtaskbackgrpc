/* eslint-disable */
import { ChannelCredentials, Client, makeGenericClientConstructor, Metadata } from "@grpc/grpc-js";
import type {
  CallOptions,
  ClientOptions,
  ClientUnaryCall,
  handleUnaryCall,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Error } from "./error";
import { User } from "./user";

export const protobufPackage = "";

export interface LoginUserReq {
  username: string;
  passwordHash: string;
}

export interface LoginUserRes {
  user: User | undefined;
  error?: Error | undefined;
}

export interface RegisterUserReq {
  user: User | undefined;
}

export interface RegisterUserRes {
  user: User | undefined;
  error?: Error | undefined;
}

function createBaseLoginUserReq(): LoginUserReq {
  return { username: "", passwordHash: "" };
}

export const LoginUserReq = {
  encode(message: LoginUserReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.username !== "") {
      writer.uint32(10).string(message.username);
    }
    if (message.passwordHash !== "") {
      writer.uint32(18).string(message.passwordHash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginUserReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginUserReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.username = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.passwordHash = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LoginUserReq {
    return {
      username: isSet(object.username) ? globalThis.String(object.username) : "",
      passwordHash: isSet(object.passwordHash) ? globalThis.String(object.passwordHash) : "",
    };
  },

  toJSON(message: LoginUserReq): unknown {
    const obj: any = {};
    if (message.username !== "") {
      obj.username = message.username;
    }
    if (message.passwordHash !== "") {
      obj.passwordHash = message.passwordHash;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LoginUserReq>, I>>(base?: I): LoginUserReq {
    return LoginUserReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LoginUserReq>, I>>(object: I): LoginUserReq {
    const message = createBaseLoginUserReq();
    message.username = object.username ?? "";
    message.passwordHash = object.passwordHash ?? "";
    return message;
  },
};

function createBaseLoginUserRes(): LoginUserRes {
  return { user: undefined, error: undefined };
}

export const LoginUserRes = {
  encode(message: LoginUserRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      Error.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginUserRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginUserRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.user = User.decode(reader, reader.uint32());
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

  fromJSON(object: any): LoginUserRes {
    return {
      user: isSet(object.user) ? User.fromJSON(object.user) : undefined,
      error: isSet(object.error) ? Error.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: LoginUserRes): unknown {
    const obj: any = {};
    if (message.user !== undefined) {
      obj.user = User.toJSON(message.user);
    }
    if (message.error !== undefined) {
      obj.error = Error.toJSON(message.error);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LoginUserRes>, I>>(base?: I): LoginUserRes {
    return LoginUserRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LoginUserRes>, I>>(object: I): LoginUserRes {
    const message = createBaseLoginUserRes();
    message.user = (object.user !== undefined && object.user !== null) ? User.fromPartial(object.user) : undefined;
    message.error = (object.error !== undefined && object.error !== null) ? Error.fromPartial(object.error) : undefined;
    return message;
  },
};

function createBaseRegisterUserReq(): RegisterUserReq {
  return { user: undefined };
}

export const RegisterUserReq = {
  encode(message: RegisterUserReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterUserReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterUserReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.user = User.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RegisterUserReq {
    return { user: isSet(object.user) ? User.fromJSON(object.user) : undefined };
  },

  toJSON(message: RegisterUserReq): unknown {
    const obj: any = {};
    if (message.user !== undefined) {
      obj.user = User.toJSON(message.user);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RegisterUserReq>, I>>(base?: I): RegisterUserReq {
    return RegisterUserReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RegisterUserReq>, I>>(object: I): RegisterUserReq {
    const message = createBaseRegisterUserReq();
    message.user = (object.user !== undefined && object.user !== null) ? User.fromPartial(object.user) : undefined;
    return message;
  },
};

function createBaseRegisterUserRes(): RegisterUserRes {
  return { user: undefined, error: undefined };
}

export const RegisterUserRes = {
  encode(message: RegisterUserRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      Error.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterUserRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterUserRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.user = User.decode(reader, reader.uint32());
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

  fromJSON(object: any): RegisterUserRes {
    return {
      user: isSet(object.user) ? User.fromJSON(object.user) : undefined,
      error: isSet(object.error) ? Error.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: RegisterUserRes): unknown {
    const obj: any = {};
    if (message.user !== undefined) {
      obj.user = User.toJSON(message.user);
    }
    if (message.error !== undefined) {
      obj.error = Error.toJSON(message.error);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RegisterUserRes>, I>>(base?: I): RegisterUserRes {
    return RegisterUserRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RegisterUserRes>, I>>(object: I): RegisterUserRes {
    const message = createBaseRegisterUserRes();
    message.user = (object.user !== undefined && object.user !== null) ? User.fromPartial(object.user) : undefined;
    message.error = (object.error !== undefined && object.error !== null) ? Error.fromPartial(object.error) : undefined;
    return message;
  },
};

export type AuthServiceService = typeof AuthServiceService;
export const AuthServiceService = {
  login: {
    path: "/AuthService/login",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LoginUserReq) => Buffer.from(LoginUserReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LoginUserReq.decode(value),
    responseSerialize: (value: LoginUserRes) => Buffer.from(LoginUserRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => LoginUserRes.decode(value),
  },
  register: {
    path: "/AuthService/register",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RegisterUserReq) => Buffer.from(RegisterUserReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RegisterUserReq.decode(value),
    responseSerialize: (value: RegisterUserRes) => Buffer.from(RegisterUserRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => RegisterUserRes.decode(value),
  },
} as const;

export interface AuthServiceServer extends UntypedServiceImplementation {
  login: handleUnaryCall<LoginUserReq, LoginUserRes>;
  register: handleUnaryCall<RegisterUserReq, RegisterUserRes>;
}

export interface AuthServiceClient extends Client {
  login(request: LoginUserReq, callback: (error: ServiceError | null, response: LoginUserRes) => void): ClientUnaryCall;
  login(
    request: LoginUserReq,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: LoginUserRes) => void,
  ): ClientUnaryCall;
  login(
    request: LoginUserReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: LoginUserRes) => void,
  ): ClientUnaryCall;
  register(
    request: RegisterUserReq,
    callback: (error: ServiceError | null, response: RegisterUserRes) => void,
  ): ClientUnaryCall;
  register(
    request: RegisterUserReq,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: RegisterUserRes) => void,
  ): ClientUnaryCall;
  register(
    request: RegisterUserReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: RegisterUserRes) => void,
  ): ClientUnaryCall;
}

export const AuthServiceClient = makeGenericClientConstructor(AuthServiceService, "AuthService") as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): AuthServiceClient;
  service: typeof AuthServiceService;
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
