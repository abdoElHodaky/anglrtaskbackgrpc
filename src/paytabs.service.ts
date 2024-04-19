import paytabs from "paytabs_pt2";
import { Client } from "./entity/";
import { Payment } from "./entity/";
export class PayTabService{
  async values(obj){
      let arr=[]
      for(var i in obj){
        arr.push(obj[i])
      }
    return arr;
   }
   async config(profile:string,serverk:string,region:string):Promise<any>
    {
      await paytabs.config(profile,serverk,region)
    }
   async createPage(payment:Payment,urls:any):Promise<any>{
    let res;
    let client=payment.client
    let shippinginfo=await payment.contract.employee.toArrayP()
    let clientinfo=await client.toArrayP()
    let paymentinfo=await payment.toArrayP()
    let _urls=[urls.callback,urls.return]
    await paytabs.createPaymentPage(['all'],['sale','ecom'],paymentinfo,
    clientinfo,shippinginfo,
    "AR",_urls,(result)=>{
       res=result
     })
     return  res.redirect_url
     
   }
  async payCallback(result:any):Promise<any> {
    let {respCode,respMessage,transRef,respStatus,cart} =result
    return {
      trans:transRef,
      status:respStatus,
      code:respCode,
      message:respMessage,
      paymentId:cart.cart_id
    }
  }
  async payReturn(result:any):Promise<any>{
    let {respCode,respMessage,transRef,respStatus,cart} =result
    return {
      trans:transRef,
      status:respStatus,
      code:respCode,
      message:respMessage,
      paymentId:cart.cart_id
    }
  }
  async payVerify(transR:string){
    let valid=false;
    let res;
    paytabs.validatePayment(transR,result=>{
      if (result['response_code:'] === 400)
    {
        valid=false
    }
    else
    {
        valid=true;
    }
         res=result
    });
    return {transRef:transR,code:res['response_code:'],valid:valid}
  }
  
}
