import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SignInComponent } from "./auth/sign-in/sign-in.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressSpinnerModule,
} from "@angular/material";
import { RouterModule } from "@angular/router";
import { BaseLayoutComponent } from "./shared/layouts/base-layout/base-layout.component";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [AppComponent, BaseLayoutComponent],
  imports: [AppRoutingModule, BrowserAnimationsModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
