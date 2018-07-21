import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { MaterialModuleModule } from "./material-module/material-module.module";
import { AppRoutingModule } from "./routing/app-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { BoardModule } from "./board-module";
import { StoreModule } from "./store";

@NgModule({
  declarations: [AppComponent, DashboardComponent, NavigationComponent],
  imports: [
    MaterialModuleModule,
    BoardModule,
    StoreModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
