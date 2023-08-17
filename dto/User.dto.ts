import {Expose} from "class-transformer"
import { IsDefined, MinLength, minLength } from "class-validator";


export class UserDto {
    @Expose()
    @IsDefined()
    "username": Number;

    @Expose()
    @IsDefined()
    @MinLength(10, {message: "Minimum digits req"})
    "password": string;

    @Expose()
    @IsDefined()
    "email": string;
}