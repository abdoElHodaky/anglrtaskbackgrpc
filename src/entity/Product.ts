import { Entity ,Column,PrimaryGeneratedColumn, OneToMany, ChildEntity} from "typeorm"
import { User,Attachment} from "./";
import { AttachedType } from "./Attached";
@Entity()
//@ChildEntity()
export class Product {
    @PrimaryGeneratedColumn("increment")
    id:number 

    @Column("simple-json")
    specs:any
    
    @OneToMany(()=>Attachment,attachment=>attachment.attachedProduct) product_attachments:Attachment[];
    
}
