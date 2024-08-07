import { _Data } from "./datasource";
import { Purshase ,PurshaseItem ,User,Product} from "../entity/"
import { Error , NotFoundError } from "common-errors";
import { isNumeric } from "../helpers";
import { CreatePurshaseDto } from "../dto/"
import { UserService} from "./";
//@Injectable()
export class PurshaseService extends _Data {
  private userS=new UserService()
  constructor (){
      super()
  }

  async all(purshaseId?:number,userId?:number):Promise<Purshase[]|Error>
  {
  
    const purchases= await this.em.find(Purshase,{
      where:[
        (userId!=undefined)?{user:{id:userId}}:{},
        (purshaseId!=undefined)?{id:purshaseId}:{},
        ],
      relations:{
        user:true,
        items:true,
      },
      cache:true
    })
    return (purchases.length!=0)? purchases : new NotFoundError("Purshase")
  }
  
async create(dto:CreatePurshaseDto ):Promise<Purshase|void>{
   const purshase=new Purshase()
   const {userId,itemsIds}=dto
   itemsIds.forEach(async (id:number,inx:number)=>{
     const item=new PurshaseItem()
     let product:Product=await this.em.findOneOrFail(Product,{
       where:{id:id}
     })
     item.product=product
     item.purshase=purshase
     purshase.items.push(item)
  })
  
   let user=await this.userS.id(userId)
   if(user instanceof User) purshase.user=user
   return await this.em.save(Purshase,purshase)
 } 

  
}
