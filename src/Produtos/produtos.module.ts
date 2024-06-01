import { Module } from "@nestjs/common";
import { ProdutosController } from "./produtos.controller";
import { ProdutosService } from "./produtos.service";

@Module({
  imports: [],
  providers: [ProdutosService],
  controllers: [ProdutosController],
})
export class ProdutosModule {}