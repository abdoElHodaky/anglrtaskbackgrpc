import { Entity,Column,OneToMany,PrimaryGeneratedColumn,JoinColumn,
        CreateDateColumn, UpdateDateColumn,ChildEntity } from "typeorm"
import { ProductCategory } from "../";
@Entity()
export class Category
{
   @PrimaryGeneratedColumn("increment")
   id:number

   @Column("varchar")
   name:string

   @Column("varchar")
   description:string

   @CreateDateColumn()
   createdAt:Date

   @UpdateDateColumn()
   updatedAt:Date

   @OneToMany(()=>ProductCategory,category=>category.category)
   @JoinColumn([
   // { name: "ProductId", referencedColumnName: "id" },
    { name: "id", referencedColumnName: "categoryId" }
    ])
    categories:ProductCategory[]
}
