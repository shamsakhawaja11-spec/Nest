/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
import { PrismaService } from 'src/database/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { UpdateDto } from './dto/update.dto';
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
    async getMe(id:string){
        const user=await this.prisma.user.findUnique({where:{id:id}});
        if(!user){
            throw new NotFoundException('User not found');
        }
        return {
            id:user.id,
            name:user.name,
            email:user.email,
            createdAt:user.createdAt,
        };
    }
    async UpdateProfile(dto:UpdateDto,id:string){
        const user=await this.prisma.user.findUnique({where:{id:id}});
        if(!user){
            throw new NotFoundException('user not found');
        }
        // if(dto.email)
        // if(dto.email!==undefined)
        if(dto.email!=null){
            const isEmailValid=await this.prisma.user.findUnique({where:{email:dto.email}});
            if(isEmailValid?.id!=id){
                throw new ConflictException('email already exists');
            }
        }
        const updatedUser=await this.prisma.user.update({where:{id:id},data:{email:dto.email,name:dto.name}})
        return {
            id:updatedUser.id,
            email:updatedUser.email,
            name:updatedUser.name,
            createdAt:updatedUser.createdAt,
            updatedAt:updatedUser.updatedAt
        }

    }
}