import { Module } from "@nestjs/common";
import { LoggerModule } from "./Logger/logger.Module";
import { ConfigModle } from "./common/configModule";

@Module({
    imports:[LoggerModule,ConfigModle],
    controllers:[],
    providers:[],
    exports:[],
})