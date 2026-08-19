import { Controller, Inject, Post } from "@nestjs/common";
import { LoggerService } from "./logger.service";

@Controller('logger')
export class LoggerControler{
    constructor(private service:LoggerService,
        @Inject('APP_LOGGER')private Service:LoggerService
    ){}

    @Post()
    logs()[
        
    ]

    
}