import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SignInComponent } from "./sign-in/sign-in.component";

import { AppModule } from "../app.module";
import { AuthRoutingModule } from "./auth-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [SignInComponent],
  imports: [AuthRoutingModule, CommonModule, SharedModule],
})
export class AuthModule {}
