import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book.service';

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
      console.log(books.items);
    });
  }

  back() {
    this.router.navigate(['/']);
  }

  forSale(books: any[]) {
    this.books = books.filter( sale => {
      if (sale.saleInfo.saleability === 'FOR_SALE') {
        return sale;
      }
    });
    console.log(this.books);
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
    console.log(this.books);
  }
}
