import { Entity ,Column,PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn  } from "typeorm"
import { User } from "./User"

@Entity()
export class supTicket {
    
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column()
    type: string

    @Column()
    subject: string

    @Column()
    description: string

    @ManyToOne(()=>User,user=>user.tickets) user:User
    @CreateDateColumn({type:"timestamp"})
     created_at: Date;

     @UpdateDateColumn({type:"timestamp"})
     updated_at: Date;

}
