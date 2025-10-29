import { IsEmail, IsNotEmpty } from "class-validator";
export class UpsertCustomerDTO{
        @IsEmail()
        @IsNotEmpty()
        email: string;

}