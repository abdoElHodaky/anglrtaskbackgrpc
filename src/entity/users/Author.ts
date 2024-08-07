import { type } from "os"
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, TableInheritance ,ChildEntity,CreateDateColumn, UpdateDateColumn  } from "typeorm"
import { User} from "./";
import {Article} from "../"

@ChildEntity()
export class Author extends User {
    
    @Column({default:"Author"})
    type:string

    @OneToMany(()=>Article,article=>article.author) articles:Article[];

}
