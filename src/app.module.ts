import { Module } from '@nestjs/common';
import { ProdutosModule } from './Produtos/produtos.module';

@Module({
  imports: [ProdutosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
