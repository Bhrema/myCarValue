import { Entity, Column, PrimaryGeneratedColumn, AfterInsert, AfterUpdate, AfterRemove } from 'typeorm';
@Entity()
export class User {
    
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    email: string;
    @Column()
    password: string;

    @AfterInsert()
    logInsert(){
        console.log("inserted object with id ", this.id)
    }
    @AfterUpdate()
    logUpdate(){
        console.log("updated object with id ", this.id)
    }
    @AfterRemove()
    logRemove(){
        console.log("removed object with id ", this.id)
    }

}