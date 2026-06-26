/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable prettier/prettier */
import { Body, Controller, Post, Request, UseGuards,Get, Patch } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { RegisterDto } from "./dto/register.dto";
import { LoginDto } from "./dto/login.dto";
import { AuthGuard } from "@nestjs/passport";
import { UpdateDto } from "./dto/update.dto";
@Controller('auth')
export class AuthController{
    constructor(private readonly authService:AuthService){}
    @Post('register')
    registerUser(@Body() dto:RegisterDto ){
        return this.authService.register(dto);
    }
    @Post('login')
    loginUser(@Body()dto:LoginDto){
        return this.authService.login(dto);
    }
    @Get('me')
    @UseGuards(AuthGuard('jwt'))
    getMe(@Request()req:any){
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        return this.authService.getMe(req.user.userId);
    }
    @Patch('me')
    update(@Body()dto:Partial<UpdateDto>,@Request()req:any){
        return this.authService.UpdateProfile(dto,req.user.userId);
    }
}