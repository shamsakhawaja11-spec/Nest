import { Module } from "@nestjs/common";
import { LoggerService } from "./logger.service";
import { LoggerController } from "./logger.controller";

@Module({
    imports:[],
    controllers:[LoggerController],
    providers:[
        LoggerService,
        {
            provide:'DB_CONFIG',
            useExisting:LoggerService,
        },
    ],
    exports:[LoggerService],
})  
export class LoggerModule{}