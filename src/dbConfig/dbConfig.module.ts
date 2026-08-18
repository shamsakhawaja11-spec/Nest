import { Module } from "@nestjs/common";
import { DBConfigService } from "./dbConfig.service";
import { DBConfigController } from "./dbConfig.controller";
export const dbConfig={
    host: 'localhost',
    port: 5432,
    database: 'crm',
}
@Module({
    imports:[],
    controllers:[DBConfigController],
    providers:[
        {
            provide:"DB_CONFIG",
            useValue:dbConfig,
        },
        {
            provide:"DATABASE",
            
            useFactory:(dbconfig:typeof dbConfig)=>{
                return {
                    connectionString:`postgresql://${dbconfig.host}:${dbconfig.port}/${dbconfig.database}`
                }
            },
            inject:["DB_CONFIG"],
        },
        DBConfigService,
    ],
    exports:[]
})
export class ConfigModule{}