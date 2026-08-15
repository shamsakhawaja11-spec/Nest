import { Controller, Get } from "@nestjs/common";
import { ConfigDemoService } from "./ConfigDemoService";

@Controller('config')
export class ConfigController{
    constructor(private service:ConfigDemoService){}
    @Get()
    async getConfig(){
        return this.service.getConfig();
    }
}