import { Module } from '@nestjs/common';
import { ProdutosModule } from './Produtos/produtos.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    ProdutosModule,
    MongooseModule.forRoot('mongodb://localhost/produtos')
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}


//é o app module o coração da app
//é aqui onde se encontram todos os imports da app