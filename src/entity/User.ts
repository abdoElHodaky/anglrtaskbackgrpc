import { type } from "os"
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, TableInheritance ,ChildEntity} from "typeorm"
import { Email } from "./Email"
import { supTicket,Article,Attachment,Address,Verification } from "./"

@Entity()
@TableInheritance({column:{type:"varchar",name:"type"}})
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

    @Column({default:2980865431210,select:false})
    IDcardNumber: number

    @Column({type: "varchar",nullable:true })
    username: string;

    @Column({type: "varchar", nullable: true,select:false})
    passwordHash: string

    @Column(()=>Email)
    email:Email
    
    @Column(()=>Address)
    address:Address
    
    @OneToMany(()=>supTicket,ticket=>ticket.user) tickets:supTicket[]
    @OneToMany(()=>Verification,verification=>verification.user) verifications:Verification[];
    @OneToMany(()=>Attachment,media=>media.uploader) media:Attachment[]
}


@ChildEntity()
export class Author extends User {
    
    @Column({default:"author"})
    type:string

    @OneToMany(()=>Article,article=>article.author) articles:Article[];

}
