import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SignInComponent } from "./sign-in/sign-in.component";
import { AuthRoutingModule } from "./auth-routing/auth-routing.module";
import { AppModule } from "../app.module";

@NgModule({
  declarations: [SignInComponent],
  imports: [AuthRoutingModule, CommonModule, AppModule],
})
export class AuthModule {}
