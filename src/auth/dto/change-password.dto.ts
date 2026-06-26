import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

/* eslint-disable prettier/prettier */
export class ChangePasswordDto{
    @IsString()
    @IsNotEmpty()
    currentPassword!:string;
    @IsString()
    @IsNotEmpty()
    @MinLength(8,{message:'passowrd must be greater then 8'})
    @MaxLength(50,{message:'password must be less then 50'})
    newPassword!:string;
}