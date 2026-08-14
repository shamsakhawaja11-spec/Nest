import { Inject, Injectable } from "@nestjs/common";
import { EmailNotificationService } from "./EmailNotificationService";
import { SMSNotificationService } from "./SMSNotificationService";
@Injectable()
export class NotificationService{
    constructor(@Inject('EMAIL_SERVICE')private emailService:EmailNotificationService,
        @Inject('SMS_SERVICE')private smsService:SMSNotificationService){
    }
    sendSMS(message:string) {
        return this.smsService.send(message);
    }
    sendEmail(message:string){
        return this.emailService.send(message);
    }

}