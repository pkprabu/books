import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { BookModel } from '../models/book-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private books = [];
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.bookService.get().subscribe( (books: any) => {
      this.books = books;
      console.log(books);
    });
  }

  getSingleBook(keyWord) {
    console.log(keyWord);
    const val = keyWord.value.bookName;
    this.bookService.getSingle(val).subscribe((books: any) => {
      this.books = books;
      console.log(books);
    });
  }

  combineSearchQuery(query: string) {
    return query.toLowerCase().split(' ').join('-');
  }
}
