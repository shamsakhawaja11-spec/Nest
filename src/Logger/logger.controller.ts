import { Controller, Get, Inject, Post, Query } from "@nestjs/common";
import { LoggerService } from "./logger.service";

@Controller('logger')
export class LoggerController{
    constructor(private service:LoggerService,
        @Inject('APP_LOGGER')private Service:LoggerService
    ){}

    @Post()
    logs(@Query('message')message:string){
        this.service.log(message);
    }
    @Get()
    getLogs():string[]{
        return this.Service.getLogs();
    }

    ji

    
}