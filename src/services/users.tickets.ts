
import { AppDataSource , DataSource } from "../_datasource";
//import { CreateArticleDto } from "../dto/create-article.dto"
import { Res, Post, Controller, Get, Body , Params } from '@decorators/express';
import { Response ,Request} from "express"
import { supTicket ,User } from "../entity/";


export class UserTicketService {

  private  datasource:DataSource=AppDataSource
  async all(id:string):Promise<supTicket|void>
  {
    
    let id=Number(userid)
    let user=await this.datasource.manager.findOneOrFail(User,{where:{
            id:id
           },
           relations:{
            tickets:true
           }
            })
    let tickets=user.tickets
    return tickets
  }
  
  async create(userid:string):Promise<object|void>{
    
    
    let id=Number(userid)
    let supticket=new supTicket()
    let user:User;
    let ticket:supTicket;
    supticket.type="inquiry"
    supticket.subject="Greet"
    supticket.description="How are you?"
    user=await this.datasource.manager.findOneByOrFail(User,{id:id})
    user.tickets.push(supticket)
    await this.datasource.manager.save(User,user)
    return
    
  }
  
}
