import { Injectable } from "@nestjs/common";

@Injectable()
export class LoggerService{
    private logs:string []=[];
    log(message:string){
        this.logs.push(message);
    }
    getLogs():string[]{
        return this.logs;
    }
}