import { IsEmail, IsNotEmpty } from "class-validator";
export class CreateEmailDTO{
        @IsEmail()
        @IsNotEmpty()
        name: string;

}