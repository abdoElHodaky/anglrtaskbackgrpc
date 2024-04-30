import { credentials } from "@grpc/grpc-js";
import {_Ticket } from "../protos/dist/";
import { Res,  Controller , Get } from "@decorators/express";
import { Response  } from "express";

const address = "localhost:3030";

@Controller("/grpc/suptickets")
export class GrpcSupTicketController {
  private client =new _Ticket.TicketServiceClient(
    address,
    credentials.createInsecure()
  )
  
  @Get("")
  async all(@Res() res:Response ):Promise<void>{
    const req:_Ticket.GetAllReq={  
      userId:0
    }
    this.client.all(req,(err:any,resp:_Ticket.GetAllRes)=>{
      if (err) {
      res.jsonp(err);
        console.error(err)
    } else {
       res.json(resp)
     }
    })
  }
}
