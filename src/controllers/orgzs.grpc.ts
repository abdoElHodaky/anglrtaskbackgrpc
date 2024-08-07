import { credentials } from "@grpc/grpc-js";
import {_Orgz } from "../protos/dist/";
import { AuthenticateMiddleware ,OwnerMiddleware} from "../middlewares/"
//import { CreatePaymentDto} from "../dto/create-payment.dto";
import { Res, Post, Controller, Get, Body , Params ,Delete,Req,Query } from '@decorators/express';
import { Response} from "express"
import { Request } from "express-jwt";
import { isNumeric,nationalIdvalid } from "../helpers";
import { Error , NotFoundError } from "common-errors";
import {Env} from "../env";
import {services} from "../services/enum";
const address = "localhost:"+ Env.GRPCSTWOPORT
@Controller('/orgzs')
export class GrpcOrgzController {
  private client =new _Orgz.OrgzServiceClient(
    address,
    credentials.createInsecure()
  )
  private service=services.Orgz
  
  constructor(){}
  
  @Get("",[])
  async all(@Res() res:Response ,@Query("ownerId") ownerId:string ,@Req() req?:Request ):Promise<void>{
   
    const allorgzsreq:_Orgz.GetAllOrgzsReq={  
       ownerId:(req?.auth!=undefined)? req?.auth.id: parseInt(ownerId)
    }
   // console.log(allorgzsreq)
    this.client.all(allorgzsreq,(err:any,resp:_Orgz.GetAllOrgzsRes)=>{
      if (err) {
      res.jsonp(err);
        console.error(err)
    } else {
        const resl=_Orgz.GetAllOrgzsRes.toJSON(resp)
        
        res.json(resl)
     }
    })
  }
  
  @Post("",[AuthenticateMiddleware, OwnerMiddleware ])
  async create(@Req() req:Request,/*@Body() createpaymentdto:CreatePaymentDto*/  @Res() res:Response):Promise<void>{
    const {auth}=req
   // console.log(auth)
    //let payment=await this.paymentService.create(createpaymentdto)
   // return payment;
  }

  
  
}
