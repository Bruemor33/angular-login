import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ApplicationContract } from "src/app/shared/models/applicationContract.model";
import { Auth } from "../auth.model";
import { AuthService } from "../auth.service";
import { takeUntil } from "rxjs/operators";
import { MAT_TOOLTIP_DEFAULT_OPTIONS } from "@angular/material";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"],
})
export class SignInComponent implements OnInit {
  public signInForm: FormGroup;
  public loading = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.generateSignInForm();
  }

  /**
   * Generate Sign In Form
   *
   * Use FormGroup to construct the form and set controls
   * as well as validations
   *
   */
  private generateSignInForm() {
    this.signInForm = new FormGroup({
      email: new FormControl("", [
        Validators.required,
        Validators.maxLength(254),
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.maxLength(99),
      ]),
    });
  }

  /**
   * Sign In Method
   *
   * If the form is valid, make the api call and validate
   * the response using Validate Sign In
   *
   */
  public signIn() {
    const formValues = this.signInForm.value;
    this.signInForm.markAllAsTouched;

    if (this.signInForm.valid) {
      // call service to invoke clearAll() method

      this.loading = true;

      this.authService
        .signIn(formValues.email, formValues.password)
        .pipe(takeUntil(this.authService.clearSubOnRoute$))
        .subscribe((res: ApplicationContract<Auth>) => {
          this.validateSignIn(res);
        });
    } else {
      // create alert service and pass through error to set
    }
  }

  /**
   *
   * @param res
   * Pass through the response
   *
   * TODO: Set all of this up. I need to make a contract to wrap my models in
   * as well as the model of the response.
   *
   */
  private validateSignIn(res) {
    if (res.isSuccessful === true) {
      // TODO: Set user using method in auth service
      console.log("Successful", res);
    } else {
      // TODO: Set error using alert service method
      console.log("You failed!", res);
    }

    this.loading = false;
  }
}
