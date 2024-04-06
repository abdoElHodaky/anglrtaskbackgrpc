
import { Article } from "../entity/Article"
import { Author } from "../entity/Author"
import { AppDataSource } from "../_datasource";
import { CreateArticleDto } from "../dto/create-article.dto"
import { Res, Post, Controller, Get } from '@decorators/express';

@Controller('articles')
export class ArticleController {

  constructor() {}

  @Get('')
  async all(@Response() res:Res) {
    let articles=await AppDataSource.manager.find(Article)
    res.json(articles)
  }

  @Post("create")
  async create(@Body() createArticleDto:CreateArticleDto, @Res() res:Res){
    let {article,useris}=createArticleDto
    article=<Article>{...article}
    let author:Author=await AppDataSource.manager.findOneByOrFail(Author,{id:userid})
    article.author=author
    author.articles.push(article)
    await article.save()
    res.json({message:"created successfully"})
    /*AppDataSource.manager.findOneByOrFail(Author,{id:userid}).then(d=>{
        author=d;
        return author
    }).then(a=>{
        article.author=a;
        a.articles=[]
        a.articles.push(article)
        return article
    }).then(a=>{
        AppDataSource.manager.save(Article,a)
        //AppDataSource.manager.save(a.user)
        res.json({message:"created successfully"})
    })*/
  }
}