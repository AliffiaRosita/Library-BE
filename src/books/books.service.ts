import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { NotFoundException } from '@nestjs/common/exceptions';
import { BookDto } from './dto/book.dto';
@Injectable()
export class BooksService {
  private books: any[] = [];

  getAllBook(): any[] {
    return this.books;
  }
  getBook(id: string) {
    const bookIndex = this.findBookById(id);
    return this.books[bookIndex];
  }
  createBook(createBookDto: BookDto) {
    const { title, author, category, year } = createBookDto
    this.books.push({
      id: uuidv4(),
      title,
      author,
      category,
      year,
    });
  }
  updateBook(id: string, book: BookDto) {
    const { title, author, category, year } = book;
    const bookIndex = this.findBookById(id);
    this.books[bookIndex].title = title;
    this.books[bookIndex].author = author;
    this.books[bookIndex].category = category;
    this.books[bookIndex].year = year;
  }

  deleteBook(id: string) {
    const bookIndex = this.findBookById(id);
    return this.books.splice(bookIndex, 1);
  }

  findBookById(id: string) {
    const book = this.books.findIndex((book) => book.id === id);
    if (book === -1) {
      throw new NotFoundException(`Book with id${id} not found`);
    }
    return book;
  }
  findBook(title: string) {
    const books = this.books.filter((book) => {
      let match = true;
      if (title && book.title != title) {
        match = false;
      }
      return match;
    });
    return books;
  }
}
