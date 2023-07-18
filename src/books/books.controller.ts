import { Controller, ValidationPipe } from '@nestjs/common';
import { Body, Delete, Get, Param, Post, Put, Query, UsePipes } from '@nestjs/common/decorators';
import { BooksService } from './books.service';
import { BookDto } from './dto/book.dto';
import { ApiTags } from '@nestjs/swagger/dist';

@Controller('books')
// @ApiTags('Books')
export class BooksController {
  constructor(private booksService: BooksService) {
    this.booksService = booksService;
  }

  // @Get('/hello')
  // hello() {
  //   return 'Hello World';
  // }
  // @Get('/:name')
  // helloParam(@Param('name') name: string) {
  //   return `Hello ${name}`;
  // }
  // // take all data
  // @Post()
  // createAllBook(@Body() payload: any) {
  //   console.log(payload);
  // }
  // @Post('data')
  // createBook(@Body('name') name: string) {
  //   console.log(name);
  // }

  @Get()
  getAllBooks() {
    return this.booksService.getAllBook();
  }
  @Get('/find')
  findBook(@Query('title') title: string) {
    return this.booksService.findBook(title);
  }
  @Get('/:id')
  getBook(@Param('id') id: string) {
    return this.booksService.getBook(id);
  }
  @Post()
  // @UsePipes(ValidationPipe)
  createBook(@Body() payload: BookDto) {
    return this.booksService.createBook(payload);
  }
  @Put('/:id')
  // @UsePipes(ValidationPipe)
  updateBook(@Param('id') id: string, @Body() payload: BookDto) {
    return this.booksService.updateBook(id, payload);
  }
  @Delete('/:id')
  deleteBook(@Param('id') id: string) {
    return this.booksService.deleteBook(id);
  }
}
