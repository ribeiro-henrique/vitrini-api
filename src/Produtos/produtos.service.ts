import { Injectable } from "@nestjs/common";
import { ProdutoDto } from "src/Dtos/produtos.dto";

@Injectable()
export class ProdutosService {
  getProdutos() {
    return 'Todos os produtos'
  }

  criaProduto(produto: ProdutoDto) {
    return produto;
  }
}