import { service } from "../services/";
import { Attachment } from "../entity/"
//import { AppDataSource } from "../_datasource";
//import { CreateArticleDto } from "../dto/create-article.dto"
import { Res, Post, Controller, Get, Body } from '@decorators/express';
import { Response ,Request} from "express"


@Controller('/attachments')
export class AttachmentController {
  @service("Attachment")
  private attachmentS:any
  
  constructor( ) {}

  @Get("")
  async all(@Res() res:Response):Promise<Attachment[]|void> {
   /* 	#swagger.tags = ['Article']
        #swagger.description = 'Endpoint to get articles' */
    let attachments=await this.attachmentS.all()
    res.json(attachments)
   }
  }
