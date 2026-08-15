import { Inject, Injectable } from "@nestjs/common";
import { APP_CONFIG } from "./configModule";

Injectable()
export class ConfigDemoService{
    constructor(@Inject('APP_CONFIG')private appConfig:typeof APP_CONFIG){}
    async getConfig(){
        return this.appConfig;
    }
}