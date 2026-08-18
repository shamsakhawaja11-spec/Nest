import { Controller, Get } from "@nestjs/common";
import { DBConfigService } from "./dbConfig.service";

@Controller('config')
export class DBConfigController{
    constructor(private service:DBConfigService){}
    @Get()
    async getdb(){
        return this.service.getDatabse();
    }
}