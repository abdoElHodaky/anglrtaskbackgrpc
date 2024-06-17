import { Entity ,Column,PrimaryGeneratedColumn,OneToOne, OneToMany, JoinColumn,
        ManyToOne, ChildEntity, CreateDateColumn, UpdateDateColumn  } from "typeorm"
import {Subscription} from "../Subscription";
import {Product} from "./Product";
@ChildEntity()
export class SubscribedProduct extends Product {
        
    @ManyToOne(()=>Subscription,subscrip=>subscrip.products) 
   // @JoinColumn({name:"id", referencedColumnName:"subscribedPId" })
    subscrip?:Subscription;
   
}
