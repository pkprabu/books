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
  constructor(private route: ActivatedRoute, private bookService: BookService, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(res => {
      this.searchQuery = res.get('searchQuery').split('-').join(' ');
    });

    this.bookService.getSingle(this.searchQuery).subscribe((books: any) => {
      this.books = books;
      console.log(books);
    });
  }

  back() {
    this.router.navigate(['/']);
  }

}
