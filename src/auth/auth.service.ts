/* eslint-disable prettier/prettier */
import { PrismaService } from 'src/database/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService{
    constructor(
        private readonly prisma:PrismaService,
        private readonly jwtService:JwtService
        
    ){}

    async register(dto:RegisterDto){
        const user=await this.prisma.user.findUnique({where:{email:dto.email}})
        if(user!=null){
            throw new ConflictException('User with this email already exists');
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
    async validateUser(email:string,password:string){
        const user=await this.prisma.user.findUnique({where:{email:email}});
        if(!user){
            throw new UnauthorizedException('Incorrect loin credentials');
        }
        const isPasswordValid=await bcrypt.compare(password,user.password);
        if(!isPasswordValid){
            throw new UnauthorizedException('incorrect login credentials');
        }
        return user;
    }
    async login(dto:LoginDto){
        const user=await this.validateUser(dto.email,dto.password);
        const payload={
            sub:user.id,
            email:user.email
        };
        const accessToken=this.jwtService.sign(payload);
        return {accessToken};
    }
}