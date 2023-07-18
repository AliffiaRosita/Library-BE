import { Controller } from '@nestjs/common';
import { Get, Param } from '@nestjs/common/decorators';

@Controller('books')
export class BooksController {
  @Get('/hello')
  hello() {
    return 'Hello World';
  }
  @Get('/:name')
  helloParam(@Param('name') name: string) {
    return `Hello ${name}`;
  }
}
