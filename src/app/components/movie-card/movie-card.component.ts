import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-movie-card",
  templateUrl: "./movie-card.component.html",
  styleUrls: ["./movie-card.component.css"],
})
export class MovieCardComponent implements OnInit {
  @Input("movie") movie: any;
  pictureURL: string = "https://image.tmdb.org/t/p/w500";

  constructor() {}

  ngOnInit(): void {}
}
