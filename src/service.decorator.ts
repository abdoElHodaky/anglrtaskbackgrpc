//import * as services from "./services/enum"
import "reflect-metadata";
//let servs=services

export function Service(servname: string): Function {
    return function (target: any, propertyKey: string, descriptor?: PropertyDescriptor) {
     /*  const originalMethod = descriptor.value;
        descriptor.value = function (...args: any[]) {
            const result = originalMethod.apply(this, args);
            return `${prefix} ${result.toUpperCase()}`;
        };
    };*/
        
    import("./services/enum").then(servs=>{
        const {services}=servs
        let keys=services.keys
        let values=services.values
       // let inx=keys.indexOf(servname)
        console.log(keys)
    }).catch(console.log)
    
   
   
  }
}
/*export function getService(target: any, propertyKey: string):any {
    let serv=Reflect.getMetadata(servkey, target, propertyKey);
    console.log(serv)
    return {}

}*/
