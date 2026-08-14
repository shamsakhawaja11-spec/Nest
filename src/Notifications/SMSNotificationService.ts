import { Injectable } from "@nestjs/common";

@Injectable()
export class SMSNotificationService{
    send(message:string){
        return `Message sent:${message}`;
    }
}