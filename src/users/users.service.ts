import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    //repo is type Repository with a generic type of User, repo is going to be a instance of typeORM repository that deal with instance of Users
    //o @InjectRepository(User) é usado pra auxiliar o Nest a lidar o generics do repository
    //Isso aparece sempre, CTRL + C CTRL + V
    constructor(@InjectRepository(User) private repo: Repository<User>){

    }
    create(email: string, password: string){
        const user = this.repo.create({email, password})
        return this.repo.save(user)
        }
}
