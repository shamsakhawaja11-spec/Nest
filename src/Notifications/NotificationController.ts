import { Controller, Get, Query } from "@nestjs/common";
import { NotificationService } from "./notificationService";

@Controller('notifications')
export class NotificationController{
    constructor(private service:NotificationService){}
    @Get('test/email')
    async sendEmail(@Query('msg')msg:string){
       return await this.service.sendEmail(msg);
    }
    @Get('test/sms')
    async sendSMS(@Query('msg')msg:string){
        return await this.service.sendSMS(msg);
    }
}