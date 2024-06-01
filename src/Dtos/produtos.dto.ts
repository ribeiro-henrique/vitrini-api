import { IsNotEmpty, IsString, IsNumber, MinLength, MaxLength } from "class-validator";

export class ProdutoDto {
    
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    readonly nome: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    readonly categoria: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(150)
    readonly descricao: string;

    @IsNumber()
    readonly preco: number;
}