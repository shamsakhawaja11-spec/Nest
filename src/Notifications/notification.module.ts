import { Module } from "@nestjs/common";
import { NotificationController } from "./NotificationController";
import { EmailNotificationService } from "./EmailNotificationService";
import { NotificationService } from "./notificationService";
import { SMSNotificationService } from "./SMSNotificationService";


@Module({
    imports:[],
    controllers:[NotificationController],
    providers:[{
        provide:'EMAIL_SERVICE',
        useClass:EmailNotificationService,
    },
    {
        provide:'SMS_SERVICE',
        useClass:SMSNotificationService
    },
    NotificationService,
    ],
    exports:[]
})export class NotificationModule{}