import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { MatPaginator, MatSort, MatTableDataSource, MatDialog} from '@angular/material';
import { MovieDetailsDialogComponent } from '../movie-details-dialog/movie-details-dialog.component';

export interface PeriodicElement {
  movie_title: string;
  director_name: string;
  actor_1_name: string;
  actor_2_name: string;
  genres: string;
  language: string;
  country: string;
  content_rating: string;
  budget: string;
  title_year: string;
  plot_keywords: string;
  movie_imdb_link: string;
};
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['movie_title', 'director_name', 'actor_1_name', 'actor_2_name', 'genres', 'language'];
  movieData: PeriodicElement[];
  dataSource = new MatTableDataSource(this.movieData);
  constructor(private httpClient: HttpClient, public dialog: MatDialog) {
    this.httpClient.get('/posts/movies').subscribe(data => {
      this.mapMovieData(data);
    });
  }
  ngOnInit() {
  }

  mapMovieData(data) {
    this.movieData = data;
    this.dataSource = new MatTableDataSource(this.movieData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(movieDetails){
    this.dialog.open(MovieDetailsDialogComponent, {
      data: movieDetails
    });
  }
}
