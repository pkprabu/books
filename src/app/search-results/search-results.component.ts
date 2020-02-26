import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book.service';
import { AppError } from 'common/app-specific-errors/app-error';
import { NotFound } from 'common/app-specific-errors/not-found';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  public searchQuery;
  public noImage = 'https://dummyimage.com/200X200/cccccc/000000&text=No+Image';
  public books: any = [];
  public booksC = [...this.books];
  constructor(private route: ActivatedRoute, private bookService: BookService, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(res => {
      this.searchQuery = res.get('searchQuery').split('-').join(' ');
    });

    this.bookService.getSingle(this.searchQuery).subscribe((books: any) => {
      this.books = books.items;
      // console.log(this.books);
    }, (error: AppError) => {
      if (error instanceof NotFound) {
        console.log(error);
      } else { throw error; }
    });
  }

  back() {
    this.router.navigate(['/']);
  }

  /* forSale() {
    this.bookService.get().subscribe((books: any) => {
      const pk = books.items.filter(res => {
        return res.saleInfo.saleability === 'FOR_SALE';
      });
      this.books = pk;
      console.log(pk);
    });
  }
  free(books: any[]) {
    this.books = books.filter( freeBooks => {
      if (freeBooks.saleInfo.saleability === 'FREE') {
        return freeBooks;
      }
    });
    console.log(this.books);
  }
  readOnly(books: any[]) {
    this.books = books.filter( notForSale => {
      if (notForSale.saleInfo.saleability === 'NOT_FOR_SALE') {
        return notForSale;
      }
    });
  } */
}
