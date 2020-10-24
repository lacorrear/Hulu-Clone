import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { Button } from "protractor";
import { filter } from "rxjs/operators";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  isActive: string = "";
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Getting url path for the Active Button
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        let url: string = event.url;
        // Substring-between-two-characters
        let path = url.substring(
          1,
          url.lastIndexOf("/") ? url.lastIndexOf("/") : url.length
        );
        // Active Button
        this.isActive = path;

        // console.log("URL :" + url);
        // console.log("PATH :" + path);
      });
  }
}
