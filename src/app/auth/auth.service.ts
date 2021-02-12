import { Injectable } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { Observable, Subject } from "rxjs";
import { filter } from "rxjs/operators";
import { ApplicationContract } from "../shared/models/applicationContract.model";
import { Auth } from "./auth.model";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  public readonly clearSubOnRoute$ = new Subject();

  constructor(private router: Router) {
    router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((NavigationEnd) => {
        this.clearSubOnRoute$.next();
      });
  }

  /**
   * Api methods here. Using dummy data for now
   */
  public signIn(email: string, password: string) {
    const body = { email, password };

    const dummyUser = {
      email: "test",
      password: "123",
    };

    if (body != dummyUser) {
      // do something
      const result = console.log(body);
      return result;
    } else {
      // error out
      return console.log(dummyUser, body, "failed");
    }
  }
}
