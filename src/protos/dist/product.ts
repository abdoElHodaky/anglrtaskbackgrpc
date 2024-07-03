// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.176.1
//   protoc               v3.19.6
// source: product.proto

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
import { Attachment } from "./attachment";
import { Error } from "./error";
import { Any } from "./google/protobuf/any";
import { Timestamp } from "./google/protobuf/timestamp";
import { Subscription } from "./subscription";
import { dateToReadable} from "../../grpc/util";
export const protobufPackage = "";

export interface Product {
  id: number;
  specs: Any | undefined;
  subs: Product[];
  parent?: Product | undefined;
  attachments: Attachment[];
  categoriesIds: number[];
  userId?: number | undefined;
  createdAt?: Date | undefined;
  updatedAt?: Date | undefined;
}

export interface CreateProductReq {
  userId: number;
  product: Product | undefined;
}

export interface SubscribeProductReq {
  userId: number;
  productIds: number[];
}

export interface SubscribeProductRes {
  userId?: number | undefined;
  subscription: Subscription | undefined;
}

export interface CreateProductRes {
  userId?: number | undefined;
  product: Product | undefined;
}

export interface GetAllProductsSubscriptionsReq {
  productId: number[];
}

export interface GetAllProductsSubscriptionsRes {
  productsIds: number[];
  subscriptions: Subscription[];
  error?: Error | undefined;
}

export interface GetAllProductsReq {
  userId?: number | undefined;
}

export interface GetAllProductsRes {
  products: Product[];
  error?: Error | undefined;
}

export function createBaseProduct(): Product {
  return {
    id: 0,
    specs: undefined,
    subs: [],
    parent: undefined,
    attachments: [],
    categoriesIds: [],
    userId: undefined,
    createdAt: undefined,
    updatedAt: undefined,
  };
}

export const Product = {
  encode(message: Product, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.specs !== undefined) {
      Any.encode(message.specs, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.subs) {
      Product.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.parent !== undefined) {
      Product.encode(message.parent, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.attachments) {
      Attachment.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    writer.uint32(50).fork();
    for (const v of message.categoriesIds) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.userId !== undefined) {
      writer.uint32(56).int32(message.userId);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(66).fork()).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Product {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProduct();
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

          message.specs = Any.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.subs.push(Product.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.parent = Product.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.attachments.push(Attachment.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag === 48) {
            message.categoriesIds.push(reader.int32());

            continue;
          }

          if (tag === 50) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.categoriesIds.push(reader.int32());
            }

            continue;
          }

          break;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.userId = reader.int32();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
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

  fromJSON(object: any): Product {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      specs: isSet(object.specs) ? Any.fromJSON(object.specs) : undefined,
      subs: globalThis.Array.isArray(object?.subs) ? object.subs.map((e: any) => Product.fromJSON(e)) : [],
      parent: isSet(object.parent) ? Product.fromJSON(object.parent) : undefined,
      attachments: globalThis.Array.isArray(object?.attachments)
        ? object.attachments.map((e: any) => Attachment.fromJSON(e))
        : [],
      categoriesIds: globalThis.Array.isArray(object?.categoriesIds)
        ? object.categoriesIds.map((e: any) => globalThis.Number(e))
        : [],
      userId: isSet(object.userId) ? globalThis.Number(object.userId) : undefined,
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
    };
  },

  toJSON(message: Product): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.specs !== undefined) {
      obj.specs = Any.toJSON(message.specs);
    }
    if (message.subs?.length) {
      obj.subs = message.subs.map((e) => Product.toJSON(e));
    }
    if (message.parent !== undefined) {
      obj.parent = Product.toJSON(message.parent);
    }
    if (message.attachments?.length) {
      obj.attachments = message.attachments.map((e) => Attachment.toJSON(e));
    }
    if (message.categoriesIds?.length) {
      obj.categoriesIds = message.categoriesIds.map((e) => Math.round(e));
    }
    if (message.userId !== undefined) {
      obj.userId = Math.round(message.userId);
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = dateToReadable(message.createdAt.toISOString());
    }
    if (message.updatedAt !== undefined) {
      obj.updatedAt = dateToReadable(message.updatedAt.toISOString());
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Product>, I>>(base?: I): Product {
    return Product.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Product>, I>>(object: I): Product {
    const message = createBaseProduct();
    message.id = object.id ?? 0;
    message.specs = (object.specs !== undefined && object.specs !== null) ? Any.fromPartial(object.specs) : undefined;
    message.subs = object.subs?.map((e) => Product.fromPartial(e)) || [];
    message.parent = (object.parent !== undefined && object.parent !== null)
      ? Product.fromPartial(object.parent)
      : undefined;
    message.attachments = object.attachments?.map((e) => Attachment.fromPartial(e)) || [];
    message.categoriesIds = object.categoriesIds?.map((e) => e) || [];
    message.userId = object.userId ?? undefined;
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    return message;
  },
};

function createBaseCreateProductReq(): CreateProductReq {
  return { userId: 0, product: undefined };
}

export const CreateProductReq = {
  encode(message: CreateProductReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== 0) {
      writer.uint32(8).int32(message.userId);
    }
    if (message.product !== undefined) {
      Product.encode(message.product, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateProductReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateProductReq();
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

          message.product = Product.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateProductReq {
    return {
      userId: isSet(object.userId) ? globalThis.Number(object.userId) : 0,
      product: isSet(object.product) ? Product.fromJSON(object.product) : undefined,
    };
  },

  toJSON(message: CreateProductReq): unknown {
    const obj: any = {};
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    if (message.product !== undefined) {
      obj.product = Product.toJSON(message.product);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateProductReq>, I>>(base?: I): CreateProductReq {
    return CreateProductReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateProductReq>, I>>(object: I): CreateProductReq {
    const message = createBaseCreateProductReq();
    message.userId = object.userId ?? 0;
    message.product = (object.product !== undefined && object.product !== null)
      ? Product.fromPartial(object.product)
      : undefined;
    return message;
  },
};

function createBaseSubscribeProductReq(): SubscribeProductReq {
  return { userId: 0, productIds: [] };
}

export const SubscribeProductReq = {
  encode(message: SubscribeProductReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== 0) {
      writer.uint32(8).int32(message.userId);
    }
    writer.uint32(18).fork();
    for (const v of message.productIds) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeProductReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeProductReq();
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
          if (tag === 16) {
            message.productIds.push(reader.int32());

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.productIds.push(reader.int32());
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SubscribeProductReq {
    return {
      userId: isSet(object.userId) ? globalThis.Number(object.userId) : 0,
      productIds: globalThis.Array.isArray(object?.productIds)
        ? object.productIds.map((e: any) => globalThis.Number(e))
        : [],
    };
  },

  toJSON(message: SubscribeProductReq): unknown {
    const obj: any = {};
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    if (message.productIds?.length) {
      obj.productIds = message.productIds.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SubscribeProductReq>, I>>(base?: I): SubscribeProductReq {
    return SubscribeProductReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SubscribeProductReq>, I>>(object: I): SubscribeProductReq {
    const message = createBaseSubscribeProductReq();
    message.userId = object.userId ?? 0;
    message.productIds = object.productIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseSubscribeProductRes(): SubscribeProductRes {
  return { userId: undefined, subscription: undefined };
}

export const SubscribeProductRes = {
  encode(message: SubscribeProductRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== undefined) {
      writer.uint32(8).int32(message.userId);
    }
    if (message.subscription !== undefined) {
      Subscription.encode(message.subscription, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeProductRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeProductRes();
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

          message.subscription = Subscription.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SubscribeProductRes {
    return {
      userId: isSet(object.userId) ? globalThis.Number(object.userId) : undefined,
      subscription: isSet(object.subscription) ? Subscription.fromJSON(object.subscription) : undefined,
    };
  },

  toJSON(message: SubscribeProductRes): unknown {
    const obj: any = {};
    if (message.userId !== undefined) {
      obj.userId = Math.round(message.userId);
    }
    if (message.subscription !== undefined) {
      obj.subscription = Subscription.toJSON(message.subscription);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SubscribeProductRes>, I>>(base?: I): SubscribeProductRes {
    return SubscribeProductRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SubscribeProductRes>, I>>(object: I): SubscribeProductRes {
    const message = createBaseSubscribeProductRes();
    message.userId = object.userId ?? undefined;
    message.subscription = (object.subscription !== undefined && object.subscription !== null)
      ? Subscription.fromPartial(object.subscription)
      : undefined;
    return message;
  },
};

function createBaseCreateProductRes(): CreateProductRes {
  return { userId: undefined, product: undefined };
}

export const CreateProductRes = {
  encode(message: CreateProductRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== undefined) {
      writer.uint32(8).int32(message.userId);
    }
    if (message.product !== undefined) {
      Product.encode(message.product, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateProductRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateProductRes();
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

          message.product = Product.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateProductRes {
    return {
      userId: isSet(object.userId) ? globalThis.Number(object.userId) : undefined,
      product: isSet(object.product) ? Product.fromJSON(object.product) : undefined,
    };
  },

  toJSON(message: CreateProductRes): unknown {
    const obj: any = {};
    if (message.userId !== undefined) {
      obj.userId = Math.round(message.userId);
    }
    if (message.product !== undefined) {
      obj.product = Product.toJSON(message.product);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateProductRes>, I>>(base?: I): CreateProductRes {
    return CreateProductRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateProductRes>, I>>(object: I): CreateProductRes {
    const message = createBaseCreateProductRes();
    message.userId = object.userId ?? undefined;
    message.product = (object.product !== undefined && object.product !== null)
      ? Product.fromPartial(object.product)
      : undefined;
    return message;
  },
};

function createBaseGetAllProductsSubscriptionsReq(): GetAllProductsSubscriptionsReq {
  return { productId: [] };
}

export const GetAllProductsSubscriptionsReq = {
  encode(message: GetAllProductsSubscriptionsReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.productId) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAllProductsSubscriptionsReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAllProductsSubscriptionsReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.productId.push(reader.int32());

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.productId.push(reader.int32());
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetAllProductsSubscriptionsReq {
    return {
      productId: globalThis.Array.isArray(object?.productId)
        ? object.productId.map((e: any) => globalThis.Number(e))
        : [],
    };
  },

  toJSON(message: GetAllProductsSubscriptionsReq): unknown {
    const obj: any = {};
    if (message.productId?.length) {
      obj.productId = message.productId.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAllProductsSubscriptionsReq>, I>>(base?: I): GetAllProductsSubscriptionsReq {
    return GetAllProductsSubscriptionsReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetAllProductsSubscriptionsReq>, I>>(
    object: I,
  ): GetAllProductsSubscriptionsReq {
    const message = createBaseGetAllProductsSubscriptionsReq();
    message.productId = object.productId?.map((e) => e) || [];
    return message;
  },
};

function createBaseGetAllProductsSubscriptionsRes(): GetAllProductsSubscriptionsRes {
  return { productsIds: [], subscriptions: [], error: undefined };
}

export const GetAllProductsSubscriptionsRes = {
  encode(message: GetAllProductsSubscriptionsRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.productsIds) {
      writer.int32(v);
    }
    writer.ldelim();
    for (const v of message.subscriptions) {
      Subscription.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.error !== undefined) {
      Error.encode(message.error, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAllProductsSubscriptionsRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAllProductsSubscriptionsRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.productsIds.push(reader.int32());

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.productsIds.push(reader.int32());
            }

            continue;
          }

          break;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.subscriptions.push(Subscription.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): GetAllProductsSubscriptionsRes {
    return {
      productsIds: globalThis.Array.isArray(object?.productsIds)
        ? object.productsIds.map((e: any) => globalThis.Number(e))
        : [],
      subscriptions: globalThis.Array.isArray(object?.subscriptions)
        ? object.subscriptions.map((e: any) => Subscription.fromJSON(e))
        : [],
      error: isSet(object.error) ? Error.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: GetAllProductsSubscriptionsRes): unknown {
    const obj: any = {};
    if (message.productsIds?.length) {
      obj.productsIds = message.productsIds.map((e) => Math.round(e));
    }
    if (message.subscriptions?.length) {
      obj.subscriptions = message.subscriptions.map((e) => Subscription.toJSON(e));
    }
    if (message.error !== undefined) {
      obj.error = Error.toJSON(message.error);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAllProductsSubscriptionsRes>, I>>(base?: I): GetAllProductsSubscriptionsRes {
    return GetAllProductsSubscriptionsRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetAllProductsSubscriptionsRes>, I>>(
    object: I,
  ): GetAllProductsSubscriptionsRes {
    const message = createBaseGetAllProductsSubscriptionsRes();
    message.productsIds = object.productsIds?.map((e) => e) || [];
    message.subscriptions = object.subscriptions?.map((e) => Subscription.fromPartial(e)) || [];
    message.error = (object.error !== undefined && object.error !== null) ? Error.fromPartial(object.error) : undefined;
    return message;
  },
};

function createBaseGetAllProductsReq(): GetAllProductsReq {
  return { userId: undefined };
}

export const GetAllProductsReq = {
  encode(message: GetAllProductsReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== undefined) {
      writer.uint32(8).int32(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAllProductsReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAllProductsReq();
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

  fromJSON(object: any): GetAllProductsReq {
    return { userId: isSet(object.userId) ? globalThis.Number(object.userId) : undefined };
  },

  toJSON(message: GetAllProductsReq): unknown {
    const obj: any = {};
    if (message.userId !== undefined) {
      obj.userId = Math.round(message.userId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAllProductsReq>, I>>(base?: I): GetAllProductsReq {
    return GetAllProductsReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetAllProductsReq>, I>>(object: I): GetAllProductsReq {
    const message = createBaseGetAllProductsReq();
    message.userId = object.userId ?? undefined;
    return message;
  },
};

function createBaseGetAllProductsRes(): GetAllProductsRes {
  return { products: [], error: undefined };
}

export const GetAllProductsRes = {
  encode(message: GetAllProductsRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.products) {
      Product.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      Error.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAllProductsRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAllProductsRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.products.push(Product.decode(reader, reader.uint32()));
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

  fromJSON(object: any): GetAllProductsRes {
    return {
      products: globalThis.Array.isArray(object?.products) ? object.products.map((e: any) => Product.fromJSON(e)) : [],
      error: isSet(object.error) ? Error.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: GetAllProductsRes): unknown {
    const obj: any = {};
    if (message.products?.length) {
      obj.products = message.products.map((e) => Product.toJSON(e));
    }
    if (message.error !== undefined) {
      obj.error = Error.toJSON(message.error);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAllProductsRes>, I>>(base?: I): GetAllProductsRes {
    return GetAllProductsRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetAllProductsRes>, I>>(object: I): GetAllProductsRes {
    const message = createBaseGetAllProductsRes();
    message.products = object.products?.map((e) => Product.fromPartial(e)) || [];
    message.error = (object.error !== undefined && object.error !== null) ? Error.fromPartial(object.error) : undefined;
    return message;
  },
};

export type ProductServiceService = typeof ProductServiceService;
export const ProductServiceService = {
  create: {
    path: "/ProductService/create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateProductReq) => Buffer.from(CreateProductReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateProductReq.decode(value),
    responseSerialize: (value: CreateProductRes) => Buffer.from(CreateProductRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateProductRes.decode(value),
  },
  all: {
    path: "/ProductService/all",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetAllProductsReq) => Buffer.from(GetAllProductsReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetAllProductsReq.decode(value),
    responseSerialize: (value: GetAllProductsRes) => Buffer.from(GetAllProductsRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetAllProductsRes.decode(value),
  },
  allSubscriptions: {
    path: "/ProductService/all_subscriptions",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetAllProductsSubscriptionsReq) =>
      Buffer.from(GetAllProductsSubscriptionsReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetAllProductsSubscriptionsReq.decode(value),
    responseSerialize: (value: GetAllProductsSubscriptionsRes) =>
      Buffer.from(GetAllProductsSubscriptionsRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetAllProductsSubscriptionsRes.decode(value),
  },
  subscribe: {
    path: "/ProductService/subscribe",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SubscribeProductReq) => Buffer.from(SubscribeProductReq.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SubscribeProductReq.decode(value),
    responseSerialize: (value: SubscribeProductRes) => Buffer.from(SubscribeProductRes.encode(value).finish()),
    responseDeserialize: (value: Buffer) => SubscribeProductRes.decode(value),
  },
} as const;

export interface ProductServiceServer extends UntypedServiceImplementation {
  create: handleUnaryCall<CreateProductReq, CreateProductRes>;
  all: handleUnaryCall<GetAllProductsReq, GetAllProductsRes>;
  allSubscriptions: handleUnaryCall<GetAllProductsSubscriptionsReq, GetAllProductsSubscriptionsRes>;
  subscribe: handleUnaryCall<SubscribeProductReq, SubscribeProductRes>;
}

export interface ProductServiceClient extends Client {
  create(
    request: CreateProductReq,
    callback: (error: ServiceError | null, response: CreateProductRes) => void,
  ): ClientUnaryCall;
  create(
    request: CreateProductReq,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreateProductRes) => void,
  ): ClientUnaryCall;
  create(
    request: CreateProductReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreateProductRes) => void,
  ): ClientUnaryCall;
  all(
    request: GetAllProductsReq,
    callback: (error: ServiceError | null, response: GetAllProductsRes) => void,
  ): ClientUnaryCall;
  all(
    request: GetAllProductsReq,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetAllProductsRes) => void,
  ): ClientUnaryCall;
  all(
    request: GetAllProductsReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetAllProductsRes) => void,
  ): ClientUnaryCall;
  allSubscriptions(
    request: GetAllProductsSubscriptionsReq,
    callback: (error: ServiceError | null, response: GetAllProductsSubscriptionsRes) => void,
  ): ClientUnaryCall;
  allSubscriptions(
    request: GetAllProductsSubscriptionsReq,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetAllProductsSubscriptionsRes) => void,
  ): ClientUnaryCall;
  allSubscriptions(
    request: GetAllProductsSubscriptionsReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetAllProductsSubscriptionsRes) => void,
  ): ClientUnaryCall;
  subscribe(
    request: SubscribeProductReq,
    callback: (error: ServiceError | null, response: SubscribeProductRes) => void,
  ): ClientUnaryCall;
  subscribe(
    request: SubscribeProductReq,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: SubscribeProductRes) => void,
  ): ClientUnaryCall;
  subscribe(
    request: SubscribeProductReq,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: SubscribeProductRes) => void,
  ): ClientUnaryCall;
}

export const ProductServiceClient = makeGenericClientConstructor(
  ProductServiceService,
  "ProductService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ProductServiceClient;
  service: typeof ProductServiceService;
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
