import { AccountComponent } from "./components/pages/account/account.component";
import { HomeComponent } from "./components/pages/home/home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "/account", pathMatch: "full" },
  { path: "home/:genre", component: HomeComponent },
  { path: "account", component: AccountComponent },
  { path: "**", component: AccountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
