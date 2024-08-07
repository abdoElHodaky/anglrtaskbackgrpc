// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.176.1
//   protoc               v3.14.0
// source: payment.proto

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
import { Address } from "./address";
import { Any } from "./google/protobuf/any";
import { Timestamp } from "./google/protobuf/timestamp";
import { dateToReadable} from "../../grpc/util";
export const protobufPackage = "";

export enum PaymentStatus {
  PAYMENT_DEFAULT = 0,
  PAYMENT_PENDING = 1,
  PAYMENT_PAID = 2,
  UNRECOGNIZED = -1,
}

export function paymentStatusFromJSON(object: any): PaymentStatus {
  switch (object) {
    case 0:
    case "PAYMENT_DEFAULT":
      return PaymentStatus.PAYMENT_DEFAULT;
    case 1:
    case "PAYMENT_PENDING":
      return PaymentStatus.PAYMENT_PENDING;
    case 2:
    case "PAYMENT_PAID":
      return PaymentStatus.PAYMENT_PAID;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PaymentStatus.UNRECOGNIZED;
  }
}

export function paymentStatusToJSON(object: PaymentStatus): string {
  switch (object) {
    case PaymentStatus.PAYMENT_DEFAULT:
      return "PAYMENT_DEFAULT";
    case PaymentStatus.PAYMENT_PENDING:
      return "PAYMENT_PENDING";
    case PaymentStatus.PAYMENT_PAID:
      return "PAYMENT_PAID";
    case PaymentStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Payment {
  id: number;
  title?: string | undefined;
  date?: string | undefined;
  status: PaymentStatus;
  amount: number;
  currency: string;
  address: Address | undefined;
  transR?: string | undefined;
  userId: number;
  createdAt?: Date | undefined;
  updatedAt?: Date | undefined;
}

export interface PaymentResult {
  paymentId: number;
  result?: Any | undefined;
}

export interface CreatePaymentReq {
  purshaseId: number;
  userId?: number | undefined;
}

export interface CreatePaymentRes {
  payment: Payment | undefined;
}

export interface GetAllPayReq {
  userId: number;
}

export interface GetAllPayRes {
  userId: number;
  payments: Payment[];
}

export interface GetPayResultReq {
  result?: PaymentResult | undefined;
}

export interface GetPayResultRes {
  result?: PaymentResult | undefined;
}

export function createBasePayment(): Payment {
  return {
    id: 0,
    title: undefined,
    date: undefined,
    status: 0,
    amount: 0,
    currency: "",
    address: undefined,
    transR: undefined,
    userId: 0,
    createdAt: undefined,
    updatedAt: undefined,
  };
}

export const Payment = {
  encode(message: Payment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.title !== undefined) {
      writer.uint32(18).string(message.title);
    }
    if (message.date !== undefined) {
      writer.uint32(26).string(message.date);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.amount !== 0) {
      writer.uint32(40).int32(message.amount);
    }
    if (message.currency !== "") {
      writer.uint32(50).string(message.currency);
    }
    if (message.address !== undefined) {
      Address.encode(message.address, writer.uint32(58).fork()).ldelim();
    }
    if (message.transR !== undefined) {
      writer.uint32(66).string(message.transR);
    }
    if (message.userId !== 0) {
      writer.uint32(72).int32(message.userId);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(82).fork()).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Payment {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePayment();
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

          message.title = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.date = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.amount = reader.int32();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.currency = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.address = Address.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.transR = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.userId = reader.int32();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag !== 90) {
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

  fromJSON(object: any): Payment {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      title: isSet(object.title) ? globalThis.String(object.title) : undefined,
      date: isSet(object.date) ? globalThis.String(object.date) : undefined,
      status: isSet(object.status) ? paymentStatusFromJSON(object.status) : 0,
      amount: isSet(object.amount) ? globalThis.Number(object.amount) : 0,
      currency: isSet(object.currency) ? globalThis.String(object.currency) : "",
      address: isSet(object.address) ? Address.fromJSON(object.address) : undefined,
      transR: isSet(object.transR) ? globalThis.String(object.transR) : undefined,
      userId: isSet(object.userId) ? globalThis.Number(object.userId) : 0,
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
    };
  },

  toJSON(message: Payment): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.title !== undefined) {
      obj.title = message.title;
    }
    if (message.date !== undefined) {
      obj.date = message.date;
    }
    if (message.status !== 0) {
      obj.status = paymentStatusToJSON(message.status);
    }
    if (message.amount !== 0) {
      obj.amount = Math.round(message.amount);
    }
    if (message.currency !== "") {
      obj.currency = message.currency;
    }
    if (message.address !== undefined) {
      obj.address = Address.toJSON(message.address);
    }
    if (message.transR !== undefined) {
      obj.transR = message.transR;
    }
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    if (message.createdAt !== undefined) {
      obj.createdAt =dateToReadable( message.createdAt.toISOString());
    }
    if (message.updatedAt !== undefined) {
      obj.updatedAt =dateToReadable( message.updatedAt.toISOString());
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Payment>, I>>(base?: I): Payment {
    return Payment.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Payment>, I>>(object: I): Payment {
    const message = createBasePayment();
    message.id = object.id ?? 0;
    message.title = object.title ?? undefined;
    message.date = object.date ?? undefined;
    message.status = object.status ?? 0;
    message.amount = object.amount ?? 0;
    message.currency = object.currency ?? "";
    message.address = (object.address !== undefined && object.address !== null)
      ? Address.fromPartial(object.address)
      : undefined;
    message.transR = object.transR ?? undefined;
    message.userId = object.userId ?? 0;
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    return message;
  },
};

function createBasePaymentResult(): PaymentResult {
  return { paymentId: 0, result: undefined };
}

export const PaymentResult = {
  encode(message: PaymentResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.paymentId !== 0) {
      writer.uint32(8).int32(message.paymentId);
    }
    if (message.result !== undefined) {
      Any.encode(message.result, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PaymentResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePaymentResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.paymentId = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.result = Any.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PaymentResult {
    return {
      paymentId: isSet(object.paymentId) ? globalThis.Number(object.paymentId) : 0,
      result: isSet(object.result) ? Any.fromJSON(object.result) : undefined,
    };
  },

  toJSON(message: PaymentResult): unknown {
    const obj: any = {};
    if (message.paymentId !== 0) {
      obj.paymentId = Math.round(message.paymentId);
    }
    if (message.result !== undefined) {
      obj.result = Any.toJSON(message.result);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PaymentResult>, I>>(base?: I): PaymentResult {
    return PaymentResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PaymentResult>, I>>(object: I): PaymentResult {
    const message = createBasePaymentResult();
    message.paymentId = object.paymentId ?? 0;
    message.result = (object.result !== undefined && object.result !== null)
      ? Any.fromPartial(object.result)
      : undefined;
    return message;
  },
};

function createBaseCreatePaymentReq(): CreatePaymentReq {
  return { purshaseId: 0, userId: undefined };
}

export const CreatePaymentReq = {
  encode(message: CreatePaymentReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.purshaseId !== 0) {
      writer.uint32(8).int32(message.purshaseId);
    }
    if (message.userId !== undefined) {
      writer.uint32(16).int32(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreatePaymentReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreatePaymentReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.purshaseId = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.userId = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreatePaymentReq {
    return {
      purshaseId: isSet(object.purshaseId) ? globalThis.Number(object.purshaseId) : 0,
      userId: isSet(object.userId) ? globalThis.Number(object.userId) : undefined,
    };
  },

  toJSON(message: CreatePaymentReq): unknown {
    const obj: any = {};
    if (message.purshaseId !== 0) {
      obj.purshaseId = Math.round(message.purshaseId);
    }
    if (message.userId !== undefined) {
      obj.userId = Math.round(message.userId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreatePaymentReq>, I>>(base?: I): CreatePaymentReq {
    return CreatePaymentReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreatePaymentReq>, I>>(object: I): CreatePaymentReq {
    const message = createBaseCreatePaymentReq();
    message.purshaseId = object.purshaseId ?? 0;
    message.userId = object.userId ?? undefined;
    return message;
  },
};

function createBaseCreatePaymentRes(): CreatePaymentRes {
  return { payment: undefined };
}

export const CreatePaymentRes = {
  encode(message: CreatePaymentRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payment !== undefined) {
      Payment.encode(message.payment, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreatePaymentRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreatePaymentRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payment = Payment.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreatePaymentRes {
    return { payment: isSet(object.payment) ? Payment.fromJSON(object.payment) : undefined };
  },

  toJSON(message: CreatePaymentRes): unknown {
    const obj: any = {};
    if (message.payment !== undefined) {
      obj.payment = Payment.toJSON(message.payment);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreatePaymentRes>, I>>(base?: I): CreatePaymentRes {
    return CreatePaymentRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreatePaymentRes>, I>>(object: I): CreatePaymentRes {
    const message = createBaseCreatePaymentRes();
    message.payment = (object.payment !== undefined && object.payment !== null)
      ? Payment.fromPartial(object.payment)
      : undefined;
    return message;
  },
};

function createBaseGetAllPayReq(): GetAllPayReq {
  return { userId: 0 };
}

export const GetAllPayReq = {
  encode(message: GetAllPayReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== 0) {
      writer.uint32(8).int32(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAllPayReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAllPayReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.userId = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetAllPayReq {
    return { userId: isSet(object.userId) ? globalThis.Number(object.userId) : 0 };
  },

  toJSON(message: GetAllPayReq): unknown {
    const obj: any = {};
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAllPayReq>, I>>(base?: I): GetAllPayReq {
    return GetAllPayReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetAllPayReq>, I>>(object: I): GetAllPayReq {
    const message = createBaseGetAllPayReq();
    message.userId = object.userId ?? 0;
    return message;
  },
};

function createBaseGetAllPayRes(): GetAllPayRes {
  return { userId: 0, payments: [] };
}

export const GetAllPayRes = {
  encode(message: GetAllPayRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== 0) {
      writer.uint32(8).int32(message.userId);
    }
    for (const v of message.payments) {
      Payment.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAllPayRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAllPayRes();
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

          message.payments.push(Payment.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetAllPayRes {
    return {
      userId: isSet(object.userId) ? globalThis.Number(object.userId) : 0,
      payments: globalThis.Array.isArray(object?.payments) ? object.payments.map((e: any) => Payment.fromJSON(e)) : [],
    };
  },

  toJSON(message: GetAllPayRes): unknown {
    const obj: any = {};
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    if (message.payments?.length) {
      obj.payments = message.payments.map((e) => Payment.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAllPayRes>, I>>(base?: I): GetAllPayRes {
    return GetAllPayRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetAllPayRes>, I>>(object: I): GetAllPayRes {
    const message = createBaseGetAllPayRes();
    message.userId = object.userId ?? 0;
    message.payments = object.payments?.map((e) => Payment.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetPayResultReq(): GetPayResultReq {
  return { result: undefined };
}

export const GetPayResultReq = {
  encode(message: GetPayResultReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== undefined) {
      PaymentResult.encode(message.result, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetPayResultReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPayResultReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.result = PaymentResult.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetPayResultReq {
    return { result: isSet(object.result) ? PaymentResult.fromJSON(object.result) : undefined };
  },

  toJSON(message: GetPayResultReq): unknown {
    const obj: any = {};
    if (message.result !== undefined) {
      obj.result = PaymentResult.toJSON(message.result);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetPayResultReq>, I>>(base?: I): GetPayResultReq {
    return GetPayResultReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetPayResultReq>, I>>(object: I): GetPayResultReq {
    const message = createBaseGetPayResultReq();
    message.result = (object.result !== undefined && object.result !== null)
      ? PaymentResult.fromPartial(object.result)
      : undefined;
    return message;
  },
};

function createBaseGetPayResultRes(): GetPayResultRes {
  return { result: undefined };
}

export const GetPayResultRes = {
  encode(message: GetPayResultRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== undefined) {
      PaymentResult.encode(message.result, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetPayResultRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPayResultRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.result = PaymentResult.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetPayResultRes {
    return { result: isSet(object.result) ? PaymentResult.fromJSON(object.result) : undefined };
  },

  toJSON(message: GetPayResultRes): unknown {
    const obj: any = {};
    if (message.result !== undefined) {
      obj.result = PaymentResult.toJSON(message.result);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetPayResultRes>, I>>(base?: I): GetPayResultRes {
    return GetPayResultRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetPayResultRes>, I>>(object: I): GetPayResultRes {
    const message = createBaseGetPayResultRes();
    message.result = (object.result !== undefined && object.result !== null)
      ? PaymentResult.fromPartial(object.result)
      : undefined;
    return message;
  },
};

export type PaymentServiceService = typeof PaymentServiceService;
export const PaymentServiceService = {
  all: {
    path: "/PaymentService/all",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetAllPayReq) => Buffer.from(GetAllPayReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetAllPayReq.decode(value),
    responseSerialize: (value: GetAllPayRes) => Buffer.from(GetAllPayRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetAllPayRes.decode(value),
  },
  create: {
    path: "/PaymentService/create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreatePaymentReq) => Buffer.from(CreatePaymentReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreatePaymentReq.decode(value),
    responseSerialize: (value: CreatePaymentRes) => Buffer.from(CreatePaymentRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreatePaymentRes.decode(value),
  },
  result: {
    path: "/PaymentService/result",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetPayResultReq) => Buffer.from(GetPayResultReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetPayResultReq.decode(value),
    responseSerialize: (value: GetPayResultRes) => Buffer.from(GetPayResultRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetPayResultRes.decode(value),
  },
} as const;

export interface PaymentServiceServer extends UntypedServiceImplementation {
  all: handleUnaryCall<GetAllPayReq, GetAllPayRes>;
  create: handleUnaryCall<CreatePaymentReq, CreatePaymentRes>;
  result: handleUnaryCall<GetPayResultReq, GetPayResultRes>;
}

export interface PaymentServiceClient extends Client {
  all(request: GetAllPayReq, callback: (error: ServiceError | null, response: GetAllPayRes) => void): ClientUnaryCall;
  all(
    request: GetAllPayReq,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetAllPayRes) => void,
  ): ClientUnaryCall;
  all(
    request: GetAllPayReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetAllPayRes) => void,
  ): ClientUnaryCall;
  create(
    request: CreatePaymentReq,
    callback: (error: ServiceError | null, response: CreatePaymentRes) => void,
  ): ClientUnaryCall;
  create(
    request: CreatePaymentReq,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreatePaymentRes) => void,
  ): ClientUnaryCall;
  create(
    request: CreatePaymentReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreatePaymentRes) => void,
  ): ClientUnaryCall;
  result(
    request: GetPayResultReq,
    callback: (error: ServiceError | null, response: GetPayResultRes) => void,
  ): ClientUnaryCall;
  result(
    request: GetPayResultReq,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetPayResultRes) => void,
  ): ClientUnaryCall;
  result(
    request: GetPayResultReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetPayResultRes) => void,
  ): ClientUnaryCall;
}

export const PaymentServiceClient = makeGenericClientConstructor(
  PaymentServiceService,
  "PaymentService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): PaymentServiceClient;
  service: typeof PaymentServiceService;
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
