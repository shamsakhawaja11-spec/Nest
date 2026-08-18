import { Inject, Injectable } from "@nestjs/common";
import { dbConfig } from "./dbConfig.module";

@Injectable()
export class DBConfigService{
    constructor(@Inject('DATABASE')private config:typeof dbConfig){}
    async getDatabse(){
        return this.config;
    }
}