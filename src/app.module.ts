import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { QuotesService } from './quotes/quotes.service';
import { QuotesController } from './quotes/quotes.controller';

@Module({
  imports: [HttpModule],
  controllers: [AppController, QuotesController],
  providers: [AppService, QuotesService],
})
export class AppModule {}
