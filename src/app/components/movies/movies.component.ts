import { ActivatedRoute, Router } from "@angular/router";
import { MoviesRequestsService } from "./../../services/movies-requests.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.css"],
})
export class MoviesComponent implements OnInit {
  movies = [];
  genre: string = "trendingM";
  // ... your class variables here
  navigationSubscription;

  constructor(
    private _moviesService: MoviesRequestsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.genre = this.activatedRoute.snapshot.params.genre;
    this.activatedRoute.params.subscribe((data: any) => {
      this.genre = data.genre;
      this.getMovies(this.genre);
    });
  }

  getMovies(genre: string) {
    this._moviesService.getMoviesByGenre(genre).subscribe((data) => {
      this.movies = data;
    });
  }
}
