import { Injectable } from "@nestjs/common";

@Injectable()
export class EmailNotificationService{
    send(message:string){
        return `Email sent:${message}`;
    }
}