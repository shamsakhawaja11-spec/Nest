/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";

export class UpdateDto{
    @IsString()
    @IsOptional()
    @MaxLength(50)
    @IsNotEmpty()
    name?:string;
    @IsEmail()
    @IsOptional()
    email?:string;
}