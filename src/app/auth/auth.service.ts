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
  signIn(
    email: string,
    password: string
  ): Observable<ApplicationContract<Auth>> {
    const body = { email, password };
    // Api url will go here
    // const url = `${}/authenticateUser`;

    // Make api call
    // return this.http
    //          .post<ApplicationContract<Auth>>(url, body)
    //          .pipe(catchError(this.sharedService.handleErrorAndBail('signIn')))

    const dummyUser: Auth = {
      email: "test@email.com",
      password: "Qwerty!1234",
    };

    if (body === dummyUser) {
      // do something
      return;
    } else {
      // error out
    }
  }
}
