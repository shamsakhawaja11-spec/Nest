/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

/* eslint-disable prettier/prettier */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy,'jwt'){
    constructor(){
        super({
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration:false,
            secretOrKey:'super-secret-key'
        });
    }
    async validate(payload: any) {
        await return {
            userId:payload.sub,
            email:payload.email,
        };
    }
}