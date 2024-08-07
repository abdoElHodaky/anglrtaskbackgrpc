import { userInfo } from "os";
import { Column, Entity, ManyToOne,OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { User } from "../users/";
import { VerifyCode} from "./VerifyCode";

export enum VerifyType {
    EMAIL="email",
    PHONE="phone",
    PRODUCT_TYPE_ENTITY="Product",
    USER_ACCOUNT="User",
}
@Entity()
export class Verification {
    @PrimaryGeneratedColumn("increment")
    id:number;
    
    @Column({nullable:true})
    type:VerifyType;
    
    @OneToMany(()=>VerifyCode,code=>code.verification) codes:VerifyCode[];
    
    @ManyToOne(()=>User,user=>user.verifications) user:User;
}
