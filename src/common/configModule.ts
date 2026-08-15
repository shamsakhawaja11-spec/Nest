import { Module } from "@nestjs/common";
import { ConfigController } from "./configController";
import { ConfigDemoService } from "./ConfigDemoService";
export const APP_CONFIG={
    appName: 'My CRM',
    environment: 'development',
    maxUsers: 100
}
@Module({
    imports:[],
    controllers:[ConfigController],
    providers:[ConfigDemoService],
    exports:[]
})
export class ConfigModle{}