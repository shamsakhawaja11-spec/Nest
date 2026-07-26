import { Type } from "class-transformer";
import { IsInt, Min, IsOptional } from "class-validator";

export class PaginationDto{
    @Type(()=>Number)
    @IsInt()
    @Min(1,{message:'page should be atleast 1'})
    @IsOptional()
    page?:number;
    @Type(()=>Number)
    @IsInt()
    @Min(1,{message:'limit should ve atleast 1'})
    @IsOptional()
    limit?:number;
}
