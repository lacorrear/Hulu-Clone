import { methodsTMdB, URL_TMDB } from "./../config/config";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class MoviesRequestsService {
  constructor(private http: HttpClient) {}

  getMoviesByGenre(genre: string) {
    let url: string;
    // let url = URL_TMDB + methodsTMdB.getTrenging;
    switch (genre) {
      case "trendingM":
        url = URL_TMDB + methodsTMdB.getTrenging;
        break;
      case "top-rated":
        url = URL_TMDB + methodsTMdB.getTopRated;
        break;
      case "action":
        url = URL_TMDB + methodsTMdB.getActionMovies;
        break;
      case "comedy":
        url = URL_TMDB + methodsTMdB.getComedyMovies;
        break;
      case "horror":
        url = URL_TMDB + methodsTMdB.getHorrorMovies;
        break;
      case "romance":
        url = URL_TMDB + methodsTMdB.getRomanceMovies;
        break;
      case "mystery":
        url = URL_TMDB + methodsTMdB.getMysteryMovies;
        break;
      case "sci-fi":
        url = URL_TMDB + methodsTMdB.getSciFiMovies;
        break;
      case "western":
        url = URL_TMDB + methodsTMdB.getWesternMovies;
        break;
      case "animation":
        url = URL_TMDB + methodsTMdB.getAnimationMovies;
        break;
      case "tvmovie":
        url = URL_TMDB + methodsTMdB.getTvMovies;
        break;
    }

    return this.http.get(url).pipe(
      map((data: any) => {
        return data.results;
      })
    );
  }
}
