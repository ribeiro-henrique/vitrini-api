import { Controller, Get, Post, Body } from "@nestjs/common";
import { ProdutosService } from "./produtos.service";
import { ProdutoDto } from "src/Dtos/produtos.dto";

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}
  @Get()
  findAll() {
    return this.produtosService.getProdutos()
  }

  @Post() 
    criaProduto(@Body() produto: ProdutoDto): ProdutoDto {
      return this.produtosService.criaProduto(produto)
  }
}
  