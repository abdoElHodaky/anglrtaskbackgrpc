import "reflect-metadata";
import { sendUnaryData, ServerUnaryCall, status, UntypedHandleCall ,handleUnaryCall} from "@grpc/grpc-js";
import  {_User, _Article,_Ticket} from "../protos/dist/";
import  { Author } from "../entity/";
//import { Service } from "../service.decorator"
import {AuthorService} from "./";
export class AuthorGrpcService  {
  
 // @Service("Author")
  static service:any=new AuthorService()
  //public [name: string]:UntypedHandleCall;
  public SrvImpl: _User.UserServiceServer = {
   async all (call: ServerUnaryCall<_User.GetAllUserReq,_User.GetAllUserRes>,
    callback: sendUnaryData<_User.GetAllUserRes>
 ){
     let base:_User.User=_User.createBaseUser()
   
     try{
     let authors=await AuthorGrpcService.service.all()
       console.log(authors)
    if(authors instanceof Array){ 
     
     let _authors=authors.map(_User.User.fromJSON)
      
      _authors.forEach((author:_User.User,inx:number)=>{
        let {id,articles}=author
        let _articles=authors[inx].articles
        
        articles.sort((a,b)=>b.id-a.id)
        if(articles.length!=0){ 
          articles.forEach((a,inx)=>{
            a.userId=id
         })
          
        }
        
      })
      const res:_User.GetAllUserRes={
          users:_authors,
          error:{
            Message:"",name:"",type:""
          }
         }
         callback(null,res)
     }
     else{
      callback(null, {users:[],error:{
            Message:"No Records matching request",type:"NotFoundError",name:""
          }});
     }
    }
     catch(err){
       callback({ code: status.INTERNAL }, {users:[],error:{
            Message:"No Records matching request",type:"NotFoundError",name:""
          }});
       console.error(err);
     }
      }
    , async create (
    call: ServerUnaryCall<_User.CreateUserReq,_User.CreateUserRes>,
    callback: sendUnaryData<_User.CreateUserRes>
  ){
       let {user}=call.request;
       let res:_User.CreateUserRes
       let base:_User.User=_User.createBaseUser()
       try{
       let author=await AuthorGrpcService.service.create(user);
       if(author instanceof Author){
         let _author=_User.User.fromJSON(author)
         res={
         user:_author/*,error:{
          Message:"",type:"",name:""
         }*/
        }
         callback({code:status.OK},res)}
       
       else{
         res={user: base
         /*,error:{
            Message:"No Records matching request",type:"NotFoundError",name:""
          }*/}
         callback({ code: status.NOT_FOUND }, {user:base});
       }
       }catch(err){
         res={user: base
         /*,error:{
        Message:"Some Internal Error",type:"InternalError",name:""
         }  */}
         callback({ code: status.INTERNAL },{user:base} );
       }
     },
    async id(
      call: ServerUnaryCall<_User.GetUserIdReq,_User.GetUserIdRes>,
    callback: sendUnaryData<_User.GetUserIdRes>
    ){
      let {userId}=call.request
      let res:_User.GetUserIdRes
      let base:_User.User=_User.createBaseUser()

      try{
      let author=await AuthorGrpcService.service.id(userId)
      if (author instanceof Author){
      let _author=_User.User.fromJSON(author)
      res={
        user:_author,error:{
         Message:"",type:"",name:""
        }
      }
      callback({code:status.OK},res)}
      else{
        res={user: base
        ,error:{
            Message:"No Records matching request",type:"NotFoundError",name:""
          }}
        callback({ code: status.NOT_FOUND }, {user: base
      ,error:{
        Message:"Some Internal Error",type:"InternalError",name:""
       }  });
      }
           }
     catch(err){
      res={user: base
      ,error:{
        Message:"Some Internal Error",type:"InternalError",name:""
       }  }
      callback({ code: status.INTERNAL }, {user: base
      ,error:{
        Message:"Some Internal Error",type:"InternalError",name:""
       }  });
     console.error(err);    
 
     }   
 
    }
  
  
  }

  
    

 }


//console.log(Reflect.getMetadata("service",AuthorGrpcService ))
