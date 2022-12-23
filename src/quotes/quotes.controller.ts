import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { QuotesService } from './quotes.service';

@Controller('quotes')
export class QuotesController {
    constructor(private quotesService: QuotesService){
    }
    @Post()
    postQuotes(@Body() body: any) {
        return this.quotesService.getQuotes(body);
    }
}
