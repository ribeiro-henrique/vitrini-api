import { Injectable } from "@nestjs/common";

@Injectable()
export class ProdutosService {
  getProdutos() {
    return 'Todos os produtos new'
  }
}