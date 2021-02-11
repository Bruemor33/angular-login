import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BaseLayoutComponent } from "./shared/layouts/base-layout/base-layout.component";

const routes: Routes = [
  {
    path: "",
    component: BaseLayoutComponent,
    children: [
      {
        path: "auth",
        loadChildren: () =>
          import("./auth/auth.module").then((m) => m.AuthModule),
      },
    ],
  },
  {
    path: "**",
    redirectTo: "auth",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
