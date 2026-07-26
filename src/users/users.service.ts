import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { PaginationDto } from "./dto/dto.pagination";
import { User } from "@prisma/client";

@Injectable()
export class UsersService{
    constructor(private prisma:PrismaService){}

    async getAll(dto:PaginationDto){
        const page=dto.page??1;
        const limit=dto.limit??10;
        const skip=(page-1)*limit;
        const take=limit;

        const [users,totalUsers]=await Promise.all([
            this.prisma.user.findMany({skip,take,orderBy:{createdAt:"desc"}}),
            this.prisma.user.count(),
        ]);
        const totalPages=Math.ceil(totalUsers/limit);
        let hasNextPage:boolean=totalPages>page ,hasPreviousPage:boolean=page>1;
        return {
            "data":users,
            "meta":{
                page,
                limit,
                totalUsers,
                totalPages,
                hasNextPage,
                hasPreviousPage

            }
        }
    }
}
