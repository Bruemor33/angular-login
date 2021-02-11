import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  {
    path: 'login',
    pathMatch: 'full',
    component: SignInComponent;
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
