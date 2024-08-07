import { _Data } from "./datasource";
import { Password,User } from "../entity/"
import { UserService } from "./users/"

//@Injectable()
export class PasswordService extends _Data {
  private userS:any=new UserService()
  constructor (){
      super()
  }

  async all():Promise<Password[]>
  {
    //console.log(this._source)
    return await this.em.find(Password,{
      relations:{
        user:true
      },
      cache:true
    })
  }

 async create(passwordto:{userId:number,passphase:string}):Promise<Password|void>{
     
   const {userId,passphase}=passwordto
    let _password=this.datasource.manager.create(Password,{
       passphase:passphase
    })
    let user=this.userS.id(`${userId}`)
    if(user instanceof User)  {
      _password.user=user
      await this.em.save(Password,_password)
    }
     console.log("DataS ",_password)
    
    return _password
   
 }
}
