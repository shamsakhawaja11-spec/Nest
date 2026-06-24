/* eslint-disable prettier/prettier */
import { PrismaService } from 'src/database/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { ConflictException, ForbiddenException, Injectable } from '@nestjs/common';
import bcrypt from 'bcrypt';
@Injectable()
export class AuthService{
    constructor(private readonly prisma:PrismaService){}

    async register(dto:RegisterDto){
        const user=await this.prisma.user.findUnique({where:{email:dto.email}})
        if(user!=null){
            throw new ConflictException('Not allowed');
        }
        const hashedPassword=await bcrypt.hash(dto.password,10);
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        const createdUser=await this.prisma.user.create({
            data:{
                name:dto.name,
                email:dto.email,
                password:hashedPassword,
            },
        });
        return {
           id:createdUser.id,
           email:createdUser.email,
           name:createdUser.name,
           createdAt:createdUser.createdAt,
        };
    }
}