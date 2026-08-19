import { Module } from "@nestjs/common";
import { LoggerService } from "./logger.service";
import { LoggerControler } from "./logger.controller";

@Module({
    imports:[],
    controllers:[LoggerControler],
    providers:[
        LoggerService,
        {
            provide:'APP_LOGGER',
            useExisting:LoggerService,
        },
    ],
    exports:[],
})  
export class LoggerModule{}