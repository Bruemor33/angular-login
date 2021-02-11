import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"],
})
export class SignInComponent implements OnInit {
  public signInForm: FormGroup;
  public loading = false;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.generateSignInForm();
  }

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

  public signIn() {
    const formValues = this.signInForm.value;
    this.signInForm.markAllAsTouched;

    if (this.signInForm.valid) {
      // call service to invoke clearAll() method

      this.loading = true;

      // call service to make sign in api call
    } else {
      // create alert service and pass through error to set
    }
  }

  private validateSignIn(res) {
    // if successful set user in auth service
    // set initial notification state

    // else
    // alert the issue

    this.loading = false;
  }
}
