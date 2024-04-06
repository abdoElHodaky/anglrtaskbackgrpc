import { User } from "../entity/User"
import { AppDataSource } from "../_datasource";
//import { CreateArticleDto } from "../dto/create-article.dto"
import { Res, Post, Controller, Get, Body } from '@decorators/express';
import { Response ,Request} from "express"
import { supTicket } from "../entity/supTicket";

@Controller('/users/:userix/tickets/')
export class userTicketController extends supTicketController {

  @Get("")
  async all(@Params("userid") userid:string, @Res() res:Response):Promise<supTicket|void>
  {
    let id=Number(userid)
    let user=await AppDataSource.manager.findOneOrFail(User,{where:{
            id:id
           },
           relations:{
            tickets:true
           }
            })
    let tickets=user.tickets
    res.json(tickets)
  }
}