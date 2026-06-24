import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

/* eslint-disable prettier/prettier */
export class RegisterDto{
  @IsString()
  @IsNotEmpty()
  @MinLength(3,{message:''})
  @MaxLength(50)
  name!: string;
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email!:string;
  @MinLength(8,{message:'Min Length must be greater then 8'})
  @MaxLength(30,{message:'Max length must be 30'})
  @IsString()
  password!:string;
}